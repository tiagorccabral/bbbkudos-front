import React from "react";
import {Router} from "react-router-dom";
import {Provider} from 'react-redux';
import history from "./services/history";
import Routes from "./routes";
import "./utils/fontawesome";
import store from "./services/store";

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes/>
            </Router>
        </Provider>

    );
}

export default App;
