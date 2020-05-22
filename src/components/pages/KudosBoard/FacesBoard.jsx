import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import {
    FaceBoxContainer,
    FaceBoxImage,
    FacesBoardContainer,
    KudosOption,
    KudosOptionImg,
    KudosOptionsContainer,
    OverlayBoxImage,
    SubTitleFaceBox,
    TitleFaceBox,
} from "./styles";
import { getAllUsers } from "../../../actions/userActions";
import { sendKudosToUser, getAvailableKudos } from "../../../actions/kudoActions";
import { isEmpty } from "../../../utils/validation";
import { imageEndpoint } from "../../../utils/globals";
import clappingHandsImg from "../../../media/clapping-hands.png";
import prayHandsImg from "../../../media/pray-hands.png";
import studentImg from "../../../media/student.png";
import { blue1, pink1, yellow1 } from "../../../global/styles";
import { toast } from "react-toastify";

class FacesBoard extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    sendKudos = ({ kudo_id, user_id }) => {
        if (isEmpty(this.props.auth.user)) {
            toast.error("Ocorreu um erro! Tente novamente.");
        } else if (this.props.auth.user.id === user_id) {
            toast.warning(
                "Envie um Kudo's para um Brother, não vale você mesmo(a)!"
            );
        } else {
            this.props.sendKudosToUser(
                {
                    kudo_id: kudo_id,
                    user_id: user_id,
                    sender_id: this.props.auth.user.id,
                },
                () => {
                    this.props.getAvailableKudos({
                        sender_id: this.props.auth.user.id,
                    });
                }
            );
        }
    };

    renderFaces = () => {
        return this.props.users.users.map((user) => (
            <Col key={user.id} xs={6} md={4} lg={3}>
                <FaceBoxContainer>
                    <FaceBoxImage src={`${imageEndpoint}/${user.profile_image}`} />
                    <OverlayBoxImage>
                        <SubTitleFaceBox>Dê um kudo para</SubTitleFaceBox>
                        <TitleFaceBox>
                            {user.name.substr(0, user.name.indexOf(" "))}
                        </TitleFaceBox>
                        <KudosOptionsContainer>
                            <KudosOption
                                color={blue1}
                                onClick={() =>
                                    this.sendKudos({
                                        kudo_id: "1",
                                        user_id: user.id,
                                    })
                                }
                            >
                                <KudosOptionImg src={studentImg} alt="student" />
                            </KudosOption>
                            <KudosOption
                                color={yellow1}
                                onClick={() =>
                                    this.sendKudos({
                                        kudo_id: "2",
                                        user_id: user.id,
                                    })
                                }
                            >
                                <KudosOptionImg
                                    src={clappingHandsImg}
                                    alt="clapping-hands"
                                />
                            </KudosOption>
                            <KudosOption
                                color={pink1}
                                onClick={() =>
                                    this.sendKudos({
                                        kudo_id: "3",
                                        user_id: user.id,
                                    })
                                }
                            >
                                <KudosOptionImg
                                    src={prayHandsImg}
                                    alt="pray-hands"
                                />
                            </KudosOption>
                        </KudosOptionsContainer>
                    </OverlayBoxImage>
                </FaceBoxContainer>
            </Col>
        ));
    };

    render() {
        const { users } = this.props;

        let renderFacesContent = null;

        if (!isEmpty(users.users)) {
            renderFacesContent = this.renderFaces();
        } else {
            renderFacesContent = <Spinner animation="border" />;
        }

        return (
            <FacesBoardContainer>
                <Row noGutters="true">{renderFacesContent}</Row>
            </FacesBoardContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    users: state.users,
});

export default connect(mapStateToProps, {
    getAllUsers,
    sendKudosToUser,
    getAvailableKudos,
})(FacesBoard);
