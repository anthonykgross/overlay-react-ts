import React from 'react';
import MainLayer from "./layers/main";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <Provider store={store}>
            <MainLayer/>
        </Provider>
    );
}

export default App;
