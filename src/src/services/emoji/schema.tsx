import {Action} from "../../app/schema";
import {User} from "../../api/twitch/chat/schema";

export interface Emoji {
    id: string
    url: string
    user: User
}

export interface State {
    current?: Emoji,
    emojis: Emoji[]
}

export interface NewEmojiAction extends Action {
    response: Emoji
}

export interface NextEmojiAction extends Action {
    response: {}
}