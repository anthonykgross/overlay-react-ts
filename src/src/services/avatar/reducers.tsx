import {Action} from "../../app/schema";
import {channels} from "../redemption/actions";
import {NewRedemptionAction, Redemption} from "../redemption/schema";
import {State} from "./schema";

let initialState: State = {
    body: {
        body: 'body',
        pants: 'white_short',
        shoes: 'tong',
        top: 'docker',
    },
    head: {
        hair: 'normal',
        hat: '',
    },
    leftHand: 'normal',
    rightHand: 'normal',
    skin: 'normal',
    top: 'chamander',
    accessories: [
        'eyebrow_piercing',
        'glasses',
        'headphone'
    ]
};

export const reducer = (state: State = initialState, action: Action): State => {
    if (action.type === channels.REDEMPTION_NEW) {
        let a : NewRedemptionAction = action as NewRedemptionAction;
        let redemption: Redemption = a.response.redemption;

        // top : Topless
        if (redemption._id === '5ee61a5e2fbe3012726b7600') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: ''
                }
            };
        }

        // top : Docker
        if (redemption._id === '5ee624207860f62c30bfe216') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'docker'
                }
            };
        }

        // top : Sharingame
        if (redemption._id === '5ee716656fa56df6e7662847') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'sharingame'
                }
            };
        }

        // Apple
        if (redemption._id === '5ee7164480d4db20e95b8673') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'apple'
                },
                head: {
                    ...state.head,
                    hat: 'pigeon',
                    hair: 'short'
                }
            };
        }

        // top : Akg Black
        if (redemption._id === '5ee84ded9d2b04c9f3e1b2ab') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'akg_black'
                }
            };
        }

        // top : AWS
        if (redemption._id === '5ee84e1b605e84afddc55b61') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'aws'
                }
            };
        }

        // top : Crash Bandicoot
        if (redemption._id === '5ee84e4c74b7efe6652a6b9d') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'bandicoot'
                }
            };
        }

        // top : Geek
        if (redemption._id === '5ee84e7a44e1918491d7de9c') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'geek'
                }
            };
        }

        // top : Nes
        if (redemption._id === '5ee84e99bb559aa5fc7cdd4c') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'nes'
                }
            };
        }

        // top : Playstation
        if (redemption._id === '5ee84ec27c64d66d088d4e6b') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'playstation'
                }
            };
        }

        // top : Python
        if (redemption._id === '5ee84ee8b9aae99c53d00437') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'python'
                }
            };
        }

        // top : Superman
        if (redemption._id === '5ee84f0724db53fd2b4519eb') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'superman'
                }
            };
        }

        // top : Symfony
        if (redemption._id === '5ee84f2027e9919526e171ae') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'symfony'
                }
            };
        }

        // top : Tux
        if (redemption._id === '5ee84f37b2166a5ad569184b') {
            return {
                ...state,
                body: {
                    ...state.body,
                    top: 'tux'
                }
            };
        }

        // Take off hats
        if (redemption._id === '5eff8693e19b4dfa809c34f1') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hat: '',
                    hair: 'normal'
                }
            };
        }

        // hair : Black Spike
        if (redemption._id === '5eff3f2dda18424cc9ade355') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'black_spike'
                }
            };
        }

        // hair : Brown Spike
        if (redemption._id === '5eff3f460d169bf40a281d3c') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'brown_spike'
                }
            };
        }

        // hair : Spike
        if (redemption._id === '5eff3f7412e446780bd40226') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'spike'
                }
            };
        }

        // hair : Old
        if (redemption._id === '5eff3f07eb3cd15bc4952665') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'old'
                }
            };
        }

        // hair : Short
        if (redemption._id === '5eff40480cc5f175913a73b9') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'short'
                }
            };
        }

        // hair : Normal
        if (redemption._id === '5eff4012383ffa7e7b12f6c4') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'normal'
                }
            };
        }

        // hat : strawhat
        if (redemption._id === '5eff3be198e6e1f90356787f') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'short',
                    hat: 'strawhat'
                }
            };
        }

        // hat : Pigeon
        if (redemption._id === '5eff3c0a5adad948dca25d15') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'short',
                    hat: 'pigeon'
                }
            };
        }

        // hat : Magician
        if (redemption._id === '5eff3c34b3f5cb824cd7f662') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'short',
                    hat: 'magician'
                }
            };
        }

        // hat : swimming_cap
        if (redemption._id === '5eff3c4d5df8201ee81c595f') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'short',
                    hat: 'swimming_cap'
                }
            };
        }

        // hat : pokemon_cap
        if (redemption._id === '5eff3c7cc327cf81103498e2') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'short',
                    hat: 'pokemon_cap'
                }
            };
        }

        // hat : pikachu
        if (redemption._id === '5eff3c9fa261513b19336ba9') {
            return {
                ...state,
                head: {
                    ...state.head,
                    hair: 'short',
                    hat: 'pikachu'
                }
            };
        }
    }

    return state;
};