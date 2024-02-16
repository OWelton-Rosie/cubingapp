function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let algSet = {
    "puzzle": "3x3",
    "pre": () => randElement(["", "U", "U'", "U2"]),
    "post": () => randElement(["", "U", "U'", "U2"]),
    "inactive": [],
    "subsets": ["Adj corners", "Diag corners", "G perm", "Edge perm"],
    "cases": {
        "Aa perm": {
            "subset": "Adj corners",
            "algs": {
                "x (R' U R') D2 (R U' R') D2 R2 x'": {
                    vid: "PLL/Aa.mp4",
                    notes: [
                        "How to remember: Inverse of Ab perm"
                    ]
                }
            }
        },
        "Ab perm": {
            "subset": "Adj corners",
            "algs": {
                "x R2' D2 (R U R') D2 (R U' R) x'": {
                    vid: "PLL/Ab.mp4",
                    notes: [
                        "How to remember: Inverse of Aa perm",
                    ]
                }
            }
        },
        "E perm": {
            "subset": "Diag corners",
            "algs": {
                "x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x": {
                    vid: "PLL/E.mp4",
                    notes: [
                        "How to remember: 4 groups of R U R D"
                    ]
                },
                "R' U' R' D' R U' R' D R U R' D' R U R' D R2": {}
            }
        },
        "F perm": {
            "subset": "Adj corners",
            "algs": {
                "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R": {
                    vid: "PLL/F.mp4",
                    notes: [
                        "How to remember: R' U' F' (T perm) F U R"
                    ]
                }
            }
        },
        "Ga perm": {
            "subset": "G perm",
            "algs": {
                "R2 U R' U R' U' R U' R2 D U' R' U R D'": {
                    vid: "PLL/Ga.mp4",
                    notes: [
                        "How to remember: Inverse of Gb"
                    ]
                }
            }
        },
        "Gb perm": {
            "subset": "G perm",
            "algs": {
                "R' U' R U D' R2 U R' U R U' R U' R2 D": {
                    vid: "PLL/Gb.mp4",
                    notes: [
                        "How to remember: Inverse of Ga"
                    ]
                }
            }
        },
        "Gc perm": {
            "subset": "G perm",
            "algs": {
                "R2 F2 R U2 R U2 R' F R U R' U' R' F R2": {
                    vid: "PLL/Gc.mp4",
                    notes: []
                },
                "R2 U' R U' R U R' U R2 D' U R U' R' D": {}
            }
        },
        "Gd perm": {
            "subset": "G perm",
            "algs": {
                "R U R' U' D R2 U' R U' R' U R' U R2 D'": {
                    vid: "PLL/Gd.mp4",
                    notes: [
                        "How to remember: Mirror of Gb"
                    ]
                }
            }
        },
        "H perm": {
            "subset": "Edge perm",
            "algs": {
                "M2 U' M2 U2 M2 U' M2": {
                    vid: "PLL/H.mp4",
                    notes: []
                }
            }
        },
        "Ja perm": {
            "subset": "Adj corners",
            "algs": {
                "x R2 F R F' R U2 r' U r U2 x'": {
                    vid: "PLL/Ja.mp4",
                    notes: []
                },
                "L' U' L F L' U' L U L F' L2 U L": {},
                "R' U L' U2 R U' R' U2 R L": {},
                "R' U2 R U R' U2 L U' R U L'": {}
            }
        },
        "Jb perm": {
            "subset": "Adj corners",
            "algs": {
                "(R U R' F') (R U R' U') R' F R2 U' R' U'": {
                    vid: "PLL/Jb.mp4",
                    notes: [
                        "How to remember: T perm with last 4 moves shifted to beginning"
                    ]
                }
            }
        },
        "Na perm": {
            "subset": "Diag corners",
            "algs": {
                "(R U R' U) (R U R' F' R U R' U' R' F R2 U' R') (U2 R U' R')": {
                    vid: "PLL/Na.mp4",
                    notes: [
                        "How to remember: R U R' U (J perm) U' R U' R'"
                    ]
                },
                "F' R U R' U' R' F R2 F U' R' U' R U F' R'": {},
                "R F U' R' U R U F' R2 F' R U R U' R' F": {},
                "r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r": {}
            }
        },
        "Nb perm": {
            "subset": "Diag corners",
            "algs": {
                "r' D' F r U' r' F' D r2 U r' U' r' F r F'": {
                    vid: "PLL/Nb.mp4",
                    notes: [
                        "How to remember: Ends with wide sexy sledge"
                    ]
                },
                "R' U R U' R' F' U' F R U R' F R' F' R U' R": {},
                "R' U L' U2 R U' L R' U L' U2 R U' L": {}
            }
        },
        "Ra perm": {
            "subset": "Adj corners",
            "algs": {
                "(R U' R' U') R U (R D R') U' (R D' R') U2 R' U'": {
                    vid: "PLL/Ra.mp4",
                    notes: []
                },
                "R U R' F' R U2 R' U2 R' F R U R U2 R'": {}
            }
        },
        "Rb perm": {
            "subset": "Adj corners",
            "algs": {
                "(R' U2 R U2) R' F (R U R' U') R' F' R2": {
                    vid: "PLL/Rb.mp4",
                    notes: []
                }
            }
        },
        "T perm": {
            "subset": "Adj corners",
            "algs": {
                "(R U R' U') R' F R2 U' R' U' (R U R' F')": {
                    vid: "PLL/T.mp4",
                    notes: [
                        "How to remember: J perm with first 4 moves shifted to end"
                    ]
                }
            }
        },
        "Ua perm": {
            "subset": "Edge perm",
            "algs": {
                "M2 U M U2 M' U M2": {
                    vid: "PLL/Ua.mp4",
                    notes: [
                        "How to remember: Inverse of Ub perm"
                    ]
                },
                "R U' R U R U R U' R' U' R2": {},
                "R U R' U R' U' R2 U' R' U R' U R": {}
            }
        },
        "Ub perm": {
            "subset": "Edge perm",
            "algs": {
                "M2 U' M U2 M' U' M2": {
                    vid: "PLL/Ub.mp4",
                    notes: [
                        "How to remember: Inverse of Ua perm"
                    ]
                },
                "R2' U R U R' U' R3 U' R' U R'": {},
                "R' U R' U' R' U' R' U R U R2": {}
            }
        },
        "V perm": {
            "subset": "Diag corners",
            "algs": {
                "(R' U R' U') (R D' R' D) R' U D' R2 U' R2 D R2": {
                    vid: "PLL/V.mp4",
                    notes: []
                },
                "R' U R' U' y R' F' R2 U' R' U R' F R F": {}
            }
        },
        "Y perm": {
            "subset": "Diag corners",
            "algs": {
                "F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')": {
                    vid: "PLL/Y.mp4",
                    notes: [
                        "How to remember: 2 OLLs"
                    ]
                },
                "F R' F R2 U' R' U' R U R' F' R U R' U' F'": {}
            }
        },
        "Z perm": {
            "subset": "Edge perm",
            "algs": {
                "M2 U' M2 U' M' U2 M2 U2 M' U2": {
                    vid: "PLL/Z.mp4",
                    notes: []
                },
                "M' U' M2 U' M2 U' M' U2 M2": {}
            }
        }
    }
}