import React from 'react';
import MainLayer from "./app";
import {Provider} from "react-redux";
import {ConnectedRouter} from 'connected-react-router'
import {Route} from "react-router";
import {store, history} from "./store";
import OverlayComponent from "./app/scenes/overlay";

function App() {
    return (
        <Provider store={store}>
            <MainLayer>
                <ConnectedRouter history={history}>
                    <Route path={'/'} component={OverlayComponent} />
                </ConnectedRouter>
            </MainLayer>
        </Provider>
    );
}

export default App;
