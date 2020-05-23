import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {ContentSeparator, PageTitle} from "../styles";
import ParticipationChart from "./ParticipationChart";

class Timeline extends Component {
    render() {
        return (
            <Container>
                <ContentSeparator>
                    <PageTitle>Timeline</PageTitle>
                    <ParticipationChart/>
                </ContentSeparator>
            </Container>
        );
    }
}

export default Timeline;