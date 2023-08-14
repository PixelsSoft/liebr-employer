import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginWithoutPassword = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    console.log("onsubmit");
    navigate("/Dashboard");
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh " }}
    >
      <Row className="w-100">
        <Col lg={3} />
        <Col lg={6}>
          <div className=" bg-white p-lg-4  rounded w-100">
            <Form>
              <Row className="mb-4">
                <Form.Group as={Col}>
                  <Form.Label>
                    <span className="fs-4 fw-bold">
                      Login without a password
                    </span>
                  </Form.Label>
                </Form.Group>
              </Row>

              <Row className="">
                <p className={"text-body-tertiary"}>
                  Please enter your email address below, and we'll send you a
                  link to login.
                </p>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Button
                    variant="danger"
                    type="submit"
                    className="w-100 py-3"
                    onClick={() => {
                      onSubmit();
                    }}
                  >
                    Login without a password
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </div>
        </Col>
        <Col lg={3} />
      </Row>
    </Container>
  );
};

export default LoginWithoutPassword;
