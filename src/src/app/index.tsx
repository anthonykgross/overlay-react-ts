import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './scss/index.scss'
import {Clock} from "./services/clock";
import {Chat} from "./services/twitch";
import {Websocket} from "./services/streamelements";

import {actions} from "../services/viewer/actions";
import {Api} from "../services/viewer/api";

function MainComponent(props: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        let clock = new Clock(30 * 1000);
        clock.add(function() {
            let api = new Api();
            api.getViewerCount(process.env.REACT_APP_TWITCH_USERNAME!)
                .then(response => response.text())
                .then((d: string) => {
                    let nbViewers = parseInt(d);
                    if (isNaN(nbViewers)) {
                        nbViewers = 1;
                    }
                    dispatch(actions.updateNbViewer(nbViewers))
                })
        });
        clock.run();
        clock.start();

        let chat = new Chat(dispatch);
        let websocket = new Websocket(dispatch);
        return function cleanUp() {
            chat.stop();
            websocket.stop();
            clock.stop();
        }
    })

    return (
        <div>
            {props.children}
        </div>
    );
}

export default MainComponent;
