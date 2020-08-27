import React from "react";
import {Message} from "../../../../../api/twitch/chat/schema";
import './index.scss'

interface Props {
    message: Message
}

function MessageComponent(props: Props) {
    let broadcasterIcon = 'https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1';
    let twitchStaffIcon = 'https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/1';
    let adminIcon = 'https://static-cdn.jtvnw.net/badges/v1/9ef7e029-4cdf-4d4d-a0d5-e2b3fb2583fe/1';
    let moderatorIcon = 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1';
    let verifiedIcon = 'https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3';
    let vipIcon = 'https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3';

    let icons = [];
    if ('broadcaster' in props.message.user.badges) {
        icons.push(
            <img key={'broadcaster'} src={broadcasterIcon} alt={'Broadcaster'}/>
        )
    }
    if ('moderator' in props.message.user.badges) {
        icons.push(
            <img key={'moderator'} src={moderatorIcon} alt={'Moderator'}/>
        );
    }
    if ('partner' in props.message.user.badges) {
        icons.push(
            <img key={'partner'} src={verifiedIcon} alt={'Partner'}/>
        );
    }
    if ('admin' in props.message.user.badges) {
        icons.push(
            <img key={'admin'} src={adminIcon} alt={'Admin'}/>
        );
    }
    if ('vip' in props.message.user.badges) {
        icons.push(
            <img key={'vip'} src={vipIcon} alt={'VIP'}/>
        );
    }
    if ('staff' in props.message.user.badges) {
        icons.push(
            <img key={'staff'} src={twitchStaffIcon} alt={'Twitch Staff'}/>
        );
    }

    return (
        <div className={'message'}>
            <span>
                {icons}
                <b>{props.message.user.username}</b>
            </span>
            <span>: {props.message.message}</span>
        </div>
    );
}

export default MessageComponent;