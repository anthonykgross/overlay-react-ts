import {User} from "./user";

export interface MessageAction {
    type: string
    response: {
        user: User
        message: string
    }
}