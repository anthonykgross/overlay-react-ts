import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './scss/index.scss'
import {Clock, ServiceTwitchChat, ServiceWebsocket} from "./services";
import ApiUser from "../api/user";
import {actions} from "./actions";

function MainComponent(props: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        let clock = new Clock(30 * 1000);
        clock.add(function() {
            let apiUser = new ApiUser();
            apiUser.getViewerCount(process.env.REACT_APP_TWITCH_USERNAME!)
                .then(response => response.text())
                .then((d: string) => {
                    let nbViewers = parseInt(d);
                    if (isNaN(nbViewers)) {
                        nbViewers = 1;
                    }
                    dispatch(actions.updateNbViewers(nbViewers))
                })
        });
        clock.run();
        clock.start();

        let serviceTwitchChat = new ServiceTwitchChat(dispatch);
        let serviceWebsocket = new ServiceWebsocket(dispatch);
        return function cleanUp() {
            serviceWebsocket.stop();
            serviceTwitchChat.stop();
            clock.stop();
        }
    })

    return (
        <div id="main">
            {props.children}
        </div>
    );
}

export default MainComponent;
