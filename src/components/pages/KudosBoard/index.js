import React from "react";
import {ContentSeparator, PageTitle} from "../styles";
import Container from "react-bootstrap/Container";
import FacesBoard from "./FacesBoard";

function KudosBoard() {
    return (
        <Container>
            <ContentSeparator>
                <PageTitle>Dê um kudo!</PageTitle>
                <FacesBoard/>
            </ContentSeparator>
        </Container>
    );
}

export default KudosBoard;
