import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {ContentSeparator, PageTitle} from "../styles";
import MyKudosTable from "./MyKudosTable";

class MyKudos extends Component {
    render() {
        return (
            <Container>
                <ContentSeparator>
                    <PageTitle>Meus Kudos</PageTitle>
                    <MyKudosTable />
                </ContentSeparator>
            </Container>
        );
    }
}

export default MyKudos;