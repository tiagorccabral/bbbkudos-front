import React, { Component } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Formik } from "formik";

import { loginUser } from "../../../../actions/authActions";
import { ExternalContainerMargin, ExternalDivContainer } from "../styles";

class Login extends Component {
    state = {
        email: "",
        password: "",
    };

    render() {
        return (
            <Container>
                <ExternalDivContainer>
                    <ExternalContainerMargin>
                        <Row className="justify-content-xl-center">
                            <Col xl="8">
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="text-center">
                                            Bem vindo(a) ao BBB Kudos. Faça Login
                                            para entrar
                                        </Card.Title>
                                        <Card.Text />
                                        <Formik
                                            onSubmit={(
                                                values,
                                                { setSubmitting }
                                            ) => {
                                                this.props.loginUser({
                                                    userData: values,
                                                });
                                                setSubmitting(false);
                                            }}
                                            initialValues={this.state}
                                            validate={(values) => {
                                                const errors = {};
                                                if (!values.email) {
                                                    errors.email =
                                                        "E-mail é obrigatório";
                                                } else if (
                                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                                        values.email
                                                    )
                                                ) {
                                                    errors.email =
                                                        "Endereço de e-mail inválido";
                                                }
                                                if (!values.password) {
                                                    errors.password =
                                                        "Senha é um campo obrigatório";
                                                }
                                                return errors;
                                            }}
                                        >
                                            {({
                                                handleSubmit,
                                                handleChange,
                                                handleBlur,
                                                values,
                                                touched,
                                                errors,
                                                isSubmitting,
                                            }) => (
                                                <Form onSubmit={handleSubmit}>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>
                                                            E-mail
                                                        </Form.Label>
                                                        <Form.Control
                                                            value={values.email}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            isValid={
                                                                touched.email &&
                                                                !errors.email
                                                            }
                                                            isInvalid={
                                                                touched.email &&
                                                                errors.email
                                                            }
                                                            required
                                                            type="email"
                                                            name="email"
                                                            placeholder="email@gmail.com"
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.email}
                                                        </Form.Control.Feedback>
                                                        <Form.Control.Feedback>
                                                            Endereço válido!
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label>
                                                            Senha
                                                        </Form.Label>
                                                        <Form.Control
                                                            value={values.password}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            isValid={
                                                                touched.password &&
                                                                !errors.password
                                                            }
                                                            isInvalid={
                                                                touched.password &&
                                                                errors.password
                                                            }
                                                            required
                                                            type="password"
                                                            name="password"
                                                            placeholder="Senha"
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.password}
                                                        </Form.Control.Feedback>
                                                        <Form.Control.Feedback>
                                                            Campo Válido
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Row className="justify-content-center">
                                                        <Button
                                                            variant="success"
                                                            type="submit"
                                                            disabled={isSubmitting}
                                                        >
                                                            Entrar
                                                        </Button>
                                                    </Row>
                                                </Form>
                                            )}
                                        </Formik>
                                        <div className="text-center">
                                            <Card.Text />
                                            <Card.Text>ou</Card.Text>
                                            <Card.Link href="/cadastro">
                                                Crie sua conta
                                            </Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </ExternalContainerMargin>
                </ExternalDivContainer>
            </Container>
        );
    }
}

export default connect(null, { loginUser })(Login);
