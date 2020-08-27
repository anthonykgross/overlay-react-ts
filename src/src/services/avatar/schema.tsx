import {Action} from "../../app/schema";

export interface State {
    body: {
        body: string
        pants: string
        shoes: string
        top: string
    },
    head: {
        hair: string
        hat: string
    },
    leftHand: string
    rightHand: string
    skin: string
    top: string
    accessories: string[]
}

export interface NakedAction extends Action{
    response: {}
}