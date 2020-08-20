import {Client} from "tmi.js"

export class TwitchChat {
    client: Client = Client({
        identity: {
            password: process.env.REACT_APP_CHAT_TOKEN!
        },
        channels: [
            process.env.REACT_APP_TWITCH_USERNAME!
        ]
    });

    start = () => {
        this.client.on('connected', this.onConnect);
        this.client.on('message', this.onMessage);
        this.client.connect();
    }

    stop = () => {
        this.client.disconnect();
    }

    onConnect = () => {}
    onMessage = (channel: string, user: any, message: string, isSelf: boolean) => {}
}