import { getTrainingAlgs, TrainingAlg, writeTrainingAlgs } from "./api";
import {
    CubingAppUser,
    initialAuthCheck,
    renderCreateAccountButton,
    renderEmailInput,
    renderGoogleSignInButton,
    renderPasswordInput,
    renderSignInButton,
    signOut,
} from "./auth";
import { createBuffers } from "./buffers";
import { GRAY } from "./colors";
import { createElement, querySelector, setOptions } from "./common/element";
import { setColor, Sticker } from "./cube";
import { renderModal } from "./modal";
import { newScene, scenes, startLoop } from "./scene";
import * as slide from "./slide";
import { getOrientation, setOrientation } from "./store";
import { addListenersForLeftModal } from "./ui";
import { promoteAlg, demoteAlg } from "./util";

let canvas: HTMLCanvasElement = document.querySelector("canvas");
let gl: WebGLRenderingContext = canvas.getContext("webgl");

type AlgSet = { cube: string, name: string, inactive: number[], algs: string[] };

const algData: AlgSet[] = require("./alg-data.json");

type State = {
    page: "landing" | "train",
    user: CubingAppUser | null,
    showSolution: boolean,
    retried: boolean,
    solved: boolean,
    settingsOpen: boolean,
    preRotation: string,
    algSet: AlgSet,
    algs: TrainingAlg[],
    preAUF: string,
    postAUF: string,
}

let state: State = {
    page: "landing",
    user: null,
    showSolution: false,
    retried: false,
    solved: false,
    settingsOpen: false,
    preRotation: "",
    algSet: null,
    algs: [],
    preAUF: "",
    postAUF: "",
};

function applyPre(alg: string, auf: string): string {
    if (auf) {
        return `${auf} ${alg}`;
    }
    return alg;
}

function applyPost(alg: string, auf: string): string {
    if (auf) {
        return `${alg} ${auf}`;
    }
    return alg
}

function matching(stickers: Sticker[], shouldMatch: number[][]): boolean {
    for (let i = 0; i < shouldMatch.length; i++) {
        const first = stickers[shouldMatch[i][0]].face;
        for (let j = 1; j < shouldMatch[i].length; j++) {
            if (first !== stickers[shouldMatch[i][j]].face) {
                return false;
            }
        }
    }
    return true;
}

function solved(stickers: Sticker[], algSet: AlgSet): boolean {
    switch (algSet.name) {
        case "CMLL":
            return matching(stickers, [
                [0, 2, 6, 8],
                [9, 15],
                [29, 35],
                [36, 42],
                [45, 51],
            ]);
        case "F2L":
            return matching(stickers, [
                [18, 19, 20, 21, 22, 23, 24, 25, 26],
                [10, 11, 13, 14, 16, 17],
                [27, 28, 30, 31, 33, 34],
                [37, 38, 40, 41, 43, 44],
                [46, 47, 49, 50, 52, 53],
            ]);
        case "OLL":
            return matching(stickers, [
                [0, 1, 2, 3, 4, 5, 6, 7, 8],
                [10, 11, 13, 14, 16, 17],
                [18, 19, 20, 21, 22, 23, 24, 25, 26],
                [27, 28, 30, 31, 33, 34],
                [37, 38, 40, 41, 43, 44],
                [46, 47, 49, 50, 52, 53],
            ]);
        // PLL and ZBLL have same logic
        case "PLL":
        case "ZBLL":
            return matching(stickers, [
                [0, 1, 2, 3, 4, 5, 6, 7, 8],
                [9, 12, 15],
                [29, 32, 35],
                [36, 39, 42],
                [45, 48, 51],
                [10, 11, 13, 14, 16, 17],
                [18, 19, 20, 21, 22, 23, 24, 25, 26],
                [27, 28, 30, 31, 33, 34],
                [37, 38, 40, 41, 43, 44],
                [46, 47, 49, 50, 52, 53],
            ]);
        // case "2x2 CLL":
        // case "2x2 EG1":
        // case "2x2 EG2":
        default:
            console.error("Not implemented yet:", algSet.name);
    }
}

