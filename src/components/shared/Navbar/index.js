import React, { Component } from "react";
import { Navbar, Form, Button, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import {
    NavbarImage,
    ProfilePictureImage,
    TooltipRoundDiv,
    TooltipText,
} from "./style";
import { logoutUser } from "../../../actions/authActions";
import { imageEndpoint } from "../../../utils/globals";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// import Logo from '../../../media/logonova.png'

class NavbarComponent extends Component {
    render() {
        const onLogoutPress = () => {
            this.props.logoutUser();
        };

        const { auth } = this.props;
        let navComponent = null;

        if (auth.isAuthenticated) {
            navComponent = (
                <>
                    <Navbar className="justify-content-between" expand="md">
                        <Navbar.Brand href="/kudos-board">
                            <NavbarImage
                                alt="LOGO"
                                src="data:image/png;base64,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"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end mr-sm-2">
                            <Nav className="mr-auto">
                                <Nav.Link>|</Nav.Link>
                                <Nav.Link href="/kudos-board">Dê um kudo</Nav.Link>
                                <Nav.Link href="/timeline">Timeline</Nav.Link>
                                <Nav.Link href="/my-kudos">Meus kudos</Nav.Link>
                            </Nav>
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Esse é você
                                    </Tooltip>
                                }
                            >
                                <TooltipRoundDiv>
                                    <TooltipText>?</TooltipText>
                                </TooltipRoundDiv>
                            </OverlayTrigger>
                            <ProfilePictureImage
                                alt="LOGO"
                                src={`${imageEndpoint}/${auth.user.profile_image}`}
                            />
                            <Navbar.Text>{auth.user.name}</Navbar.Text>
                            <Navbar.Text>
                                <Button
                                    className="mr-2"
                                    variant="link"
                                    onClick={onLogoutPress}
                                >
                                    Sair
                                </Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                </>
            );
        } else {
            navComponent = (
                <>
                    <Navbar className="justify-content-between">
                        <Navbar.Brand href="/kudos-board">
                            <NavbarImage
                                alt="LOGO"
                                src="data:image/png;base64,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"
                            />
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link>|</Nav.Link>
                            <Nav.Link href="#features">Dê um kudo</Nav.Link>
                            <Nav.Link href="#pricing">Timeline</Nav.Link>
                            <Nav.Link href="#pricing">Meus kudos</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button className="mr-2" variant="link" href="/cadastro">
                                Cadastrar
                            </Button>
                            <Button className="mr-2" variant="link" href="/login">
                                Entrar
                            </Button>
                        </Form>
                    </Navbar>
                </>
            );
        }

        return <>{navComponent}</>;
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(NavbarComponent);
