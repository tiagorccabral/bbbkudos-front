import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {ContentSeparator, PageTitle} from "../styles";

class NotFound extends Component {
    render() {
        return (
            <Container>
                <ContentSeparator>
                    <PageTitle>404</PageTitle>
                    <PageTitle>Página não encontrada</PageTitle>
                </ContentSeparator>
            </Container>
        );
    }
}

export default NotFound;