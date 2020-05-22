import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
    AvailableKudosOptionsContainer,
    AvailableKudosSubtitle,
    AvailableKudosTitle,
    AvailableKudosTitleContainer, KudosAvailableDiv, KudosAvailableText, KudosOption, KudosOptionImg
} from "./styles";
import {blue1, pink1, yellow1} from "../../../global/styles";
import studentImg from "../../../media/student.png";
import clappingHandsImg from "../../../media/clapping-hands.png";
import prayHandsImg from "../../../media/pray-hands.png";

class AvailableKudos extends Component {
    render() {
        return (
            <Row>
                <Col xs={10} md={6}>
                    <Card>
                        <Card.Body>
                            <AvailableKudosTitleContainer>
                                <AvailableKudosTitle>
                                    Selos Disponíveis
                                </AvailableKudosTitle>
                                <AvailableKudosSubtitle>
                                    Atualizado em: 12/12/2020
                                </AvailableKudosSubtitle>
                            </AvailableKudosTitleContainer>
                            <AvailableKudosOptionsContainer>
                                <KudosOption color={blue1}>
                                    <KudosOptionImg src={studentImg} alt="student"/>
                                    <KudosAvailableDiv>
                                        <KudosAvailableText>
                                            2
                                        </KudosAvailableText>
                                    </KudosAvailableDiv>
                                </KudosOption>
                                <KudosOption color={yellow1}>
                                    <KudosOptionImg src={clappingHandsImg} alt="clapping-hands"/>
                                    <KudosAvailableDiv>
                                        <KudosAvailableText>
                                            1
                                        </KudosAvailableText>
                                    </KudosAvailableDiv>
                                </KudosOption>
                                <KudosOption color={pink1}>
                                    <KudosOptionImg src={prayHandsImg} alt="pray-hands"/>
                                    <KudosAvailableDiv>
                                        <KudosAvailableText>
                                            0
                                        </KudosAvailableText>
                                    </KudosAvailableDiv>
                                </KudosOption>
                            </AvailableKudosOptionsContainer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        );
    }
}

export default AvailableKudos;