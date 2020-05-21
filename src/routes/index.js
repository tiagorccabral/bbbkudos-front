import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import ToastAlert from "../components/shared/ToastAlert";
import Footer from "../components/shared/Footer";
import MainPage from "../components/pages/MainPage";
import MediaFooter from "../components/shared/MediaFooter";
import Login from "../components/pages/Auth/Login";

function Routes() {
    return (
        <div>
            <ToastAlert/>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login" component={Login} />
            </Switch>
            <MediaFooter />
            <Footer />
        </div>
    );
}

export default Routes;