function renderDrawer() {
    const drawerEle: HTMLElement = document.querySelector("#rightDrawer");
    if (state.settingsOpen) {
        const optionsData = [
            { value: "", text: "White Green" },
            { value: "y'", text: "White Orange" },
            { value: "y2", text: "White Blue" },
            { value: "y", text: "White Red" },
            { value: "z2", text: "Yellow Green" },
            { value: "z2 y", text: "Yellow Orange" },
            { value: "x2", text: "Yellow Blue" },
            { value: "z2 y'", text: "Yellow Red" },
            { value: "x y2", text: "Green White" },
            { value: "x y", text: "Green Red" },
            { value: "x", text: "Green Yellow" },
            { value: "x y'", text: "Green Orange" },
            { value: "x'", text: "Blue White" },
            { value: "x' y", text: "Blue Red" },
            { value: "x' y2", text: "Blue Yellow" },
            { value: "x' y'", text: "Blue Orange" },
            { value: "z y", text: "Orange White" },
            { value: "z", text: "Orange Green" },
            { value: "z y'", text: "Orange Yellow" },
            { value: "z y2", text: "Orange Blue" },
            { value: "z' y'", text: "Red White" },
            { value: "z'", text: "Red Green" },
            { value: "z' y", text: "Red Yellow" },
            { value: "z' y2", text: "Red Blue" },
        ];
        let optionsHTML = "";
        optionsData.forEach(option => {
            const selected = option.value === state.preRotation ? "selected" : "";
            optionsHTML += `<option value="${option.value}" ${selected}>${option.text}</option>`;
        });
        drawerEle.innerHTML = `
        ${slide.renderHeader("Settings")}
        <p>Cube Orientation</p>
        <select id="orientationSelect">
            ${optionsHTML}
        </select>
        `
            ;
        slide.open(drawerEle);
    } else {
        slide.close(drawerEle);
    }
}

