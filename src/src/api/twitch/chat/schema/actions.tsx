import {User} from "./user";
import {Action} from "../../../../app/schema";

export interface MessageAction extends Action {
    type: string
    response: {
        user: User
        message: string
    }
}