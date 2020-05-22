import React, {Component} from 'react';
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux";
import {
    FaceBoxContainer,
    FaceBoxImage,
    FacesBoardContainer, KudosOption, KudosOptionImg, KudosOptionsContainer,
    OverlayBoxImage,
    SubTitleFaceBox,
    TitleFaceBox
} from "./styles";
import {getAllUsers} from "../../../actions/userActions";
import {isEmpty} from "../../../utils/validation";
import {imageEndpoint} from "../../../utils/globals";
import clappingHandsImg from "../../../media/clapping-hands.png";
import prayHandsImg from "../../../media/pray-hands.png";
import studentImg from "../../../media/student.png"
import {blue1, pink1, yellow1} from "../../../global/styles";

class FacesBoard extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    renderFaces = () => {
        return this.props.users.users.map(user => (
            <Col key={user.id} xs={6} md={4} lg={3}>
                <FaceBoxContainer>
                    <FaceBoxImage
                        src={`${imageEndpoint}/${user.profile_image}`}
                    />
                    <OverlayBoxImage>
                        <SubTitleFaceBox>
                            Dê um kudo para
                        </SubTitleFaceBox>
                        <TitleFaceBox>
                            {user.name.substr(0,user.name.indexOf(' '))}
                        </TitleFaceBox>
                        <KudosOptionsContainer>
                            <KudosOption color={blue1}>
                                <KudosOptionImg src={studentImg} alt="student"/>
                            </KudosOption>
                            <KudosOption color={yellow1}>
                                <KudosOptionImg src={clappingHandsImg} alt="clapping-hands"/>
                            </KudosOption>
                            <KudosOption color={pink1}>
                                <KudosOptionImg src={prayHandsImg} alt="pray-hands"/>
                            </KudosOption>
                        </KudosOptionsContainer>
                    </OverlayBoxImage>
                </FaceBoxContainer>
            </Col>
        ));
    };

    render() {
        const {users} = this.props;

        let renderFacesContent = null;

        if (!isEmpty(users.users)) {
            renderFacesContent = this.renderFaces();
        } else {
            renderFacesContent = (
                <Spinner animation="border" />
            );
        }

        return (
            <FacesBoardContainer>
                <Row noGutters="true">
                    {renderFacesContent}
                </Row>
            </FacesBoardContainer>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps, {getAllUsers})(FacesBoard);