function renderTrainPage() {
    querySelector("#iconContainer", { style: "display: flex;" });

    document.querySelector("#root").innerHTML = `
    <div class="row slideWrapper">
        <div class="col w-full h-full">
            <div id="scene" class="glDiv mt-4"></div>
            <p id="solution-text"
                title="Press space to show solution"
                class="bg-neutral-700 bg-opacity-75"
                style="margin-top: 1rem; color: white; font-size: 18px; padding: 8px; border-radius: 8px;">
                Show solution
            </p>
            <div class="row" style="margin-top: 1rem;">
                <select id="alg-set-select"></select>
                <div style="width: 24px;"></div>
                <button id="try-again" class="btn-primary" title="Press backspace to try again">Try Again</button>
                <div style="width: 24px;"></div>
                <button id="next" class="btn-primary" title="Press enter for next algorithm">Next</button>
            </div>
        </div>
        <div id="rightDrawer" class="slideLeft slideLeftClosed col"></div>
    </div>
    `;

    let scene = newScene("#scene");
    scenes.push(scene);
    scene.cube.solve();
    scene.dragEnabled = true;

    startLoop();

    document.addEventListener('keydown', (event) => {
        if (event.key === " ") {
            // Prevent space from scrolling down
            event.preventDefault();

            state.showSolution = true;
            renderSolutionText();
        } else if (event.key == "Backspace") {
            retry();
        } else if (event.key == "Enter") {
            nextAlg();
        } else if (scene.cube.matchKeyToTurn(event)) {
            if (solved(scene.cube.stickers, state.algSet)) {
                state.solved = true;
                renderSolutionText();
            }
        }
    });

    const algSetSelect = document.querySelector("#alg-set-select");
    algSetSelect.addEventListener("change", (event) => {
        const setName = (event.target as HTMLInputElement).value;
        const algSet = findAlgSet(setName);
        renderAlgSet(algSet);
    });
    algData.forEach(algSet => {
        const option = document.createElement("option");
        option.textContent = algSet.name;
        option.value = algSet.name;
        algSetSelect.appendChild(option);
    });


    // Iterate 'algData' and find the desired set. 
    function findAlgSet(set: string) {
        return algData.find(algSet => algSet.name === set);
    }

    function generateRandAUF() {
        const options = ["", "U", "U2", "U'"];
        return options[Math.floor(Math.random() * 4)];
    }

    function loadCurrAlg() {
        let alg = state.algs[0].Alg;

        state.preAUF = generateRandAUF();
        alg = applyPre(alg, state.preAUF);

        state.postAUF = generateRandAUF();
        alg = applyPost(alg, state.postAUF);
        
        scene.cube.solve();
        scene.cube.execAlg(state.preRotation);

        state.algSet.inactive.forEach(stickerIdx => {
            setColor(scene.cube.stickers[stickerIdx], GRAY);
        });

        scene.cube.execAlgReverse(alg);
    }

    function nextAlg() {
        if (state.showSolution || state.retried || !state.solved) {
            demoteAlg(state.algs);
        } else {
            promoteAlg(state.algs);
        }
        writeTrainingAlgs(state.user.uid, state.algSet.name, state.algs);
        state.showSolution = false;
        state.retried = false;
        state.solved = false;
        renderSolutionText();
        loadCurrAlg();
    }

    const solutionText: HTMLElement = document.querySelector("#solution-text");
    solutionText.addEventListener("click", () => {
        state.showSolution = true;
        renderSolutionText();
    });
    function renderSolutionText() {
        if (state.solved) {
            solutionText.textContent = "Solved!";
            solutionText.className = "bg-gray-300";

            solutionText.style.transform = "scale(1.2)";
            solutionText.style.transition = "all 0.2s ease-in-out";
            setTimeout(() => {
                solutionText.className = "bg-neutral-700";
                solutionText.style.transform = "scale(1)";
                solutionText.style.transition = "all 0.2s ease-out";
            }, 200);

            return;
        }
        if (state.showSolution) {
            let alg = state.algs[0].Alg;

            alg = applyPre(alg, state.preAUF);
    
            solutionText.textContent = alg;
            solutionText.className = "bg-neutral-700";
            return;
        }
        solutionText.textContent = "Show solution";
        solutionText.className = "bg-neutral-700 hover:cursor-pointer hover:bg-neutral-800";
    }

    function retry() {
        state.retried = true;
        loadCurrAlg();

        state.showSolution = false;
        renderSolutionText();
    }

    function renderAlgSet(algSet: AlgSet) {
        state.algSet = algSet;

        if (algSet.cube == "2x2") {
            scenes[0].cube.setNumOfLayers(2);
            scenes[0].buffers = createBuffers(gl, scenes[0].cube, scenes[0].perspectiveMatrix);
            scene.cube.solve();
        } else if (algSet.cube == "3x3") {
            scenes[0].cube.setNumOfLayers(3);
            scenes[0].buffers = createBuffers(gl, scenes[0].cube, scenes[0].perspectiveMatrix);
            scene.cube.solve();
        }

        getTrainingAlgs(state.user.uid, algSet.name)
            .then(data => {
                // Remove elements from storedAlgs that are in stored algs but not in algs.
                // Add elements to stored algs that are in algs but not in stored algs.
                let filtered = data.TrainingAlgsRecord.TrainingAlgs.filter(storedAlg => {
                    return algSet.algs.find(alg => storedAlg.Alg === alg);
                });
                algSet.algs.forEach(alg => {
                    const found = filtered.find(storedAlg => storedAlg.Alg === alg);
                    if (!found) {
                        filtered.push({ Score: 0, Alg: alg });
                    }
                });
                state.algs = filtered;
        
                // When rendering an alg set, load the first alg automatically.
                loadCurrAlg();
            });
    }

    state.showSolution = false;
    renderSolutionText();

    state.preRotation = getOrientation();
    renderAlgSet(algData[0]);

    window.addEventListener("resize", () => {
        renderDrawer();
    });

    document.addEventListener("click", (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.id === "closeDrawer") {
            slide.close(document.querySelector("#rightDrawer"));
        } else if (target.id === "next") {
            nextAlg();
        } else if (target.id === "icon0") {
            const [modal, modalBg] = renderModal();
            setOptions(modal, {
                children: [
                    createElement("p", {
                        innerHTML: `Signed in as ${state.user.email}`,
                        className: "mt-4",
                    }),
                    createElement("button", {
                        className: "btn-primary mt-4",
                        innerHTML: "Sign out",
                        onclick: () => {
                            signOut();
                            modalBg.remove();
                            
                            state.page = "landing";
                            state.user = null;
                            chooseRender();
                        },
                    }),
                ],
            });
            document.body.appendChild(modalBg);
        } else if (target.id === "icon1") {
            state.settingsOpen = true;
            renderDrawer();
        } else if (target.id === "try-again") {
            retry();
        }
    });

    document.addEventListener("change", (event) => {
        const target = event.target as HTMLOptionElement;
        if (target.id === "orientationSelect") {
            state.preRotation = target.value;
            loadCurrAlg();
            setOrientation(target.value);
        }
    });
}

