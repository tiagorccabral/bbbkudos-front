import React, {Component} from 'react';
import {FaceBoxContainer, FacesBoardContainer} from "./styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class FacesBoard extends Component {
    faces = [
        {id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10}
    ];

    renderFaces = () => {
        return this.faces.map(face => (
            <Col key={face.id} xs={3}>
                <FaceBoxContainer>

                </FaceBoxContainer>
            </Col>
        ));
    };

    render() {
        return (
            <FacesBoardContainer>
                <Row noGutters="true">
                    {this.renderFaces()}
                </Row>
            </FacesBoardContainer>
        );
    }
}

export default FacesBoard;