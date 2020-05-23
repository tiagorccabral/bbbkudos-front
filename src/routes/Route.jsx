import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class RouteWrapper extends Component {
    render() {
        const { component: Component, isPrivate, isNotFound, ...rest } = this.props;
        const { auth } = this.props;

        if (isNotFound) {
            return <Route {...rest} component={Component} />
        }

        if (isPrivate && auth && !auth.isAuthenticated) {
            return <Redirect to="/login" />;
        }

        if (!isPrivate && auth && auth.isAuthenticated) {
            return <Redirect to="/kudos-board" />;
        }

        return <Route {...rest} component={Component} />;
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {})(RouteWrapper);
