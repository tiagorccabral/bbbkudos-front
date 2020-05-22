import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuickLinks from "./QuickLinks";
import OurChannels from "./OurChannels";

function MediaFooter() {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6}>
                    {/*SlackComponent*/}
                </Col>
                <Col xs={6} sm={4} md={3}>
                    <QuickLinks />
                </Col>
                <Col xs={6} sm={4} md={3}>
                    <OurChannels />
                </Col>
            </Row>
        </Container>
    );
}

export default MediaFooter;
