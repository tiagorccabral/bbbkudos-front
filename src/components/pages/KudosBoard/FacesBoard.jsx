import React, {Component} from 'react';
import {
    FaceBoxContainer,
    FaceBoxImage,
    FacesBoardContainer,
    OverlayBoxImage,
    SubTitleFaceBox,
    TitleFaceBox
} from "./styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {getAllUsers} from "../../../actions/userActions";
import {connect} from "react-redux";
import {isEmpty} from "../../../utils/validation";
import {imageEndpoint} from "../../../utils/globals";
import Spinner from "react-bootstrap/Spinner";

class FacesBoard extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    renderFaces = () => {
        return this.props.users.users.map(user => (
            <Col key={user.id} xs={3}>
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