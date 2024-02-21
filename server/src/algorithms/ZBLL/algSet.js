function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let algSet = {
    "puzzle": "3x3",
    "diagramType": "2D",
    "pre": () => randElement(["", "U", "U'", "U2"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "subsets": [
        "T1", "T2", "T3", "T4", "T5", "T6",
        "U1", "U2", "U3", "U4", "U5", "U6",
        "L1", "L2", "L3", "L4", "L5", "L6",
        "Pi1", "Pi2", "Pi3", "Pi4", "Pi5", "Pi6",
        "H1", "H2", "H3", "H4",
        "S1", "S2", "S3", "S4", "S5", "S6",
        "AS1", "AS2", "AS3", "AS4", "AS5", "AS6"
    ],
    "cases": {
        "ZBLL 1": {
            "algs": {
                "R' D R D' R' D R U R' D' R D R' D' R": {}
            },
            "subset": "T1"
        },
        "ZBLL 2": {
            "algs": {
                "R' U R U2 R' U' R U' R U R' U' R' U' R U R U' R'": {}
            },
            "subset": "T1"
        },
        "ZBLL 3": {
            "algs": {
                "R' U2 R U R' U R2 U2 R' U' R U' R'": {}
            },
            "subset": "T1"
        },
        "ZBLL 4": {
            "algs": {
                "R U2 R' U' R U' R2 U2 R U R' U R": {}
            },
            "subset": "T1"
        },
        "ZBLL 5": {
            "algs": {
                "R' U R U2 R' U' R U2 R' U' R U' R' U R": {}
            },
            "subset": "T1"
        },
        "ZBLL 6": {
            "algs": {
                "R U' R' U2 R U R' U2 R U R' U R U' R'": {}
            },
            "subset": "T1"
        },
        "ZBLL 7": {
            "algs": {
                "R' U R2 U R' U R' U' R U' R' U' R U R U' R'": {}
            },
            "subset": "T1"
        },
        "ZBLL 8": {
            "algs": {
                "R U R' U R U' R' U R' U' R2 U' R2 U2 R": {}
            },
            "subset": "T1"
        },
        "ZBLL 9": {
            "algs": {
                "R' U2 R U R' U R U' R' U' R U' R' U2 R": {}
            },
            "subset": "T1"
        },
        "ZBLL 10": {
            "algs": {
                "R U2 R' U' R U' R' U R U R' U R U2 R'": {}
            },
            "subset": "T1"
        },
        "ZBLL 11": {
            "algs": {
                "R' U' R2 U R2 U R2 U2 R' U R' U R": {}
            },
            "subset": "T1"
        },
        "ZBLL 12": {
            "algs": {
                "R U R2 U' R2 U' R2 U2 R U' R U' R'": {}
            },
            "subset": "T1"
        },
        "ZBLL 13": {
            "algs": {
                "R U R' F' R U R' U' R' F R U' R' F R U R U' R' F'": {}
            },
            "subset": "T2"
        },
        "ZBLL 14": {
            "algs": {
                "R' U' R U' R' U' R2 D r' U2 r D' R2 U' R": {}
            },
            "subset": "T2"
        },
        "ZBLL 15": {
            "algs": {
                "R U' R2 D' r U2 r' D R2 U R'": {}
            },
            "subset": "T2"
        },
        "ZBLL 16": {
            "algs": {
                "R' U R2 D r' U2 r D' R2 U' R": {}
            },
            "subset": "T2"
        },
        "ZBLL 17": {
            "algs": {
                "R' U2 R U2 R2 D' R U2 R' D R2 U' R' U R": {}
            },
            "subset": "T2"
        },
        "ZBLL 18": {
            "algs": {
                "R U R' U2 R' D' R U R' D R2 U' R' U R U' R'": {}
            },
            "subset": "T2"
        },
        "ZBLL 19": {
            "algs": {
                "R' U' R U R2 D' R U2 R' D R2 U2 R' U2 R": {}
            },
            "subset": "T2"
        },
        "ZBLL 20": {
            "algs": {
                "R U R' U' R U R2 D' R U' R' D R U2 R U' R'": {}
            },
            "subset": "T2"
        },
        "ZBLL 21": {
            "algs": {
                "R' D' R U' R' D R U' R U' R' U R U' R' U' R U R'": {}
            },
            "subset": "T2"
        },
        "ZBLL 22": {
            "algs": {
                "R U' R' U R U R' U' R U R' U R' D' R U R' D R": {}
            },
            "subset": "T2"
        },
        "ZBLL 23": {
            "algs": {
                "R U R D R' U R D' R' U L' U R' U' L": {}
            },
            "subset": "T2"
        },
        "ZBLL 24": {
            "algs": {
                "r U r' R U R' U' R U R' U' r U' r' F R U R' U' F'": {}
            },
            "subset": "T2"
        },
        "ZBLL 25": {
            "algs": {
                "R' U R U2 R' L' U R U' L": {}
            },
            "subset": "T3"
        },
        "ZBLL 26": {
            "algs": {
                "R U' R' U2 R L U' R' U L'": {}
            },
            "subset": "T3"
        },
        "ZBLL 27": {
            "algs": {
                "R' U' R2 U R' F' R U R' U' R' F R2 U' R' U' R' U R": {}
            },
            "subset": "T3"
        },
        "ZBLL 28": {
            "algs": {
                "r U' r U2 R' F R U2 r2 F": {}
            },
            "subset": "T3"
        },
        "ZBLL 29": {
            "algs": {
                "R' U' R' D' R U R' D R U2 R U R' U R": {}
            },
            "subset": "T3"
        },
        "ZBLL 30": {
            "algs": {
                "R U R D R' U' R D' R' U2 R' U' R U' R'": {}
            },
            "subset": "T3"
        },
        "ZBLL 31": {
            "algs": {
                "R D R' U' R D' R' U' R' U R U' R' U R U R' U' R": {}
            },
            "subset": "T3"
        },
        "ZBLL 32": {
            "algs": {
                "R' D' R U R' D R U R U' R' U R U' R' U' R U R'": {}
            },
            "subset": "T3"
        },
        "ZBLL 33": {
            "algs": {
                "R' U' R U' R' U R F U' R' U2 R U F'": {}
            },
            "subset": "T3"
        },
        "ZBLL 34": {
            "algs": {
                "R U R' U R U' R' U' L' U2 R U2 R' U2 L": {}
            },
            "subset": "T3"
        },
        "ZBLL 35": {
            "algs": {
                "R' U2 R U R' U R F U R U2 R' U R U R' F'": {}
            },
            "subset": "T3"
        },
        "ZBLL 36": {
            "algs": {
                "r' U' R' F2 R F' R' F2 R2 U' R' U2 r": {}
            },
            "subset": "T3"
        },
        "ZBLL 37": {
            "algs": {
                "R' F2 R' B2 R F2 R' B2 R2": {}
            },
            "subset": "T4"
        },
        "ZBLL 38": {
            "algs": {
                "R' U2 R U' R' F R U R' U' R' F' R U' R": {}
            },
            "subset": "T4"
        },
        "ZBLL 39": {
            "algs": {
                "R' U2 R' D' R U2 R' D R' U R' U R U2 R'": {}
            },
            "subset": "T4"
        },
        "ZBLL 40": {
            "algs": {
                "R U2 R D R' U2 R D' R U' R U' R' U2 R": {}
            },
            "subset": "T4"
        },
        "ZBLL 41": {
            "algs": {
                "R U R D R' U' R D' R' U R' U R U2 R'": {}
            },
            "subset": "T4"
        },
        "ZBLL 42": {
            "algs": {
                "R' U' R' D' R U R' D R U' R U' R' U2 R": {}
            },
            "subset": "T4"
        },
        "ZBLL 43": {
            "algs": {
                "R' U R2 D R' U R D' R' U R' U' R U' R' U' R": {}
            },
            "subset": "T4"
        },
        "ZBLL 44": {
            "algs": {
                "R U' R2 D' R U' R' D R U' R U R' U R U R'": {}
            },
            "subset": "T4"
        },
        "ZBLL 45": {
            "algs": {
                "R' U' R U' F U' R' U R U F' R' U R": {}
            },
            "subset": "T4"
        },
        "ZBLL 46": {
            "algs": {
                "R' D' R U R' D R2 U R' U2 R U' R' U' R U' R'": {}
            },
            "subset": "T4"
        },
        "ZBLL 47": {
            "algs": {
                "F R U R' U' R U' R' U' R U R' F'": {}
            },
            "subset": "T4"
        },
        "ZBLL 48": {
            "algs": {
                "R U R' U2 R U' R' U2 R U' R2 F' R U R U' R' F": {}
            },
            "subset": "T4"
        },
        "ZBLL 49": {
            "algs": {
                "R U R D R' U' R D' R2": {}
            },
            "subset": "T5"
        },
        "ZBLL 50": {
            "algs": {
                "R U2 R' U2 R' F R U R U' R' F'": {}
            },
            "subset": "T5"
        },
        "ZBLL 51": {
            "algs": {
                "R2 B2 R' U2 R' U2 R B2 R' U R U' R'": {}
            },
            "subset": "T5"
        },
        "ZBLL 52": {
            "algs": {
                "R' D' R U R' D R2 U' R' U R U R' U' R U R'": {}
            },
            "subset": "T5"
        },
        "ZBLL 53": {
            "algs": {
                "F' U' r' F2 r U' r' F' r F": {}
            },
            "subset": "T5"
        },
        "ZBLL 54": {
            "algs": {
                "R U R' U' R U' R' L U' R U R' L'": {}
            },
            "subset": "T5"
        },
        "ZBLL 55": {
            "algs": {
                "R U R' U R U R' U2 L R U' R' U L'": {}
            },
            "subset": "T5"
        },
        "ZBLL 56": {
            "algs": {
                "R' U' R U' R2' F' R U R U' R' F U R U' R' U2 R": {}
            },
            "subset": "T5"
        },
        "ZBLL 57": {
            "algs": {
                "R' U' R U R' U' R2 D R' U2 R D' R' U R' U R": {}
            },
            "subset": "T5"
        },
        "ZBLL 58": {
            "algs": {
                "R U R D R' U2 R D' R' U' R' U R U' R' U' R U' R'": {}
            },
            "subset": "T5"
        },
        "ZBLL 59": {
            "algs": {
                "F R U R' U' R' F' U2 R U R U' R2 U2 R": {}
            },
            "subset": "T5"
        },
        "ZBLL 60": {
            "algs": {
                "R U' R' U' R U R D R' U2 R D' R' U' R'": {}
            },
            "subset": "T5"
        },
        "ZBLL 61": {
            "algs": {
                "x' U' R' D R U R' D' R x": {}
            },
            "subset": "T6"
        },
        "ZBLL 62": {
            "algs": {
                "R U R' U' R' F' R U2 R U2 R' F": {}
            },
            "subset": "T6"
        },
        "ZBLL 63": {
            "algs": {
                "R2 F2 R U2 R U2 R' F2 R U' R' U R": {}
            },
            "subset": "T6"
        },
        "ZBLL 64": {
            "algs": {
                "R D R' U' R D' R2 U R U' R' U' R U R' U' R": {}
            },
            "subset": "T6"
        },
        "ZBLL 65": {
            "algs": {
                "F U R U2 R' U R U R' F'": {}
            },
            "subset": "T6"
        },
        "ZBLL 66": {
            "algs": {
                "R U R' U' R U' R' U' F R U R' U' R' F' R": {}
            },
            "subset": "T6"
        },
        "ZBLL 67": {
            "algs": {
                "R' U' R U' R' U R' U' R U R' F' R U R' U' R' F R'": {}
            },
            "subset": "T6"
        },
        "ZBLL 68": {
            "algs": {
                "F R U R' U' R U R' U' F' R U R' U' R' F R F'": {}
            },
            "subset": "T6"
        },
        "ZBLL 69": {
            "algs": {
                "R U R' U' R U R2 D' R U2 R' D R U' R U' R'": {}
            },
            "subset": "T6"
        },
        "ZBLL 70": {
            "algs": {
                "R' U2 R F U' R' U R U F' R' U R": {}
            },
            "subset": "T6"
        },
        "ZBLL 71": {
            "algs": {
                "R' U2 R2 U R' U' R' U2 F' R U2 R U2 R' F": {}
            },
            "subset": "T6"
        },
        "ZBLL 72": {
            "algs": {
                "R' U R U R' U' R' D' R U2 R' D R U R": {}
            },
            "subset": "T6"
        },
        "ZBLL 73": {
            "algs": {
                "R U2 R' U' R U' R' U2 R' U2 R U R' U R": {}
            },
            "subset": "U1"
        },
        "ZBLL 74": {
            "algs": {
                "R U R' U' R U' R U2 R2 U' R U R' U' R2 U' R2": {}
            },
            "subset": "U1"
        },
        "ZBLL 75": {
            "algs": {
                "R' U' R U' R' U2 R2 U R' U R U2 R'": {}
            },
            "subset": "U1"
        },
        "ZBLL 76": {
            "algs": {
                "R U R' U R U2 R2 U' R U' R' U2 R": {}
            },
            "subset": "U1"
        },
        "ZBLL 77": {
            "algs": {
                "R U R' U' R U' R' U2 R U' R' U2 R U R'": {}
            },
            "subset": "U1"
        },
        "ZBLL 78": {
            "algs": {
                "R' U' R U R' U R U2 R' U R U2 R' U' R": {}
            },
            "subset": "U1"
        },
        "ZBLL 79": {
            "algs": {
                "R U2 R2 U' R2 U' R' U R' U' R U R' U R": {}
            },
            "subset": "U1"
        },
        "ZBLL 80": {
            "algs": {
                "R' U2 R2 U R2 U R U' R U R' U' R U' R'": {}
            },
            "subset": "U1"
        },
        "ZBLL 81": {
            "algs": {
                "R' U2 R U R' U R U R' U' R U' R' U2 R": {}
            },
            "subset": "U1"
        },
        "ZBLL 82": {
            "algs": {
                "R U2 R' U' R U' R' U' R U R' U R U2 R'": {}
            },
            "subset": "U1"
        },
        "ZBLL 83": {
            "algs": {
                "R' U' R U' R U2 R2 U' R2 U' R2 U R": {}
            },
            "subset": "U1"
        },
        "ZBLL 84": {
            "algs": {
                "R U R' U R' U2 R2 U R2 U R2 U' R'": {}
            },
            "subset": "U1"
        },
        "ZBLL 85": {
            "algs": {
                "R' U' R U' F U' R' U R U R' U R U' F'": {}
            },
            "subset": "U2"
        },
        "ZBLL 86": {
            "algs": {
                "R U R' U L' U R U' M' x' U' R U' R'": {}
            },
            "subset": "U2"
        },
        "ZBLL 87": {
            "algs": {
                "R U2 R2 F R F' M' U' R U' R' U M": {}
            },
            "subset": "U2"
        },
        "ZBLL 88": {
            "algs": {
                "R' U2 R F U' R' U R U R' U R U' F'": {}
            },
            "subset": "U2"
        },
        "ZBLL 89": {
            "algs": {
                "R2 D R' U' R D' R' U' R' U R U R'": {}
            },
            "subset": "U2"
        },
        "ZBLL 90": {
            "algs": {
                "R2 D' R U R' D R U R U' R' U' R": {}
            },
            "subset": "U2"
        },
        "ZBLL 91": {
            "algs": {
                "R U' R' U' R U R D R' U R D' R2": {}
            },
            "subset": "U2"
        },
        "ZBLL 92": {
            "algs": {
                "R' U R U R' U' R' D' R U' R' D R2": {}
            },
            "subset": "U2"
        },
        "ZBLL 93": {
            "algs": {
                "M' U R' U' F' U F R2 U R' U R U2 r'": {}
            },
            "subset": "U2"
        },
        "ZBLL 94": {
            "algs": {
                "F R U R' U' R U R' U' F' U' R' F' U' F U R": {}
            },
            "subset": "U2"
        },
        "ZBLL 95": {
            "algs": {
                "F R U' R' U' R U2 R' U' R U' R' U' R U2 R' U' F'": {}
            },
            "subset": "U2"
        },
        "ZBLL 96": {
            "algs": {
                "r' U' R' F R U r F R U' R' F'": {}
            },
            "subset": "U2"
        },
        "ZBLL 97": {
            "algs": {
                "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R": {}
            },
            "subset": "U3"
        },
        "ZBLL 98": {
            "algs": {
                "F2 R U' R' U' R U R' F' R U R' U' R' F R F2": {}
            },
            "subset": "U3"
        },
        "ZBLL 99": {
            "algs": {
                "R U' R' U R U' L U r' F U2 R U2 R2 x": {}
            },
            "subset": "U3"
        },
        "ZBLL 100": {
            "algs": {
                "R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R' U2 R": {}
            },
            "subset": "U3"
        },
        "ZBLL 101": {
            "algs": {
                "R U' L U L' U R' U' l U2 R U2 R2 x": {}
            },
            "subset": "U3"
        },
        "ZBLL 102": {
            "algs": {
                "R' U L' U' L U' R U l' U2 R' U2 R2 x'": {}
            },
            "subset": "U3"
        },
        "ZBLL 103": {
            "algs": {
                "F R U R U2 R' U' R U' R' U2 R' U2 R U' R' U' F'": {}
            },
            "subset": "U3"
        },
        "ZBLL 104": {
            "algs": {
                "r U R' U' r' F R2 U' R' U' R U2 R' U' F'": {}
            },
            "subset": "U3"
        },
        "ZBLL 105": {
            "algs": {
                "F U R U2 R' U R U R2 F' r U R U' r'": {}
            },
            "subset": "U3"
        },
        "ZBLL 106": {
            "algs": {
                "R U2 R' U2 R' F R U R U2 R' U' R U2 R' U' F'": {}
            },
            "subset": "U3"
        },
        "ZBLL 107": {
            "algs": {
                "R' U' R F R2 D' R U R' D R2 U' F'": {}
            },
            "subset": "U3"
        },
        "ZBLL 108": {
            "algs": {
                "r U R' U' r' F R U R' U' R F' R' U R": {}
            },
            "subset": "U3"
        },
        "ZBLL 109": {
            "algs": {
                "x R2 U2 R' D2 R U2 R' D2 R' x'": {}
            },
            "subset": "U4"
        },
        "ZBLL 110": {
            "algs": {
                "x R2 D2 R U2 R' D2 R U2 l": {}
            },
            "subset": "U4"
        },
        "ZBLL 111": {
            "algs": {
                "R U R' U R U' R' U2 R' D' R U2 R' D R2 U' R'": {}
            },
            "subset": "U4"
        },
        "ZBLL 112": {
            "algs": {
                "R' U2 R U R' U R' D R' U2 R D' R' U2 R'": {}
            },
            "subset": "U4"
        },
        "ZBLL 113": {
            "algs": {
                "R U' R' U' R U' R' U R' D' R U R' D R2 U R'": {}
            },
            "subset": "U4"
        },
        "ZBLL 114": {
            "algs": {
                "R' U R U R' U R U' R D R' U' R D' R2 U' R": {}
            },
            "subset": "U4"
        },
        "ZBLL 115": {
            "algs": {
                "R' U2 R U R' U R' D' R U' R' D R U R": {}
            },
            "subset": "U4"
        },
        "ZBLL 116": {
            "algs": {
                "R U' R' U' R U2 R' U2 R' D' R U' R' D R": {}
            },
            "subset": "U4"
        },
        "ZBLL 117": {
            "algs": {
                "R' U' R U2 R' F' R U R' U' R' F R2 U2 R' U R": {}
            },
            "subset": "U4"
        },
        "ZBLL 118": {
            "algs": {
                "R U R' U R U R' U2 R U' R2 D' R U' R' D R": {}
            },
            "subset": "U4"
        },
        "ZBLL 119": {
            "algs": {
                "F R U' R' U R U R' U R U' R' F'": {}
            },
            "subset": "U4"
        },
        "ZBLL 120": {
            "algs": {
                "F' R U R' U' R' F R2 U R' U2 R U R' U2 R U' R'": {}
            },
            "subset": "U4"
        },
        "ZBLL 121": {
            "algs": {
                "R2 D' r U2 r' D R U2 R": {}
            },
            "subset": "U5"
        },
        "ZBLL 122": {
            "algs": {
                "R2 D' R U2 R' D R U2 R": {}
            },
            "subset": "U5"
        },
        "ZBLL 123": {
            "algs": {
                "R U' R' D R' U' R D' R2 U R' U' R' U2 R'": {}
            },
            "subset": "U5"
        },
        "ZBLL 124": {
            "algs": {
                "R U R' U R U2 R2 U z U R' D R U' z'": {}
            },
            "subset": "U5"
        },
        "ZBLL 125": {
            "algs": {
                "R2 D' R U' R' D R2 U' R' U2 R": {}
            },
            "subset": "U5"
        },
        "ZBLL 126": {
            "algs": {
                "R' U R U R' U2 R U2 y R U' R' U2 R U' R'": {}
            },
            "subset": "U5"
        },
        "ZBLL 127": {
            "algs": {
                "R2 D R' U R D' R2 U' R U' R' U2 R U' R' U2 R U R'": {}
            },
            "subset": "U5"
        },
        "ZBLL 128": {
            "algs": {
                "R2' F' R U2 R U2' R' F U' R U R' U' R": {}
            },
            "subset": "U5"
        },
        "ZBLL 129": {
            "algs": {
                "R' U2 R2 D R' U2 R D' R2 U R U2 R' U2 R": {}
            },
            "subset": "U5"
        },
        "ZBLL 130": {
            "algs": {
                "R U R' U2 F2 R U2 R' U2 R' F2 R2 U R'": {}
            },
            "subset": "U5"
        },
        "ZBLL 131": {
            "algs": {
                "R' U2 R' D' R U2 R' D R U2 R U R' U R": {}
            },
            "subset": "U5"
        },
        "ZBLL 132": {
            "algs": {
                "R' U R U' R' U' R U2 R D R' U' R D' R2 U' R": {}
            },
            "subset": "U5"
        },
        "ZBLL 133": {
            "algs": {
                "R' U2 R U R2 F' R U R U' R' F R": {}
            },
            "subset": "U6"
        },
        "ZBLL 134": {
            "algs": {
                "R2 D R' U2 R D' R' U2 R'": {}
            },
            "subset": "U6"
        },
        "ZBLL 135": {
            "algs": {
                "R' U' R U R U R' U' R' U F R U R U' R' F'": {}
            },
            "subset": "U6"
        },
        "ZBLL 136": {
            "algs": {
                "R U' R' U' R U2 R' U' R' D' R U2 R' D R": {}
            },
            "subset": "U6"
        },
        "ZBLL 137": {
            "algs": {
                "R U R2 D' R U R' D R2 U2 R'": {}
            },
            "subset": "U6"
        },
        "ZBLL 138": {
            "algs": {
                "R U' R' U' R U2 R' U2 y' R' U R U2 R' U R": {}
            },
            "subset": "U6"
        },
        "ZBLL 139": {
            "algs": {
                "R' U R' U' D' R U' R' U2 R U' R' D R U' R": {}
            },
            "subset": "U6"
        },
        "ZBLL 140": {
            "algs": {
                "R U R' U R U' R' U F' R U2 R' U2 R' F R": {}
            },
            "subset": "U6"
        },
        "ZBLL 141": {
            "algs": {
                "R' U' R U R' U R U2 F R' U R U' F' R' U2 R": {}
            },
            "subset": "U6"
        },
        "ZBLL 142": {
            "algs": {
                "R U R' U R U' R' U R U' R' U' L' U R U' R' L": {}
            },
            "subset": "U6"
        },
        "ZBLL 143": {
            "algs": {
                "R U2 R D R' U2 R D' R' U2 R' U' R U' R'": {}
            },
            "subset": "U6"
        },
        "ZBLL 144": {
            "algs": {
                "R U' R' U R U R' U2 R' D' R U R' D R2 U R'": {}
            },
            "subset": "U6"
        },
        "ZBLL 145": {
            "algs": {
                "R U2 R' U2 R' U' R U R U' R' U2 R' U2 R": {}
            },
            "subset": "L1"
        },
        "ZBLL 146": {
            "algs": {
                "R U R' U R U' R' U R U' R' U R U2 R'": {}
            },
            "subset": "L1"
        },
        "ZBLL 147": {
            "algs": {
                "R U2 R' U' R U' R' U2 R U R' U R U2 R'": {}
            },
            "subset": "L1"
        },
        "ZBLL 148": {
            "algs": {
                "R U R' U R U2 R' U2 R U2 R' U' R U' R'": {}
            },
            "subset": "L1"
        },
        "ZBLL 149": {
            "algs": {
                "R2 U R' U R' U' R U' R' U' R U R U' R2": {}
            },
            "subset": "L1"
        },
        "ZBLL 150": {
            "algs": {
                "R2 U' R U' R U R' U R U R' U' R' U R2": {}
            },
            "subset": "L1"
        },
        "ZBLL 151": {
            "algs": {
                "R' U2 R U R' U R U' R U2 R' U' R U' R'": {}
            },
            "subset": "L1"
        },
        "ZBLL 152": {
            "algs": {
                "R U2 R' U' R U' R' U R' U2 R U R' U R": {}
            },
            "subset": "L1"
        },
        "ZBLL 153": {
            "algs": {
                "R2 U R' U' R' U R U R' U R U' R U' R2": {}
            },
            "subset": "L1"
        },
        "ZBLL 154": {
            "algs": {
                "r U r' U R U' R' U R U' R' M' U R U2' r'": {}
            },
            "subset": "L1"
        },
        "ZBLL 155": {
            "algs": {
                "R U R' U R U2 R' U R' U' R U' R' U2 R": {}
            },
            "subset": "L1"
        },
        "ZBLL 156": {
            "algs": {
                "R' U' R U' R' U2 R U' R U R' U R U2 R'": {}
            },
            "subset": "L1"
        },
        "ZBLL 157": {
            "algs": {
                "F R U' R' U' R U R D R' U' R D' R' U2 R' U' F'": {}
            },
            "subset": "L2"
        },
        "ZBLL 158": {
            "algs": {
                "F R U R2' F R F' R U' R' F'": {}
            },
            "subset": "L2"
        },
        "ZBLL 159": {
            "algs": {
                "L' U2 R U' R' U2 L R U' R'": {}
            },
            "subset": "L2"
        },
        "ZBLL 160": {
            "algs": {
                "R' U' R U R' F' R U R' U' R' F R2": {}
            },
            "subset": "L2"
        },
        "ZBLL 161": {
            "algs": {
                "R' U F' R U R' U' R' F R2 U' R' U' R U R' U' R": {}
            },
            "subset": "L2"
        },
        "ZBLL 162": {
            "algs": {
                "R U' R' U R U R' U R U' R2' D' R U R' D R": {}
            },
            "subset": "L2"
        },
        "ZBLL 163": {
            "algs": {
                "r U2 R r2 F R' F' r2 U2 r'": {}
            },
            "subset": "L2"
        },
        "ZBLL 164": {
            "algs": {
                "r U2 r2 F R F' r2 R' U2 r'": {}
            },
            "subset": "L2"
        },
        "ZBLL 165": {
            "algs": {
                "F R U R' U' F' r U r' U R U' R' r U' r'": {}
            },
            "subset": "L2"
        },
        "ZBLL 166": {
            "algs": {
                "r U r' R U R' U' r U' r' F U R U' R' F'": {}
            },
            "subset": "L2"
        },
        "ZBLL 167": {
            "algs": {
                "R U R' U R U' R' F2 R U2 R' U2 R' F2 R2 U' R'": {}
            },
            "subset": "L2"
        },
        "ZBLL 168": {
            "algs": {
                "R U R2 F2 R U2 R U2 R' F2 R U R' U' R U' R'": {}
            },
            "subset": "L2"
        },
        "ZBLL 169": {
            "algs": {
                "F' r U R' U' r' F R": {}
            },
            "subset": "L3"
        },
        "ZBLL 170": {
            "algs": {
                "R' U' R U R' F2 R U2 R' U2 R' F2 R2": {}
            },
            "subset": "L3"
        },
        "ZBLL 171": {
            "algs": {
                "F' R U2 R' U2 R' F R U R U' R'": {}
            },
            "subset": "L3"
        },
        "ZBLL 172": {
            "algs": {
                "R' U R U' R' U R U R' U' R2 D R' U R D' R'": {}
            },
            "subset": "L3"
        },
        "ZBLL 173": {
            "algs": {
                "F R U' R' U' R U2 R' U' F'": {}
            },
            "subset": "L3"
        },
        "ZBLL 174": {
            "algs": {
                "R' U' R U2 R' F' R U R' U' R' F R2 U R' U2 R": {}
            },
            "subset": "L3"
        },
        "ZBLL 175": {
            "algs": {
                "R' F R U R U' R' F' U R U R' U R U' R'": {}
            },
            "subset": "L3"
        },
        "ZBLL 176": {
            "algs": {
                "R2 D' R U' R' D R U R' U' R' U' R U R U R U' R": {}
            },
            "subset": "L3"
        },
        "ZBLL 177": {
            "algs": {
                "F R' F' R U R U' R' F U R U' R' U R U' R' F'": {}
            },
            "subset": "L3"
        },
        "ZBLL 178": {
            "algs": {
                "F' R U2 R' U2 R' F U2 R U R U' R2 U2 R": {}
            },
            "subset": "L3"
        },
        "ZBLL 179": {
            "algs": {
                "R U R' U R' D' R U2 R' D R2 U' R' U R U' R'": {}
            },
            "subset": "L3"
        },
        "ZBLL 180": {
            "algs": {
                "R' U' R' D' R U2 R' D R U R U' R' U' R": {}
            },
            "subset": "L3"
        },
        "ZBLL 181": {
            "algs": {
                "F R' F' r U R U' r'": {}
            },
            "subset": "L4"
        },
        "ZBLL 182": {
            "algs": {
                "R U R' U' R B2 R' U2 R U2 R B2 R2": {}
            },
            "subset": "L4"
        },
        "ZBLL 183": {
            "algs": {
                "F R U R' U' R' F' R U2 R U2 R'": {}
            },
            "subset": "L4"
        },
        "ZBLL 184": {
            "algs": {
                "R U' R' U R U' R' U' R U R2 D' R U' R' D R": {}
            },
            "subset": "L4"
        },
        "ZBLL 185": {
            "algs": {
                "R' F' R U R' U' R' F R U' R U R' U R": {}
            },
            "subset": "L4"
        },
        "ZBLL 186": {
            "algs": {
                "R U R' U R U R' U' R U R D R' U2 R D' R' U' R'": {}
            },
            "subset": "L4"
        },
        "ZBLL 187": {
            "algs": {
                "L R U' R' U R L' U R' U R U' R'": {}
            },
            "subset": "L4"
        },
        "ZBLL 188": {
            "algs": {
                "L U' R U R' L' U2 R U' R' U' R U' R'": {}
            },
            "subset": "L4"
        },
        "ZBLL 189": {
            "algs": {
                "R' U2 R U R' U' F' R U R' U' R' F R2 U R' U R": {}
            },
            "subset": "L4"
        },
        "ZBLL 190": {
            "algs": {
                "R' U2 R2 U R' U' R' U2 F R U R U' R' F'": {}
            },
            "subset": "L4"
        },
        "ZBLL 191": {
            "algs": {
                "R U R' U R U' R' U' L' U R U' M' x'": {}
            },
            "subset": "L4"
        },
        "ZBLL 192": {
            "algs": {
                "R U R D R' U2 R D' R' U' R' U R U R'": {}
            },
            "subset": "L4"
        },
        "ZBLL 193": {
            "algs": {
                "R' U2 R' D' R U2 R' D R2": {}
            },
            "subset": "L5"
        },
        "ZBLL 194": {
            "algs": {
                "R' U2 R' D' r U2 r' D R2": {}
            },
            "subset": "L5"
        },
        "ZBLL 195": {
            "algs": {
                "R D R' U2 R D' R' U' R' U2 R U' R' U' R": {}
            },
            "subset": "L5"
        },
        "ZBLL 196": {
            "algs": {
                "R U2 R U R U' R2 D R' U R D' R U R'": {}
            },
            "subset": "L5"
        },
        "ZBLL 197": {
            "algs": {
                "R U R' U2 R U R' U2 y' R' U2 R U' R' U' R": {}
            },
            "subset": "L5"
        },
        "ZBLL 198": {
            "algs": {
                "R' U2 R U R2 D' R U R' D R2": {}
            },
            "subset": "L5"
        },
        "ZBLL 199": {
            "algs": {
                "R U R' U' R U' R' U L' U R U' L U' R'": {}
            },
            "subset": "L5"
        },
        "ZBLL 200": {
            "algs": {
                "R U' R' U2 R U R' U2 R U R' U R2 D R' U' R D' R2": {}
            },
            "subset": "L5"
        },
        "ZBLL 201": {
            "algs": {
                "R' U2 R U2 R' U' R2 D R' U2 R D' R2 U2 R": {}
            },
            "subset": "L5"
        },
        "ZBLL 202": {
            "algs": {
                "F' R U R' U' R' F R2 U' R' U' R U' R' U R U R'": {}
            },
            "subset": "L5"
        },
        "ZBLL 203": {
            "algs": {
                "R U' R2 F2 R U2 R U2 R' F2 U2 R U' R'": {}
            },
            "subset": "L5"
        },
        "ZBLL 204": {
            "algs": {
                "R' U R2 D R' U R D' R' U2 R' U R U R' U' R": {}
            },
            "subset": "L5"
        },
        "ZBLL 205": {
            "algs": {
                "R U2 R D R' U2 R D' R2": {}
            },
            "subset": "L6"
        },
        "ZBLL 206": {
            "algs": {
                "R' F' R U R' U' R' F R2 U' R' U2 R": {}
            },
            "subset": "L6"
        },
        "ZBLL 207": {
            "algs": {
                "L' U R U' L U R2 U2 R U R' U R": {}
            },
            "subset": "L6"
        },
        "ZBLL 208": {
            "algs": {
                "F R U R' U' R' F' U' R U R U' R' U' R' U R": {}
            },
            "subset": "L6"
        },
        "ZBLL 209": {
            "algs": {
                "R' U' R U2 R' U' R y U2 R U2 R' U R U R'": {}
            },
            "subset": "L6"
        },
        "ZBLL 210": {
            "algs": {
                "R U2 R' U' R2 D R' U' R D' R2": {}
            },
            "subset": "L6"
        },
        "ZBLL 211": {
            "algs": {
                "R' U' R U R' U R U' L U' R' U L' U R": {}
            },
            "subset": "L6"
        },
        "ZBLL 212": {
            "algs": {
                "R' U R' D' R U R' U2 R U R' D U R U' R": {}
            },
            "subset": "L6"
        },
        "ZBLL 213": {
            "algs": {
                "R U2 R' U2 R U R2 D' R U2 R' D R2 U2 R'": {}
            },
            "subset": "L6"
        },
        "ZBLL 214": {
            "algs": {
                "R U R' U R U2 R D R' U2 R D' R' U2 R'": {}
            },
            "subset": "L6"
        },
        "ZBLL 215": {
            "algs": {
                "R' U R2 B2 R' U2 R' U2 R B2 U2 R' U R": {}
            },
            "subset": "L6"
        },
        "ZBLL 216": {
            "algs": {
                "R U' R2 D' R U' R' D R U2 R U' R' U' R U R'": {}
            },
            "subset": "L6"
        },
        "ZBLL 217": {
            "algs": {
                "R' U' R U R U2 R' U' R U' R2 U2 R": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 218": {
            "algs": {
                "R U R' U' R' U2 R U R' U R2 U2 R'": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 219": {
            "algs": {
                "R' U2 R U R' U R2 U R' U R U2 R'": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 220": {
            "algs": {
                "R U2 R' U' R U' R2 U' R U' R' U2 R": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 221": {
            "algs": {
                "R U2 R' U2 R U' R' U2 R U' R' U2 R U R'": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 222": {
            "algs": {
                "R' U2 R U2 R' U R U2 R' U R U2 R' U' R": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 223": {
            "algs": {
                "R U' R' U2 R U R' U2 R U R' U2 R U2 R'": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 224": {
            "algs": {
                "R' U R U2 R' U' R U2 R' U' R U2 R' U2 R": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 225": {
            "algs": {
                "R' U2 R2 U R2 U R2 U2 R'": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 226": {
            "algs": {
                "R U2 R2 U' R2 U' R2 U2 R": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 227": {
            "algs": {
                "R U R' U' R' U' R U R U R' U' R' U R U' R U' R'": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 228": {
            "algs": {
                "R U2 R' U' R U' R' U' R U2 R' U' R U' R'": {}
            },
            "subset": "Pi1"
        },
        "ZBLL 229": {
            "algs": {
                "R2 U R' U2 R' U' R U R D R' U R D' R' U R U' R2'": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 230": {
            "algs": {
                "F R2 U' R U2 R U R' U R' U R2 F'": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 231": {
            "algs": {
                "F U R' U' R2 U' R2 U2 R U2 R U R' F'": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 232": {
            "algs": {
                "r' U' R U' R' U R U' R' U R' F R F' U r": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 233": {
            "algs": {
                "R U2 R' U' F' R U2 R' U' R U' R' F R U' R'": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 234": {
            "algs": {
                "R U R' U r' F R F' r U' R' U R U2' R'": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 235": {
            "algs": {
                "r U R' U R' F R F' R U' R' U R U2' r'": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 236": {
            "algs": {
                "R U R' U' R U R2 D' R U' R' D R U' R U2 R'": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 237": {
            "algs": {
                "R U2 R' U R' D' R U R' D R2 U' R' U R U' R'": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 238": {
            "algs": {
                "R' U2 R U' R D R' U' R D' R2 U R U' R' U R": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 239": {
            "algs": {
                "R2 D R' U' R D' R' U' R' U R U' R' U' R U' R'": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 240": {
            "algs": {
                "R2 D' R U R' D R U R U' R' U R U R' U R": {}
            },
            "subset": "Pi2"
        },
        "ZBLL 241": {
            "algs": {
                "F U R U2 R' U R U R' F' R U2 R' U' R U' R'": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 242": {
            "algs": {
                "r U' r' U' r U r' U' l R U' R' U l'": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 243": {
            "algs": {
                "r' U r U r' U' r U R2 F R F' R": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 244": {
            "algs": {
                "r' U' R U' R' U2 r U' R U2 R' U2 R' F R F'": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 245": {
            "algs": {
                "R' U' R U R2 F' R U R U' R' F U' R U R' U R": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 246": {
            "algs": {
                "R U2 R D' R U' R' D R' U' R2 U2 R": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 247": {
            "algs": {
                "R' U' R U' R2 D' R U R' D R2 U' R' U2 R": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 248": {
            "algs": {
                "L' U R U' L U' R' U' R U' R'": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 249": {
            "algs": {
                "R U' L' U R' U L U L' U L": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 250": {
            "algs": {
                "R2 D' R U2 R' D R2 U R2 D' R U R' D R2": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 251": {
            "algs": {
                "R2 D R' U2 R D' R2 U' R2 D R' U' R D' R2": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 252": {
            "algs": {
                "R U2 R2 F R U R U2 R' U' R U2 R' U' F' R U R'": {}
            },
            "subset": "Pi3"
        },
        "ZBLL 253": {
            "algs": {
                "R U2 R2 U' R U' R' U2 F R U R U' R' F'": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 254": {
            "algs": {
                "R U R' U R U2 R2 F' r U R U' r' F": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 255": {
            "algs": {
                "r' F' r U' r' F2 r2 U R' U' r' F R F'": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 256": {
            "algs": {
                "F R U R' U' R' F' R U2 R' U' R2 U' R2 U2 R": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 257": {
            "algs": {
                "R' U' R L U2 R' U2 R U2 L' U R' U2 R": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 258": {
            "algs": {
                "F U' R U' R' U R U R' U2 R U2 R' U F'": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 259": {
            "algs": {
                "R2 D' R U' R' D R U R' D' R U R' D R U R U' R' U' R": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 260": {
            "algs": {
                "R' U' F' R U R' U' R' F R2 U2' R' U2 R": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 261": {
            "algs": {
                "R U R' U R U' R' U' R' F' R U2 R U2' R' F": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 262": {
            "algs": {
                "R' U' R' D' R U R' D R' U R' U R U2 R'": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 263": {
            "algs": {
                "R U R D R' U' R D' R U' R U' R' U2 R": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 264": {
            "algs": {
                "F U R U' R' U R U2 R' U' R U R' F'": {}
            },
            "subset": "Pi4"
        },
        "ZBLL 265": {
            "algs": {
                "r' F' r U r U2 r' F2 U' R U R' U' R U' R'": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 266": {
            "algs": {
                "R U2 R' U2 R' F R2 U' R' U2 R U2 R' U' F'": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 267": {
            "algs": {
                "R' F R U R' U' R' F' R2 U' R' U R U' R' U2 R": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 268": {
            "algs": {
                "R' L U2 R2 U R2 U R U L' U' R U2 R'": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 269": {
            "algs": {
                "l U2 l' U2 R' U2 R B2 U R' U R": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 270": {
            "algs": {
                "R U R' U F2 R U2 R' U2 R' F2 R": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 271": {
            "algs": {
                "R' U2 R U R' U R2 U' L' U R' U' L": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 272": {
            "algs": {
                "R U R' U R U' R' U R U' R D R' U' R D' R2": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 273": {
            "algs": {
                "R U R' U' R' F R2 U R' U' R U R' U' F'": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 274": {
            "algs": {
                "R2 D R' U2' R D' R2' U' R U' R' U R U2' R' U' R U' R'": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 275": {
            "algs": {
                "R U2 R' U' R U R' U2 L' U R U' M' x'": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 276": {
            "algs": {
                "L R' U' R U L' U2 R' U R U' R' U2 R": {}
            },
            "subset": "Pi5"
        },
        "ZBLL 277": {
            "algs": {
                "R U R' U R U' R2' F R F' R U' R' F' U F": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 278": {
            "algs": {
                "F U R U2 R' U2 R U R2 F' R U2 R U2 R'": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 279": {
            "algs": {
                "R U' R' U' R U' R' U R U R' U R' F' R U R U' R' F": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 280": {
            "algs": {
                "R' U2 R U R' U' R U R2 F R U R U' R' F' R": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 281": {
            "algs": {
                "R' F2 R U2 R U2 R' F2 U' R U' R'": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 282": {
            "algs": {
                "R' U' R U' B2 R' U2 R U2 l U2 l'": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 283": {
            "algs": {
                "R U2 R' U' R U' R2 U L U' R U L'": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 284": {
            "algs": {
                "R' U' R U' R' U R U' R' U R' D' R U R' D R2": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 285": {
            "algs": {
                "F U R U' R' U R U' R2 F' R U R U' R'": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 286": {
            "algs": {
                "R U R' U R U2' R' U' R U R' U R2 D R' U2 R D' R2'": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 287": {
            "algs": {
                "R' U2 R U R' U' R U2 L U' R' U R L'": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 288": {
            "algs": {
                "R L' U R' U' L U2 R U' R' U R U2 R'": {}
            },
            "subset": "Pi6"
        },
        "ZBLL 289": {
            "algs": {
                "R U2 R' U' R U' R' U' R' U' R U' R' U2 R": {}
            },
            "subset": "H1"
        },
        "ZBLL 290": {
            "algs": {
                "R' U2 R U R' U R U R U R' U R U2 R'": {}
            },
            "subset": "H1"
        },
        "ZBLL 291": {
            "algs": {
                "R' U' R U' R' U R U' R' U2 R": {}
            },
            "subset": "H1"
        },
        "ZBLL 292": {
            "algs": {
                "R U R' U R U' R' U R U2 R'": {}
            },
            "subset": "H1"
        },
        "ZBLL 293": {
            "algs": {
                "R' U2 R U R' U' R U R' U R": {}
            },
            "subset": "H1"
        },
        "ZBLL 294": {
            "algs": {
                "R U2 R' U' R U R' U' R U' R'": {}
            },
            "subset": "H1"
        },
        "ZBLL 295": {
            "algs": {
                "R U R' U R U' R' U R U' R' U R' U' R2 U' R' U R' U R": {}
            },
            "subset": "H1"
        },
        "ZBLL 296": {
            "algs": {
                "R U R' U R U2 R' U' R' U2 R U R' U R": {}
            },
            "subset": "H1"
        },
        "ZBLL 297": {
            "algs": {
                "R U2 R D R' U' R D' R2 U' R' F R U R U' R' F'": {}
            },
            "subset": "H1"
        },
        "ZBLL 298": {
            "algs": {
                "F U R U' R' U R U' R' U R U' R' F'": {}
            },
            "subset": "H1"
        },
        "ZBLL 299": {
            "algs": {
                "R U R' y' U R' U R U' R2 F R F' R": {}
            },
            "subset": "H1"
        },
        "ZBLL 300": {
            "algs": {
                "R' U' R y U' R U' R' U R l U' R' U l'": {}
            },
            "subset": "H1"
        },
        "ZBLL 301": {
            "algs": {
                "F R U R' U' R U R' U' F' U R' F' U' F U R": {}
            },
            "subset": "H2"
        },
        "ZBLL 302": {
            "algs": {
                "R' U' R U' R' U2 R U R' U' R U R' F' R U R' U' R' F R2": {}
            },
            "subset": "H2"
        },
        "ZBLL 303": {
            "algs": {
                "L' U L U' L' U' L U R' U' R U L' U' L U2 R' U' R": {}
            },
            "subset": "H2"
        },
        "ZBLL 304": {
            "algs": {
                "R U' R' U R U R' U' L U L' U' R U R' U2 L U L'": {}
            },
            "subset": "H2"
        },
        "ZBLL 305": {
            "algs": {
                "R U R' U R U2 R' F R U' R' U' R U2 R' U' F'": {}
            },
            "subset": "H2"
        },
        "ZBLL 306": {
            "algs": {
                "R U R2 F R F' r U' r' U r U r' U2": {}
            },
            "subset": "H2"
        },
        "ZBLL 307": {
            "algs": {
                "R' F R' F' R2 U' r' U r U' r' U' r": {}
            },
            "subset": "H2"
        },
        "ZBLL 308": {
            "algs": {
                "R' U' R U' R' U' L U' R U L'": {}
            },
            "subset": "H2"
        },
        "ZBLL 309": {
            "algs": {
                "R U R' U R U L' U R' U' L": {}
            },
            "subset": "H2"
        },
        "ZBLL 310": {
            "algs": {
                "R' U' R U' R' U F' R U R' U' R' F R2 U' R' U R": {}
            },
            "subset": "H2"
        },
        "ZBLL 311": {
            "algs": {
                "R U R' U R' U' R2 U' R2 U' L U' R U L'": {}
            },
            "subset": "H2"
        },
        "ZBLL 312": {
            "algs": {
                "R' U2' R U R2' D' R U' R' D R2 U R' U R": {}
            },
            "subset": "H2"
        },
        "ZBLL 313": {
            "algs": {
                "R U2 R' U' R2 D R' U R D' R2' U' R U' R'": {}
            },
            "subset": "H3"
        },
        "ZBLL 314": {
            "algs": {
                "F R U' R' U' R U2 R' U' F' U R U R' U R U2 R'": {}
            },
            "subset": "H3"
        },
        "ZBLL 315": {
            "algs": {
                "R2 D' R U' R' D R2 U' R2 D' R U2 R' D R2": {}
            },
            "subset": "H3"
        },
        "ZBLL 316": {
            "algs": {
                "R2 D R' U R D' R2' U R2 D R' U2 R D' R2'": {}
            },
            "subset": "H3"
        },
        "ZBLL 317": {
            "algs": {
                "F R' F' r U R U' r2 F2 r U r' F r": {}
            },
            "subset": "H3"
        },
        "ZBLL 318": {
            "algs": {
                "R U R' U' R' F R U R U' R' F' R U R' U R U2 R'": {}
            },
            "subset": "H3"
        },
        "ZBLL 319": {
            "algs": {
                "R' U2 R U' L U2 R' U2 R U2 L' R' U R": {}
            },
            "subset": "H3"
        },
        "ZBLL 320": {
            "algs": {
                "R U2 R' U L' U2 R U2 R' U2 L R U' R'": {}
            },
            "subset": "H3"
        },
        "ZBLL 321": {
            "algs": {
                "F U' R U2 R' U2 R U' R' U' R U R' U F'": {}
            },
            "subset": "H3"
        },
        "ZBLL 322": {
            "algs": {
                "R' F R U R' U' F' R U' R' U R' F R F' U R": {}
            },
            "subset": "H3"
        },
        "ZBLL 323": {
            "algs": {
                "R U2 R' U' R U' R D' R U' R' D R U R": {}
            },
            "subset": "H3"
        },
        "ZBLL 324": {
            "algs": {
                "R U2 R2 F U' R2 U' R2 U F' U R": {}
            },
            "subset": "H3"
        },
        "ZBLL 325": {
            "algs": {
                "R' U2 R U2' R2 F' R U R U' R' F U R": {}
            },
            "subset": "H4"
        },
        "ZBLL 326": {
            "algs": {
                "F B' R2 B R2 U' R2 U' R2 U R2 F'": {}
            },
            "subset": "H4"
        },
        "ZBLL 327": {
            "algs": {
                "R' U' R U' R' U R U R' F R U R' U' R' F' R2": {}
            },
            "subset": "H4"
        },
        "ZBLL 328": {
            "algs": {
                "F R U' R' U R U2 R' U' R U R' U' F'": {}
            },
            "subset": "H4"
        },
        "ZBLL 329": {
            "algs": {
                "R' U R2 U R' U R U2 R U2 R U R' U R2": {}
            },
            "subset": "S1"
        },
        "ZBLL 330": {
            "algs": {
                "R' U2 R2 U R U' R' U R U R2 U' R'": {}
            },
            "subset": "S1"
        },
        "ZBLL 331": {
            "algs": {
                "R U R' U R U2 R'": {}
            },
            "subset": "S1"
        },
        "ZBLL 332": {
            "algs": {
                "R' U2 R U R' U R": {}
            },
            "subset": "S1"
        },
        "ZBLL 333": {
            "algs": {
                "R U R2 U' R2 U' R2 U2 R2 U2 R'": {}
            },
            "subset": "S1"
        },
        "ZBLL 334": {
            "algs": {
                "R' U' R U' R U R2 U R2 U2 R'": {}
            },
            "subset": "S1"
        },
        "ZBLL 335": {
            "algs": {
                "R U R' U' R' U2 R U R U' R' U R' U R": {}
            },
            "subset": "S1"
        },
        "ZBLL 336": {
            "algs": {
                "R' U' R U R U R' U' R' U R U R U' R'": {}
            },
            "subset": "S1"
        },
        "ZBLL 337": {
            "algs": {
                "R U R' U R U' R' U R' U' R2 U' R' U R' U R": {}
            },
            "subset": "S1"
        },
        "ZBLL 338": {
            "algs": {
                "R U R' U R U R U R U R U' R' U' R2": {}
            },
            "subset": "S1"
        },
        "ZBLL 339": {
            "algs": {
                "R U R' U R' U' R2 U' R' U R' U' R U R' U R": {}
            },
            "subset": "S1"
        },
        "ZBLL 340": {
            "algs": {
                "R U R' U R U' R' U R' U' R' U R U' R' U' R2 U R": {}
            },
            "subset": "S1"
        },
        "ZBLL 341": {
            "algs": {
                "F U' R' U R U F' R U R2 U R2 U2 R'": {}
            },
            "subset": "S2"
        },
        "ZBLL 342": {
            "algs": {
                "R' D' R U' R' D R U2 R U R' U2 R U R'": {}
            },
            "subset": "S2"
        },
        "ZBLL 343": {
            "algs": {
                "R' U2 R U R' U' R F U' R' U' R U F'": {}
            },
            "subset": "S2"
        },
        "ZBLL 344": {
            "algs": {
                "R' U R U2 R' U R U2 R D R' U' R D' R'": {}
            },
            "subset": "S2"
        },
        "ZBLL 345": {
            "algs": {
                "L' U2 R U' R' U2 L U R U' R' U R U2 R'": {}
            },
            "subset": "S2"
        },
        "ZBLL 346": {
            "algs": {
                "F R U R' U' R U R2 U' F' U R U R U' R'": {}
            },
            "subset": "S2"
        },
        "ZBLL 347": {
            "algs": {
                "R U R' F' R U R' U R U2 R' F R U' R'": {}
            },
            "subset": "S2"
        },
        "ZBLL 348": {
            "algs": {
                "R U2 L' R' U2 R U2 R' U2 L U' R U' R'": {}
            },
            "subset": "S2"
        },
        "ZBLL 349": {
            "algs": {
                "R U' R2 U2 D' R U R' U D R2 U R'": {}
            },
            "subset": "S2"
        },
        "ZBLL 350": {
            "algs": {
                "F U R' F R F' R U' R' U R U' R' F'": {}
            },
            "subset": "S2"
        },
        "ZBLL 351": {
            "algs": {
                "R U R' U' L' U R U' L U' L' U R' U' L": {}
            },
            "subset": "S2"
        },
        "ZBLL 352": {
            "algs": {
                "F R U' R U2 R' U2 R' U' R U2 R' U' R2 U' R2 F'": {}
            },
            "subset": "S2"
        },
        "ZBLL 353": {
            "algs": {
                "R U' L' U R' U' L": {}
            },
            "subset": "S3"
        },
        "ZBLL 354": {
            "algs": {
                "R' U2 R U R' U' R' D' R U2 R' D R2": {}
            },
            "subset": "S3"
        },
        "ZBLL 355": {
            "algs": {
                "R' D U' R' U R U2 D' R2 U R' U' R'": {}
            },
            "subset": "S3"
        },
        "ZBLL 356": {
            "algs": {
                "R' U' R' U R2 D' U2 R U R' U' D R'": {}
            },
            "subset": "S3"
        },
        "ZBLL 357": {
            "algs": {
                "R2 D R' U2 R D' R' U' R' U R U2 R'": {}
            },
            "subset": "S3"
        },
        "ZBLL 358": {
            "algs": {
                "D' R U R' U R U' R' U' D R2 U' R U' R' U R' U R2": {}
            },
            "subset": "S3"
        },
        "ZBLL 359": {
            "algs": {
                "R U R' U R U R' U' R U R D R' U' R D' R' U2 R'": {}
            },
            "subset": "S3"
        },
        "ZBLL 360": {
            "algs": {
                "R' U2 R U R' U' R' D' R U' R' D R U R U' R' U' R": {}
            },
            "subset": "S3"
        },
        "ZBLL 361": {
            "algs": {
                "R' U2 F' R U R' U' R' F R U2 R": {}
            },
            "subset": "S3"
        },
        "ZBLL 362": {
            "algs": {
                "R2 U R U R' U' R' U' R' L' U R' U' L": {}
            },
            "subset": "S3"
        },
        "ZBLL 363": {
            "algs": {
                "R U2 R' U2 R' F R2 U R' U' R U R' U' F'": {}
            },
            "subset": "S3"
        },
        "ZBLL 364": {
            "algs": {
                "R U R' U R U' R' U' R' F R2 U' R' U' R U R' F'": {}
            },
            "subset": "S3"
        },
        "ZBLL 365": {
            "algs": {
                "R2 U R' U R D R' U2 R D' R' U R U' R2'": {}
            },
            "subset": "S4"
        },
        "ZBLL 366": {
            "algs": {
                "R U R' U R U' R D R' U' R D' R2": {}
            },
            "subset": "S4"
        },
        "ZBLL 367": {
            "algs": {
                "R U' R' U' R U' R' U2 R U R2 D' R U2 R' D R": {}
            },
            "subset": "S4"
        },
        "ZBLL 368": {
            "algs": {
                "F U R U' R' U R U' l U' R2 D' R U R' x": {}
            },
            "subset": "S4"
        },
        "ZBLL 369": {
            "algs": {
                "R2 D' R U' R' D R U' R U R' U R": {}
            },
            "subset": "S4"
        },
        "ZBLL 370": {
            "algs": {
                "R U2 R' L' U2 R U R' U2 L R U2 R'": {}
            },
            "subset": "S4"
        },
        "ZBLL 371": {
            "algs": {
                "R' D' R U R' D R2 U' R' U R U R' U' R U2 R' U R U2 R'": {}
            },
            "subset": "S4"
        },
        "ZBLL 372": {
            "algs": {
                "R U' R' U' R U R D R' U2 R D' R2 U R U2 R'": {}
            },
            "subset": "S4"
        },
        "ZBLL 373": {
            "algs": {
                "R' U2 R' D' R U R' D R U' R U R' U R": {}
            },
            "subset": "S4"
        },
        "ZBLL 374": {
            "algs": {
                "R' U' R U' R2 F' R U R U' R' F U2 R": {}
            },
            "subset": "S4"
        },
        "ZBLL 375": {
            "algs": {
                "R U R' U R' D' R U R' D R U' R U2 R'": {}
            },
            "subset": "S4"
        },
        "ZBLL 376": {
            "algs": {
                "R U2 R' U' R U R' U' R U R D R' U2 R D' R2": {}
            },
            "subset": "S4"
        },
        "ZBLL 377": {
            "algs": {
                "f R' F' R U2 R U2 R' U2 S'": {}
            },
            "subset": "S5"
        },
        "ZBLL 378": {
            "algs": {
                "R' D' R U R' D R2 U R' U2 R U R'": {}
            },
            "subset": "S5"
        },
        "ZBLL 379": {
            "algs": {
                "R' D R' U R D' U R U' R' U' R2 U R U' R'": {}
            },
            "subset": "S5"
        },
        "ZBLL 380": {
            "algs": {
                "R' U2 R U R2 D' R U' R' D R U2 R": {}
            },
            "subset": "S5"
        },
        "ZBLL 381": {
            "algs": {
                "R2 D' r U2 r' D R2 U R' U R": {}
            },
            "subset": "S5"
        },
        "ZBLL 382": {
            "algs": {
                "R' U2 R U R' U R' D' R U2 R' D R U2 R": {}
            },
            "subset": "S5"
        },
        "ZBLL 383": {
            "algs": {
                "R L' U R' U' L U2 R U2 R'": {}
            },
            "subset": "S5"
        },
        "ZBLL 384": {
            "algs": {
                "R2 D' R U2 R' D R2 U R' U R": {}
            },
            "subset": "S5"
        },
        "ZBLL 385": {
            "algs": {
                "R2 F R U R U' R' F' R U' R' U R": {}
            },
            "subset": "S5"
        },
        "ZBLL 386": {
            "algs": {
                "R U R' U R' U' R' D' R U R' D R' U2 R'": {}
            },
            "subset": "S5"
        },
        "ZBLL 387": {
            "algs": {
                "R' U' F U' R2 U R2 U F' R U' R U' R'": {}
            },
            "subset": "S5"
        },
        "ZBLL 388": {
            "algs": {
                "R2 D' R U2 R D2 R' U' R D2 R' U R' D R U2 R": {}
            },
            "subset": "S5"
        },
        "ZBLL 389": {
            "algs": {
                "R U R' U' R U R2 D' R U2 R' D R2 U2 R'": {}
            },
            "subset": "S6"
        },
        "ZBLL 390": {
            "algs": {
                "R U R' U R U' R2 F' R U R U' R' F R U' R'": {}
            },
            "subset": "S6"
        },
        "ZBLL 391": {
            "algs": {
                "R U R' U R2 D r' U2 r D' R2": {}
            },
            "subset": "S6"
        },
        "ZBLL 392": {
            "algs": {
                "R' U R U2 R' U R2 D R' U R D' R'": {}
            },
            "subset": "S6"
        },
        "ZBLL 393": {
            "algs": {
                "R' U' R U R2 U' R' U' R U D' R U R' D R'": {}
            },
            "subset": "S6"
        },
        "ZBLL 394": {
            "algs": {
                "R U R' U R2 D R' U2 R D' R2": {}
            },
            "subset": "S6"
        },
        "ZBLL 395": {
            "algs": {
                "R' U2 R U2 L U' R' U L' R": {}
            },
            "subset": "S6"
        },
        "ZBLL 396": {
            "algs": {
                "R U2 R D R' U2 R D' R' U R' U R U2 R'": {}
            },
            "subset": "S6"
        },
        "ZBLL 397": {
            "algs": {
                "R U R2 F' R U2 R U2 R' F R U' R'": {}
            },
            "subset": "S6"
        },
        "ZBLL 398": {
            "algs": {
                "R U R' U' R U R2 D' R U R' D R U R U2 R'": {}
            },
            "subset": "S6"
        },
        "ZBLL 399": {
            "algs": {
                "F' R U R' U R U2 R' F U R U' R' U2 R U' R'": {}
            },
            "subset": "S6"
        },
        "ZBLL 400": {
            "algs": {
                "R' F R U R' U' R' F' D' R U R' D R2": {}
            },
            "subset": "S6"
        },
        "ZBLL 401": {
            "algs": {
                "R2' D' R U2 R' D R U R' F R U R U' R' F' R": {}
            },
            "subset": "AS1"
        },
        "ZBLL 402": {
            "algs": {
                "R U2 R2 U' R' U R U' R' U' R2 U R": {}
            },
            "subset": "AS1"
        },
        "ZBLL 403": {
            "algs": {
                "R' U' R U' R' U2 R": {}
            },
            "subset": "AS1"
        },
        "ZBLL 404": {
            "algs": {
                "R U2 R' U' R U' R'": {}
            },
            "subset": "AS1"
        },
        "ZBLL 405": {
            "algs": {
                "R' U' R2 U R2 U R2 U2 R2 U2 R": {}
            },
            "subset": "AS1"
        },
        "ZBLL 406": {
            "algs": {
                "R U R' U R' U' R2 U' R2 U2 R": {}
            },
            "subset": "AS1"
        },
        "ZBLL 407": {
            "algs": {
                "R' U' R U R U2 R' U' R' U R U' R U' R'": {}
            },
            "subset": "AS1"
        },
        "ZBLL 408": {
            "algs": {
                "R U R' U' R' U' R U R U' R' U' R' U R": {}
            },
            "subset": "AS1"
        },
        "ZBLL 409": {
            "algs": {
                "R U R' U R' U' R U R' U' R2 U' R2 U R U' R' U R": {}
            },
            "subset": "AS1"
        },
        "ZBLL 410": {
            "algs": {
                "R' U' R U' R' U' R' U' R' U' R' U R U R2": {}
            },
            "subset": "AS1"
        },
        "ZBLL 411": {
            "algs": {
                "R U R' U' R U R2 U' R2 U' R' U R U' R' U R' U R": {}
            },
            "subset": "AS1"
        },
        "ZBLL 412": {
            "algs": {
                "R U R' U R' U' R' U R U' R' U' R' U' R' U2 R": {}
            },
            "subset": "AS1"
        },
        "ZBLL 413": {
            "algs": {
                "R U2 R2 U' R2 U' R' F U' R' U' R U F'": {}
            },
            "subset": "AS2"
        },
        "ZBLL 414": {
            "algs": {
                "R D R' U R D' R' U2 R' U' R U2 R' U' R": {}
            },
            "subset": "AS2"
        },
        "ZBLL 415": {
            "algs": {
                "R U2 R' U' R U R' L' U R U' L U2 R'": {}
            },
            "subset": "AS2"
        },
        "ZBLL 416": {
            "algs": {
                "R U' R' U2 R U' R' U2 R' D' R U R' D R": {}
            },
            "subset": "AS2"
        },
        "ZBLL 417": {
            "algs": {
                "F U' R' U R U F' R' U R U' R' U2 R": {}
            },
            "subset": "AS2"
        },
        "ZBLL 418": {
            "algs": {
                "R U R' U L' U2 R U2 R' U2 R L U2 R'": {}
            },
            "subset": "AS2"
        },
        "ZBLL 419": {
            "algs": {
                "R U R' F' R U2 R' U' R U' R' F R U' R'": {}
            },
            "subset": "AS2"
        },
        "ZBLL 420": {
            "algs": {
                "R U R' U' R' U' F U R2 U' R' U R U' R' F'": {}
            },
            "subset": "AS2"
        },
        "ZBLL 421": {
            "algs": {
                "R' U R2 U2 D R' U' R U' D' R2 U' R": {}
            },
            "subset": "AS2"
        },
        "ZBLL 422": {
            "algs": {
                "R' U R U R' U r U' R' U R U r' R' F R F' U R": {}
            },
            "subset": "AS2"
        },
        "ZBLL 423": {
            "algs": {
                "z D' R' D R U R' D' R U' R U R' D R U' z'": {}
            },
            "subset": "AS2"
        },
        "ZBLL 424": {
            "algs": {
                "R U2 R' U' R U r' F r U2 R' U' r' F2 r": {}
            },
            "subset": "AS2"
        },
        "ZBLL 425": {
            "algs": {
                "R' U L U' R U L'": {}
            },
            "subset": "AS3"
        },
        "ZBLL 426": {
            "algs": {
                "R U2 R' U' R U R D R' U2 R D' R2": {}
            },
            "subset": "AS3"
        },
        "ZBLL 427": {
            "algs": {
                "R D' U R U' R' U2 D R2 U' R U R": {}
            },
            "subset": "AS3"
        },
        "ZBLL 428": {
            "algs": {
                "R U R U' R2 D U2 R' U' R U D' R": {}
            },
            "subset": "AS3"
        },
        "ZBLL 429": {
            "algs": {
                "R2 D' R U2 R' D R U R U' R' U2 R": {}
            },
            "subset": "AS3"
        },
        "ZBLL 430": {
            "algs": {
                "D R' U' R U' R' U R U D' R2 U R' U R U' R U' R2": {}
            },
            "subset": "AS3"
        },
        "ZBLL 431": {
            "algs": {
                "R' U' R U' R' U' R U R' U' R' D' R U R' D R U2 R": {}
            },
            "subset": "AS3"
        },
        "ZBLL 432": {
            "algs": {
                "R U2 R' U' R U R D R' U R D' R' U' R' U R U R'": {}
            },
            "subset": "AS3"
        },
        "ZBLL 433": {
            "algs": {
                "F U R U' R' U R U' R2 F' R U2 R U2 R'": {}
            },
            "subset": "AS3"
        },
        "ZBLL 434": {
            "algs": {
                "F R U' R' U R U R2 F' R U R U R' U' R U' R'": {}
            },
            "subset": "AS3"
        },
        "ZBLL 435": {
            "algs": {
                "R' U2 R' F' R U R U' R' F U2 R": {}
            },
            "subset": "AS3"
        },
        "ZBLL 436": {
            "algs": {
                "L' U R U' L R U R U R U' R' U' R2": {}
            },
            "subset": "AS3"
        },
        "ZBLL 437": {
            "algs": {
                "R D' R2 D R2 U' R2 D' R2 D R2 U R": {}
            },
            "subset": "AS4"
        },
        "ZBLL 438": {
            "algs": {
                "R' U' R U' R' U R' D' R U R' D R2": {}
            },
            "subset": "AS4"
        },
        "ZBLL 439": {
            "algs": {
                "l U' R' D R2 U l' U R' U' R U R' U' F'": {}
            },
            "subset": "AS4"
        },
        "ZBLL 440": {
            "algs": {
                "R' D' R U2 R' D R2 U' R' U2 R U R' U R U R'": {}
            },
            "subset": "AS4"
        },
        "ZBLL 441": {
            "algs": {
                "R2 D R' U R D' R' U R' U' R U' R'": {}
            },
            "subset": "AS4"
        },
        "ZBLL 442": {
            "algs": {
                "R U2 R' L' U2 R U' R' U2 L R U2 R'": {}
            },
            "subset": "AS4"
        },
        "ZBLL 443": {
            "algs": {
                "R U R' U' R' U' R U R U' R' U' R2 D' R U' R' D R U2 R": {}
            },
            "subset": "AS4"
        },
        "ZBLL 444": {
            "algs": {
                "R U2 R' U' R2 D R' U2 R D' R' U' R' U R U R'": {}
            },
            "subset": "AS4"
        },
        "ZBLL 445": {
            "algs": {
                "R U2 R' U R' D' R U' R' D R U' R U' R'": {}
            },
            "subset": "AS4"
        },
        "ZBLL 446": {
            "algs": {
                "R2 D R' U2 R D' R' U' R' U R U' R' U R U2 R'": {}
            },
            "subset": "AS4"
        },
        "ZBLL 447": {
            "algs": {
                "R' U' R U' R D R' U' R D' R' U R' U2 R": {}
            },
            "subset": "AS4"
        },
        "ZBLL 448": {
            "algs": {
                "R' U2 F' R U R' U' R' F R2 U R' U R": {}
            },
            "subset": "AS4"
        },
        "ZBLL 449": {
            "algs": {
                "R U2 R2 D' R U2 R' D R2 U' R' U R U' R'": {}
            },
            "subset": "AS5"
        },
        "ZBLL 450": {
            "algs": {
                "R D R' U' R D' R2 U' R U2 R' U' R": {}
            },
            "subset": "AS5"
        },
        "ZBLL 451": {
            "algs": {
                "R D' R U' R' D U' R' U R U R2 U' R' U R": {}
            },
            "subset": "AS5"
        },
        "ZBLL 452": {
            "algs": {
                "R U R' F' R U R' U' R' F R2 U R' U' R U' R'": {}
            },
            "subset": "AS5"
        },
        "ZBLL 453": {
            "algs": {
                "R2 D r' U2 r D' R2 U' R U' R'": {}
            },
            "subset": "AS5"
        },
        "ZBLL 454": {
            "algs": {
                "R U2 R' U' R U' R D R' U2 R D' R' U2 R'": {}
            },
            "subset": "AS5"
        },
        "ZBLL 455": {
            "algs": {
                "L R' U' R U L' U2 R' U2 R": {}
            },
            "subset": "AS5"
        },
        "ZBLL 456": {
            "algs": {
                "R2 D R' U2 R D' R2 U' R U' R'": {}
            },
            "subset": "AS5"
        },
        "ZBLL 457": {
            "algs": {
                "R U R' F' R U2 R' U2 R' F R2 U' R'": {}
            },
            "subset": "AS5"
        },
        "ZBLL 458": {
            "algs": {
                "R U2' R' U' R' D' R U' R' D R2 U' R' U R U' R'": {}
            },
            "subset": "AS5"
        },
        "ZBLL 459": {
            "algs": {
                "R U R' U2 R U R' U' F' R U2 R' U' R U' R' F": {}
            },
            "subset": "AS5"
        },
        "ZBLL 460": {
            "algs": {
                "R2 D' R U' R' D F R U R U' R' F' R": {}
            },
            "subset": "AS5"
        },
        "ZBLL 461": {
            "algs": {
                "R U2 R' U' F' R U R' U' R' F R2 U' R'": {}
            },
            "subset": "AS6"
        },
        "ZBLL 462": {
            "algs": {
                "R' U2 R' D' R U R' D R2 U' R' U2 R": {}
            },
            "subset": "AS6"
        },
        "ZBLL 463": {
            "algs": {
                "R' U' R U' R2 D' r U2 r' D R2": {}
            },
            "subset": "AS6"
        },
        "ZBLL 464": {
            "algs": {
                "R U' R' U2 R U' R2 D' R U' R' D R": {}
            },
            "subset": "AS6"
        },
        "ZBLL 465": {
            "algs": {
                "R U R' U' R2 U R U R' U' D R' U' R D' R": {}
            },
            "subset": "AS6"
        },
        "ZBLL 466": {
            "algs": {
                "R' U' R U' R2 D' R U2 R' D R2": {}
            },
            "subset": "AS6"
        },
        "ZBLL 467": {
            "algs": {
                "R U2 R' U2 L' U R U' R' L": {}
            },
            "subset": "AS6"
        },
        "ZBLL 468": {
            "algs": {
                "R' U2 R' D' R U2 R' D R U' R U' R' U2 R": {}
            },
            "subset": "AS6"
        },
        "ZBLL 469": {
            "algs": {
                "R' U' R U R' F R U R' U' R' F' R2": {}
            },
            "subset": "AS6"
        },
        "ZBLL 470": {
            "algs": {
                "R U2 R D' R U' R' D R U R U' R U' R'": {}
            },
            "subset": "AS6"
        },
        "ZBLL 471": {
            "algs": {
                "R U R' U R' F U' R2 U' R2 U F' U R": {}
            },
            "subset": "AS6"
        },
        "ZBLL 472": {
            "algs": {
                "R U R' U R' U' R2 U' R D' R U R' D R U R": {}
            },
            "subset": "AS6"
        }
    }
}