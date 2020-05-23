import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {ContentSeparator, PageTitle} from "../styles";

class Timeline extends Component {
    render() {
        return (
            <Container>
                <ContentSeparator>
                    <PageTitle>Timeline</PageTitle>
                </ContentSeparator>
            </Container>
        );
    }
}

export default Timeline;