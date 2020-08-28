import React from 'react';
import MainLayer from "./app";
import {Provider} from "react-redux";
import {ConnectedRouter} from 'connected-react-router'
import {Route} from "react-router";
import {store, history} from "./store";
import OverlayComponent from "./app/scenes/overlay";
import OpeningComponent from "./app/scenes/opening";
import EndingComponent from "./app/scenes/ending";

function App() {
    return (
        <Provider store={store}>
            <MainLayer>
                <ConnectedRouter history={history}>
                    <Route path={'/'} component={OverlayComponent} exact={true}/>
                    <Route path={'/opening'} component={OpeningComponent}  exact={true}/>
                    <Route path={'/ending'} component={EndingComponent}  exact={true}/>
                </ConnectedRouter>
            </MainLayer>
        </Provider>
    );
}

export default App;
