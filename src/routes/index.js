import React from "react"
import { Switch } from "react-router-dom"
import Route from "./Route"
import Footer from "../components/shared/Footer"
import MainPage from "../components/pages/MainPage";

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={MainPage} />
            </Switch>
            <Footer />
        </div>
    )
}

export default Routes
