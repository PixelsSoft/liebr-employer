import React, { Fragment } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";
import PageLayout from "../../../../layouts/PageLayout";
import { Labels } from "../../../../assets/labels";

const CreateProject = () => {
  return (
    <PageLayout>
      <Fragment>
        <Container fluid className="">
          <Row className=" text-dark py-5 mt-5">
            <Col></Col>
            <Col lg={8}>
              <Card className="border-0 p-4">
                <Card.Body>
                  <Row>
                    <Col lg={12} className="">
                      <Form>
                        <Row>
                          <Form.Group as={Col}>
                            <Form.Label>
                              <span className="fs-4 fw-bold">
                                {Labels.createNewProject}
                              </span>
                            </Form.Label>
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>
                              <span className="fw-bold">{Labels.company}</span>
                            </Form.Label>
                            <Select className="shadow-sm" />
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>
                              <span className="fw-bold">
                                {Labels.nameOfProject}
                              </span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder={Labels.nameOfProject}
                            />
                          </Form.Group>
                        </Row>

                        <Row className="mt-5">
                          <Form.Group as={Col} controlId="formGridPassword">
                            <Button
                              variant="danger"
                              type="submit"
                              className="w-100 py-3"
                            >
                              {Labels.save}
                            </Button>
                          </Form.Group>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Fragment>
    </PageLayout>
  );
};

export default CreateProject;