function renderLandingPage() {
    querySelector("#iconContainer", { style: "display: none;" });

    const emailInput = renderEmailInput();
    const passwordInput = renderPasswordInput();

    const root = document.querySelector("#root") as HTMLElement;
    root.innerHTML = "";
    setOptions(root, {
        className: "col w-full h-full overflow-x-hidden overflow-y-auto",
        children: [
            createElement("div", {
                className: "flex flex-col w-full h-full p-4 max-w-xl",
                children: [
                    createElement("h1", {
                        innerHTML: "Algorithm Trainer",
                        className: "text-white",
                    }),
                    createElement("p", {
                        innerHTML: "Learn algorithms at lightning speed",
                        className: "text-gray-300 mt-4 font-bold",
                    }),
                    createElement("h2", {
                        innerHTML: "1. Memorize faster",
                        className: "text-white mt-4",
                    }),
                    // createElement("p", {
                    //     innerHTML: "This algorithm trainer uses spaced repetition to help you learn algorithms faster. Here is how it works:",
                    //     className: "text-white mt-4",
                    // }),
                    createElement("ul", {
                        children: [
                            createElement("li", {
                                innerHTML: "Get an algorithm right, and you'll see it less often.",
                                className: "text-white",
                            }),
                            createElement("li", {
                                innerHTML: "Get an algorithm wrong, and you'll see it more often.",
                                className: "text-white",
                            }),
                        ],
                    }),
                    createElement("h2", {
                        innerHTML: "2. Virtual cube",
                        className: "text-white",
                    }),
                    createElement("p", {
                        innerHTML: "To turn the cube, you can click and drag. Or you can use a keyboard",
                        className: "text-white mt-4",
                    }),
                    createElement("p", {
                        innerHTML: "Virtual cubes are better because:",
                        className: "text-white mt-4",
                    }),
                    createElement("ul", {
                        children: [
                            createElement("li", {
                                innerHTML: "You'll never have to scramble a cube again",
                                className: "text-white",
                            }),
                            createElement("li", {
                                innerHTML: "You can practice anywhere, anytime",
                                className: "text-white",
                            }),
                        ],
                    }),
                    state.user
                        ? createElement("button", {
                            innerHTML: "Get Started",
                            className: "btn-primary",
                            onclick: () => {
                                state.page = "train";
                                renderTrainPage();
                            },
                        })
                        : createElement("div", {
                            className: "self-center col rounded-xl shadow-md shadow-slate-400 p-4",
                            children: [
                                renderGoogleSignInButton(user => {
                                    state.user = user;
                                    renderLandingPage();
                                }),
                                createElement("div", { style: "height: 1rem" }),
                                createElement("div", { className: "bg-gray-300 w-full h-0.5" }),
                                createElement("div", { style: "height: 1rem" }),
                                createElement("p", { innerHTML: "Or use email and password", style: "color: white;" }),
                                createElement("div", { style: "height: 1rem" }),
                                emailInput,
                                createElement("div", { style: "height: 1rem" }),
                                passwordInput,
                                createElement("div", { style: "height: 1rem" }),
                                createElement("div", {
                                    className: "row",
                                    children: [
                                        renderCreateAccountButton(emailInput, passwordInput, user => {
                                            state.user = user;
                                            renderLandingPage();
                                        }),
                                        createElement("div", { style: "width: 1rem" }),
                                        renderSignInButton(emailInput, passwordInput, user => {
                                            state.user = user;
                                            renderLandingPage();
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    createElement("div", { style: "min-height: 1rem" }),
                ],
            }),
        ],
    });
}

function chooseRender() {
    if (state.page === "landing") {
        renderLandingPage();
    } else if (state.page === "train") {
        renderTrainPage();
    }
}

function main() {
    addListenersForLeftModal();

    state.user = initialAuthCheck();
    chooseRender();
}

main();