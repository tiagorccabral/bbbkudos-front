import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {ContentSeparator, PageTitle} from "../styles";

class MyKudos extends Component {
    render() {
        return (
            <Container>
                <ContentSeparator>
                    <PageTitle>Meus Kudos</PageTitle>
                </ContentSeparator>
            </Container>
        );
    }
}

export default MyKudos;