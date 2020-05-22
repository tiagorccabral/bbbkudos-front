import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import moment from "moment";
import {
    AvailableKudosOptionsContainer,
    AvailableKudosSubtitle,
    AvailableKudosTitle,
    AvailableKudosTitleContainer,
    KudosAvailableDiv,
    KudosAvailableText,
    KudosOption,
    KudosOptionImg,
} from "./styles";
import { blue1, pink1, yellow1 } from "../../../global/styles";
import studentImg from "../../../media/student.png";
import clappingHandsImg from "../../../media/clapping-hands.png";
import prayHandsImg from "../../../media/pray-hands.png";
import { getAvailableKudos } from "../../../actions/kudoActions";
import { connect } from "react-redux";
import { isEmpty } from "../../../utils/validation";

class AvailableKudos extends Component {
    componentDidMount() {
        this.props.getAvailableKudos({ sender_id: this.props.auth.user.id });
    }

    render() {
        const { kudos } = this.props;
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
                                    Atualizado em:{" "}
                                    {!isEmpty(kudos.availableKudos)
                                        ? moment(
                                              kudos.availableKudos[
                                                  kudos.availableKudos.length - 1
                                              ].updated_at
                                          )
                                              .locale("pt-br")
                                              .format("MMMM Do YYYY, h:mm a")
                                        : ""}
                                </AvailableKudosSubtitle>
                            </AvailableKudosTitleContainer>
                            <AvailableKudosOptionsContainer>
                                <KudosOption color={blue1}>
                                    <KudosOptionImg src={studentImg} alt="student" />
                                    <KudosAvailableDiv>
                                        <KudosAvailableText>
                                            {!isEmpty(kudos.availableKudos)
                                                ? kudos.availableKudos[0]
                                                      .available_kudos
                                                : ""}
                                        </KudosAvailableText>
                                    </KudosAvailableDiv>
                                </KudosOption>
                                <KudosOption color={yellow1}>
                                    <KudosOptionImg
                                        src={clappingHandsImg}
                                        alt="clapping-hands"
                                    />
                                    <KudosAvailableDiv>
                                        <KudosAvailableText>
                                            {!isEmpty(kudos.availableKudos)
                                                ? kudos.availableKudos[1]
                                                      .available_kudos
                                                : ""}
                                        </KudosAvailableText>
                                    </KudosAvailableDiv>
                                </KudosOption>
                                <KudosOption color={pink1}>
                                    <KudosOptionImg
                                        src={prayHandsImg}
                                        alt="pray-hands"
                                    />
                                    <KudosAvailableDiv>
                                        <KudosAvailableText>
                                            {!isEmpty(kudos.availableKudos)
                                                ? kudos.availableKudos[2]
                                                      .available_kudos
                                                : ""}
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

const mapStateToProps = (state) => ({
    auth: state.auth,
    kudos: state.kudos,
});

export default connect(mapStateToProps, { getAvailableKudos })(AvailableKudos);
