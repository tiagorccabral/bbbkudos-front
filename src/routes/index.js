import React from "react";
import { Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Route from "./Route";
import Footer from "../components/shared/Footer";
import MainPage from "../components/pages/MainPage";
import MediaFooter from "../components/shared/MediaFooter";

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={MainPage} />
            </Switch>
            <Container>
                <MediaFooter />
            </Container>
            <Footer />
        </div>
    );
}

export default Routes;
