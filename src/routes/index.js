import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Navbar from "../components/shared/Navbar";
import ToastAlert from "../components/shared/ToastAlert";
import Footer from "../components/shared/Footer";
import KudosBoard from "../components/pages/KudosBoard";
import MediaFooter from "../components/shared/MediaFooter";
import Login from "../components/pages/Auth/Login";
import Timeline from "../components/pages/TimeLine";
import MyKudos from "../components/pages/MyKudos";
import NotFound from "../components/pages/NotFound";

function Routes() {
    return (
        <div>
            <ToastAlert />
            <Navbar />
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/kudos-board" component={KudosBoard} isPrivate />
                <Route path="/timeline" component={Timeline} isPrivate />
                <Route path="/my-kudos" component={MyKudos} isPrivate />
                <Route path="/login" component={Login} />
                <Route path="*" component={NotFound} isNotFound />
            </Switch>
            <MediaFooter />
            <Footer />
        </div>
    );
}

export default Routes;
