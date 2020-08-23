import {Dispatch} from "redux";
import {TwitchChat} from "../../api/twitch/chat";
import {actions} from "../../api/twitch/chat/actions";
import {User, UserSchema} from "../../api/twitch/chat/schema/user";
import {checkSchema} from "../schema";

export class Chat {
    dispatch: Dispatch;
    chat: TwitchChat;

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch;
        this.chat = new TwitchChat();

        this.chat.onConnect = () => {
            this.dispatch(actions.connect())
        }
        this.chat.onMessage = (channel: string, user: User, message: string, isSelf: boolean) => {
            checkSchema(UserSchema, user);
            this.dispatch(actions.message(user, message))
        }

        this.chat.start();
    }

    stop = () => {
        this.chat.stop();
    }
}