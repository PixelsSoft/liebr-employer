import React from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Images } from "../../../Constant/Constant";
export default function Login() {
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
          <div className=" bg-white p-5 rounded w-100">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <img
                    style={{ width: "150px", marginBottom: 10 }}
                    src={Images.logo}
                    alt="Logo"
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Log in with email</Form.Label>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <p className={"text-body-tertiary"}>
                  Forgot password? You can either choose to{" "}
                  <Link
                    to={"without-password"}
                    className="link-primary"
                    style={{ textDecoration: "none" }}
                  >
                    Login without a password
                  </Link>{" "}
                  or{" "}
                  <Link
                    to={"reset-password"}
                    className="link-primary"
                    style={{ textDecoration: "none" }}
                  >
                    Reset your password.
                  </Link>
                  {/* <text style={{ color: "#691edd" }}>Reset your password.</text> */}
                </p>
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
                    Login
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
}
