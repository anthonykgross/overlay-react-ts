import React from 'react';
import MainLayer from "./layers";
import {Provider} from "react-redux";
import {ConnectedRouter} from 'connected-react-router'
import {Route} from "react-router";
import {store, history} from "./store";
import OverlayLayer from "./layers/overlay";

function App() {
    return (
        <Provider store={store}>
            <MainLayer>
                <ConnectedRouter history={history}>
                    <Route path={'/'} component={OverlayLayer} />
                </ConnectedRouter>
            </MainLayer>
        </Provider>
    );
}

export default App;
