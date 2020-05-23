import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuickLinks from "./QuickLinks";
import OurChannels from "./OurChannels";
import SlackComponent from "./SlackComponent";

function MediaFooter() {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6} lg={7}>
                    <SlackComponent/>
                </Col>
                <Col xs={6} sm={4} md={3} lg={3}>
                    <QuickLinks />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                    <OurChannels />
                </Col>
            </Row>
        </Container>
    );
}

export default MediaFooter;
