import { algData } from "./algData";
import * as AlgSetAPI from "./api/algSet";
import { createBuffers } from "./buffers";
import { GRAY } from "./colors";
import { randElement, randInt } from "./common/rand";
import { setColor } from "./cube";
import type { Scene } from "./scene";
import { promoteAlg, demoteAlg } from "./util";

import { scramble } from "@spencerchubb/solver";

type State = {
    scene: Scene,
    algSet: AlgSetAPI.AlgSet,
    preRotation: string,
    preAUF: string,
    postAUF: string,
}

let state: State = {
    scene: null,
    algSet: null,
    preRotation: "",
    preAUF: "",
    postAUF: "",
};

export function applyAUFs(alg: string): string {
    return _applyAUFs(alg, state.preAUF, state.postAUF);
}

export function applyAUFsBackwards(alg: string): string {
    const invPre = invert(state.preAUF);
    const invPost = invert(state.postAUF);
    return _applyAUFs(alg, invPost, invPre);
}

function _applyAUFs(alg: string, preAUF: string, postAUF: string): string {
    if (preAUF) {
        alg = `${preAUF} ${alg}`;
    }
    if (postAUF) {
        alg = `${alg} ${postAUF}`;
    }
    let split = alg.split(" ");
    const beginning = _cancelPair(split[0], split[1]);
    const end = _cancelPair(split[split.length - 2], split[split.length - 1]);
    split = split.slice(2, -2);
    split = beginning.concat(split).concat(end);
    return split.join(" ");
}

function _cancelPair(a: string, b: string): string[] {
    if (a[0] !== "U" || b[0] !== "U") {
        return [a, b];
    }
    const canceledValue = (_moveToValue(a) + _moveToValue(b)) % 4;
    if (canceledValue === 0) {
        return [];
    }
    return [_valueToMove(canceledValue)];
}

function _moveToValue(move: string): number {
    if (move.endsWith("'")) {
        return 3;
    } else if (move.endsWith("2")) {
        return 2;
    } else {
        return 1;
    }
}

function _valueToMove(value: number): string {
    const moves = ["", "U", "U2", "U'"];
    return moves[value];
}

function invert(move: string) {
    if (move === "") {
        return "";
    } else if (move.endsWith("'")) {
        return move.slice(0, -1);
    } else if (move.endsWith("2")) {
        return move;
    } else {
        return `${move}'`;
    }
}

function generateRandAUF(): string {
    const options = ["", "U", "U2", "U'"];
    return options[randInt(4)];
}

export function setScene(scene: Scene) {
    state.scene = scene;
}

function getFirstAlg(): string {
    const trainingAlgs = state.algSet.trainingAlgs;
    if (trainingAlgs && trainingAlgs.length > 0) {
        return trainingAlgs[0].Alg;
    }
    console.log("No algs to load", trainingAlgs);
    return "";
}

export async function loadCurrAlg(uid: number, setName: string): Promise<string> {
    const scene = state.scene;
    if (!scene) {
        console.error("Scene not set. Have you called setScene()?");
        return;
    }

    // If there is no algSet or the algSet is for a different set, load a new algSet
    if (!state.algSet || state.algSet.name !== setName) {
        state.algSet = await AlgSetAPI.get(uid, setName);

        if (state.algSet.cube == "2x2") {
            scene.cube.setNumOfLayers(2);
            scene.buffers = createBuffers(scene);
            scene.cube.solve();
        } else if (state.algSet.cube == "3x3") {
            scene.cube.setNumOfLayers(3);
            scene.buffers = createBuffers(scene);
            scene.cube.solve();
        }
    }

    let alg = getFirstAlg();

    state.preAUF = generateRandAUF();
    state.postAUF = generateRandAUF();

    scene.cube.solve();
    scene.cube.execAlg(state.preRotation);

    state.algSet.inactive.forEach(stickerIdx => {
        setColor(scene.cube.stickers[stickerIdx], GRAY);
    });

    let algWithAUFs = applyAUFs(alg);
    scene.cube.execAlgReverse(algWithAUFs);

    return alg;
}

export async function nextAlg(promote: boolean, uid: number, setName: string): Promise<string> {
    if (promote) {
        promoteAlg(state.algSet.trainingAlgs);
    } else {
        demoteAlg(state.algSet.trainingAlgs);
    }

    if (state.algSet.id === -1) {
        const { trainingAlgs, cube, inactive, moves, disregard, onlyOrientation } = state.algSet;
        const res = await AlgSetAPI.create(uid, setName, trainingAlgs, cube, inactive, moves, disregard, onlyOrientation);
        state.algSet.id = res.id;
    } else {
        const { id, trainingAlgs } = state.algSet;
        AlgSetAPI.update(id, trainingAlgs);
    }

    return loadCurrAlg(uid, setName);
}

export function getAlgSetNames(): string[] {
    return Object.keys(algData);
}

export async function getScramble(): Promise<string> {
    let alg = getFirstAlg();
    const scrambles = await scramble({
        alg,
        moves: "U U' F F' R R'",
        disregard: state.algSet.disregard,
        onlyOrientation: state.algSet.onlyOrientation,
    });
    return randElement(scrambles);
}
