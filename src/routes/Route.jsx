import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class RouteWrapper extends Component {
    render() {
        const { component: Component, isPrivate, isAdmin, ...rest } = this.props;
        if (!isPrivate) {
            return <Redirect to="/" />;
        }

        if (isPrivate) {
            return <Redirect to="/" />;
        }

        return <Route {...rest} component={Component} />;
    }
}

export default RouteWrapper;
