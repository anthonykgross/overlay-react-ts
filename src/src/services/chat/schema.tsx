import {Message} from "../../api/twitch/chat/schema";

export interface State {
    messages: Message[],
}
