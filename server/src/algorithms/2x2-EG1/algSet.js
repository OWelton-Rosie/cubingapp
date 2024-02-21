function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let algSet = {
    "puzzle": "2x2",
    "diagramType": "2D",
    "pre": () => randElement(["", "U", "U'", "U2"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "subsets": ["Antisune", "H", "L", "Pi", "Sune", "T", "U"],
    "cases": {
        "EG1 AS 1": {
            "algs": {
                "U R' F R2 U R' F' U' R U' R'": {},
                "U U2 B U' R2 F2 U' F": {},
                "R' U' R U' R' U2 R r2 R U2 R' U' R U2 R' F R' F' R U2": {},
                "U U' L' U' L U' F' L' U L2 F L'": {}
            },
            "subset": "Antisune"
        },
        "EG1 AS 2": {
            "algs": {
                "U R U' R' F' U' F2 R U' R'": {},
                "U2 L' U' L F2 U' F' L' U' L": {},
                "U F' L F L' F' L' U L U' L F L'": {},
                "R U' F2 R U2 R U' B": {}
            },
            "subset": "Antisune"
        },
        "EG1 AS 3": {
            "algs": {
                "F' R U R' U' R U R2 F' R": {},
                "U' R U' R' U2 R' F R2 U2 R' F": {},
                "F' L F L' U' L F L2 U' L": {},
                "F' L F L' U' R U R' L' U' L": {}
            },
            "subset": "Antisune"
        },
        "EG1 AS 4": {
            "algs": {
                "R U' R' F' U' R U R' U' F": {},
                "U2 F U' L' U L U' F' L' U' L": {},
                "U' R U R' U2 R' F' R F R' F R": {},
                "U F R U' R2 F' R U F' R U R'": {}
            },
            "subset": "Antisune"
        },
        "EG1 AS 5": {
            "algs": {
                "U' R U R' F' U' R U R' U' R U R'": {},
                "d U2 L' U L U' L' U L U L F L' F'": {},
                "U' U2 F' R' F R U R U R' U' R U R'": {},
                "U' U2 L' U L U' L' U L U L F L' F'": {}
            },
            "subset": "Antisune"
        },
        "EG1 AS 6": {
            "algs": {
                "U2 R U' R2 F R U' R' F R F'": {},
                "U2 L F' L2 U L U' L' U L F'": {}
            },
            "subset": "Antisune"
        },
        "EG1 H 1": {
            "algs": {
                "U' R' F R2 U' R' F R U R' F'": {},
                "U' R' F R2 U' R2 U' F U R": {},
                "U R U' R2 F R F' R' F' R F": {},
                "F' R' F R F R' F' R2 U R'": {}
            },
            "subset": "H"
        },
        "EG1 H 2": {
            "algs": {
                "U' F' U R U' R2 F2 R U' F": {},
                "F R U' R2 F U' F2 U R": {},
                "U F' U R U' R2 F2 R U' F": {},
                "U R U' R' U' R U' R2 F2 R U R U R'": {}
            },
            "subset": "H"
        },
        "EG1 H 3": {
            "algs": {
                "U R' F R F' U2 F R U2 R' F": {},
                "R' U' R' F2 U F' R F'": {},
                "U R U' R' F U2 x U' R' U2 R U'": {},
                "U' F U2 R U' R' F2 R' F2 R F'": {}
            },
            "subset": "H"
        },
        "EG1 H 4": {
            "algs": {
                "U' R U R' F' R U R' U' R U R' U'": {},
                "F' U R' F R F' U F2": {},
                "U' R U R' F' R U R' U' R U R'": {},
                "R' F R F' R' F R U' R' F R F'": {}
            },
            "subset": "H"
        },
        "EG1 L 1": {
            "algs": {
                "U R U' R' U R U' R2 F' R F": {},
                "U U R U R' F' R U2 R' U2 R U R'": {},
                "U U F R U' R' F' R U R' F' R U R'": {}
            },
            "subset": "L"
        },
        "EG1 L 2": {
            "algs": {
                "U' U' R' F R U' R' F R2 U R' F' U2": {},
                "U' U2 x R' U' R U' R' U' R U' R' U2 R": {},
                "U' U' L' U L U' L' U L2 F L' F'": {},
                "U' U' R' F R U' R' F R2 U R' F'": {}
            },
            "subset": "L"
        },
        "EG1 L 3": {
            "algs": {
                "U R' U R2 U' R2 U' F R2 U' R'": {}
            },
            "subset": "L"
        },
        "EG1 L 4": {
            "algs": {
                "U R' F R2 U R' F' R U2 R'": {},
                "U R U2 R' F R U' R2 F' R": {}
            },
            "subset": "L"
        },
        "EG1 L 5": {
            "algs": {
                "U2 R U R' F' R U R' U' F R' F' R": {},
                "U2 U F' R' F R U' R U R' U' R U R' U'": {},
                "U2 L' U L y' R U2 R U' R2": {}
            },
            "subset": "L"
        },
        "EG1 L 6": {
            "algs": {
                "U2 U2 F R U' R' U R' F' R U R' F' R": {},
                "U2 R' U2 F R U2 R U' R2 F": {},
                "U2 U' L' U' L F L' U' L U F' L F L'": {},
                "U R U' R' U' y R U R2 F' R": {}
            },
            "subset": "L"
        },
        "EG1 Pi 1": {
            "algs": {
                "U2 U' F U' R' F R U' F2 R U R'": {},
                "U2 F2 R U R' U2 R U R' U' F": {},
                "U' R U' R2 F R2 U' R F2 R2 U'": {},
                "U' R' F R2 U' R2 F R' F2 R2": {}
            },
            "subset": "Pi"
        },
        "EG1 Pi 2": {
            "algs": {
                "U' R U' R2 F R2 U' R'": {},
                "U' R' F R2 U' R2 F R": {},
                "U' R U R2 F' R2 U R'": {},
                "U' R' F' R2 U R2 F' R": {}
            },
            "subset": "Pi"
        },
        "EG1 Pi 3": {
            "algs": {
                "U' F R' F U' F2 R U R": {},
                "U' F' R U2 R' F' U2 F R' F' R": {}
            },
            "subset": "Pi"
        },
        "EG1 Pi 4": {
            "algs": {
                "U' R U' R' U R U' R' F R U' R'": {},
                "U' F' R U R' U' R U R' F' R U R'": {}
            },
            "subset": "Pi"
        },
        "EG1 Pi 5": {
            "algs": {
                "R U' R2 F R U R U' R' U' R' F R F'": {},
                "U' R U R' U R U' R2 F' R F R' F' R": {},
                "U' L F' L' F L F' L2 U' L U L' U L U'": {},
                "U F U' R U2 R' F' R U R' F'": {}
            },
            "subset": "Pi"
        },
        "EG1 Pi 6": {
            "algs": {
                "U' R' F' R U' R' F R2 U R' F' R U R'": {},
                "U' R' F R F' R' F R2 U R' U' R U' R'": {},
                "F R U' R' F R U2 R' U F'": {},
                "U' F R' F' R U R U R' U' R' F' R2 U R'": {}
            },
            "subset": "Pi"
        },
        "EG1 S 1": {
            "algs": {
                "U2 R U R' U F R U' R2 F' R": {},
                "U2 U' L F' L2 U' L F U L' U L": {},
                "U2 U F' L U2 F2 R U' x'": {},
                "U2 U' R U' R2 F' R F U R' F R": {}
            },
            "subset": "Sune"
        },
        "EG1 S 2": {
            "algs": {
                "R U R' F2 U F R U R'": {},
                "U F R' F' R F R U' R' U R' F' R": {}
            },
            "subset": "Sune"
        },
        "EG1 S 3": {
            "algs": {
                "U2 F R' F' R U R' F' R2 U R'": {},
                "U2 U R' F R U2 R U' R2 F2 R F'": {}
            },
            "subset": "Sune"
        },
        "EG1 S 4": {
            "algs": {
                "U F' R' F R2 U R' U' F R' F' R U": {},
                "U F' R' F R2 U R' U' F R' F' R": {},
                "F' U R U' R' U F R U R'": {}
            },
            "subset": "Sune"
        },
        "EG1 S 5": {
            "algs": {
                "U R U' R' U R U' R' U F R U' R'": {},
                "U U2 L' U' L F U L' U' L U L' U' L": {},
                "U U2 R2 F U' R U' R U' F2": {},
                "U R U' R' U R U' R' U' R' F' R F": {}
            },
            "subset": "Sune"
        },
        "EG1 S 6": {
            "algs": {
                "R' F R2 U' R' U R U' R' F": {},
                "R' F R2 U' R' U L F' L' F": {}
            },
            "subset": "Sune"
        },
        "EG1 T 1": {
            "algs": {
                "F R U' R2 F' R U R' F' R": {},
                "F L F' L2 U' L U L' U' L": {},
                "U R2 U R U' R2 F R U2 R' F": {},
                "U2 R U2 R' U' R' F' R F R' F' R": {}
            },
            "subset": "T"
        },
        "EG1 T 2": {
            "algs": {
                "F' R' F R2 U R' U' R U R'": {},
                "U2 R U2 R' F R U' R' F' R U R'": {},
                "U2 R U' R' F R U' R' F R U R' F'": {}
            },
            "subset": "T"
        },
        "EG1 T 3": {
            "algs": {
                "U R U' R2 F R U R U2 R'": {},
                "U U2 R' F R2 U' R' U' R' F2 R": {},
                "U U2 L' U L2 F' L' U' L' U2 L U2": {}
            },
            "subset": "T"
        },
        "EG1 T 4": {
            "algs": {
                "U' U' R' U F R2 U' R2 U' F U' R": {},
                "U' R2 B2 U' R' U' R U' R' U R'": {}
            },
            "subset": "T"
        },
        "EG1 T 5": {
            "algs": {
                "U' R' F' R2 U R' F' R U R'": {},
                "U' U2 R U R2 F' R F R' F' R": {},
                "U' U2 R U R2 F' R F R' F' R U2": {}
            },
            "subset": "T"
        },
        "EG1 T 6": {
            "algs": {
                "U' U' R U' R' U2 F R U2 R' F": {},
                "U' U' R' F R2 U R' F' U2 R' F R F'": {},
                "U' R U R' F R U R' F U' R U' R'": {}
            },
            "subset": "T"
        },
        "EG1 U 1": {
            "algs": {
                "U U2 R U R' U R U R2 F R2 U' R'": {},
                "U U2 R U R2 F' R2 U' R' U' R U' R'": {},
                "U U2 R U' R2 F R2 U R' U' R U' R'": {},
                "U2 R2 U' R' U' R U' R' U R'": {}
            },
            "subset": "U"
        },
        "EG1 U 2": {
            "algs": {
                "U2 y R' U R' U' R U' R' U' F2 R2": {},
                "U' F R2 B R2 F U F2 R2": {},
                "U' R U R' F' U' R U R' U' F R' F' R": {},
                "U x U' R' U R U' F R U R U'": {}
            },
            "subset": "U"
        },
        "EG1 U 3": {
            "algs": {
                "F' U2 R U2 R' U2 F": {},
                "U y' R U R' F R2 F' R U' R'": {},
                "U2 R U' R2 F2 R F' U R U R'": {},
                "R U R' U F' R U R' U' R U R2 F2 R": {}
            },
            "subset": "U"
        },
        "EG1 U 4": {
            "algs": {
                "U R' F R F' R' F R2 U' R'": {},
                "U U2 R U' R' F R U' R2 F R": {}
            },
            "subset": "U"
        },
        "EG1 U 5": {
            "algs": {
                "U2 R U' R' U R U' R' U' F R U' R'": {},
                "U R' F R F' U R U' R' F R U' R'": {},
                "U2 L F' L' U L F' L' U L' U' L F": {},
                "F U' R' F2 R F' U2 F'": {}
            },
            "subset": "U"
        },
        "EG1 U 6": {
            "algs": {
                "U2 R' F R U' R' F R U' R U R' F' U2": {},
                "U2 R' F R2 U' R' U y' R U R'": {},
                "U2 U L F' L' F U' L' U L F' L' U L": {},
                "U2 U2 F' U R U2 R' F U2 F": {}
            },
            "subset": "U"
        }
    }
}