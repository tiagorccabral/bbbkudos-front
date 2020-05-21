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
               <Col sm={8} xs={"auto"}>
                   {/*SlackComponent*/}
               </Col>
               <Col>
                   <QuickLinks />
               </Col>
               <Col>
                   <OurChannels />
               </Col>
           </Row>
        </Container>
    );
}

export default MediaFooter;
