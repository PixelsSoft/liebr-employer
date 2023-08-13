import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Select from "react-select";
import InputNumber from "rc-input-number";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

const CreatePlannings = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row className="bg-white shadow-sm py-4 position-sticky sticky-top ">
          <Col></Col>
          <Col lg={10}>
            <Row>
              <Col lg={4}>
                <Select options={[]} />
              </Col>
              <Col lg={4}></Col>
              <Col lg={4} className="d-flex justify-content-end">
                <Button className="px-3 py-2 rounded-1">
                  <span>Place recurring shift</span>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="bg-warning text-white py-1 pt-3">
          <Col></Col>
          <Col lg={10}>
            <Row>
              <Col lg={12}>
                <p className="text-center">
                  <span>
                    Your current credit is too low to allow factoring for
                    FreeFlexers, this significantly reduces the chance of
                    finding suitable FreeFlexers. We recommend that you increase
                    your credit before you place the shift.
                  </span>
                </p>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="bg-light text-dark py-1">
          <Col></Col>
          <Col lg={10}>
            <Row>
              <Col lg={12}>
                <p className="py-3">
                  <span className="fw-bold">Create a shift</span>
                </p>
                <div className="d-flex flex-column gap-3">
                  <div>
                    <p className="mb-0">
                      <small className="">Date and time</small>
                    </p>
                    <Row>
                      <Col lg={4}>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Cras justo odio</ListGroup.Item>
                          <ListGroup.Item>Start 00:00 End 00:00</ListGroup.Item>
                          <ListGroup.Item className="bg-transparent shadow-sm">
                            <div className="d-flex w-100 justify-content-between">
                              <div>
                                <span>Flexible start and end time</span>
                              </div>
                              <div>
                                <Form>
                                  <Form.Check type="switch" />
                                </Form>
                              </div>
                            </div>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                      <Col lg={3}>
                        <Card className="border-0 shadow-sm rounded-0 p-2">
                          <Card.Body>
                            <div>
                              <div>
                                <Card.Text className="fw-normal text-center">
                                  Similar shifts in your region are on average
                                  €20.90 per hour (including usage fee)
                                </Card.Text>
                              </div>
                              <div className="mt-3 d-flex justify-content-center">
                                <Button className="px-3 py-2 rounded-1">
                                  <span>I want the same for this shift</span>
                                </Button>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col></Col>
                    </Row>
                  </div>
                  <div>
                    <p className="mb-0">
                      <small className="">Number of FreeFlexers</small>
                    </p>
                    <Row>
                      <Col lg={3}>
                        <InputNumber
                          aria-label="Simple number input example"
                          min={-8}
                          max={10}
                        />
                      </Col>
                      <Col lg={3}></Col>
                      <Col lg={6}></Col>
                    </Row>
                  </div>
                  <div>
                    <p className="mb-0">
                      <small className="">Total cost per hour</small>
                    </p>
                    <Row>
                      <Col lg={6}>
                        <Select options={[]} />
                      </Col>

                      <Col lg={6}></Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="bg-light text-dark py-1 py-5">
          <Col></Col>
          <Col lg={10}>
            <Row>
              <Col lg={12}>
                <Tabs
                  defaultActiveKey="details"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="details" title="Details">
                    <div className="d-flex flex-column gap-3">
                      <div>
                        <p className="mb-0">
                          <small className="">
                            Automatically accept FreeFlexers from your Flexpool
                          </small>
                        </p>
                        <Row>
                          <Col lg={5}>
                            <div className="d-flex flex-column gap-3">
                              <div>
                                <Select options={[]} />
                              </div>
                              <div>
                                <Card className="border-0 shadow-sm rounded-0">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <p className="fw-normal">
                                          48 hours before the start of the
                                          shift, auto-accept FreeFlexers that
                                          have frequently worked with me.
                                        </p>
                                      </div>
                                      <div>
                                        <Form>
                                          <Form.Check type="switch" />
                                        </Form>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            </div>
                          </Col>

                          <Col></Col>
                        </Row>
                      </div>
                      <div>
                        <p className="mb-0">
                          <small className="">Cancellation policy</small>
                        </p>
                        <Row>
                          <Col lg={5}>
                            <Select options={[]} />
                          </Col>

                          <Col></Col>
                        </Row>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="shift Roles" title="Shift Roles">
                    <div className="d-flex flex-column gap-3">
                      <div>
                        <p className="mb-0">
                          <span className="">
                            Select who can manage this shift
                          </span>
                        </p>
                        <Row>
                          <Col lg={3}>
                            <div className="d-flex flex-column gap-3 w-100">
                              <div>
                                <Button
                                  variant="white"
                                  className="px-4 py-2 rounded-1 shadow-sm border w-100 bg-white text-start"
                                >
                                  <span>Add User</span>
                                </Button>
                              </div>
                            </div>
                          </Col>
                          <Col></Col>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Col lg={8}>
                            <Table width={"100%"}>
                              <thead>
                                <tr>
                                  <th
                                    className="bg-transparent"
                                    width="60%"
                                  ></th>
                                  <th className="bg-transparent" width="20%">
                                    <small className="fw-normal">
                                      Edit / Cancel Shift
                                    </small>
                                  </th>
                                  <th className="bg-transparent" width="20%">
                                    <small className="fw-normal">
                                      Select Applicants
                                    </small>
                                  </th>
                                  <th className="bg-transparent" width="20%">
                                    <small className="fw-normal">
                                      Checkout
                                    </small>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="shadow-sm">
                                {Array.from({ length: 4 })?.map((item) => {
                                  return (
                                    <tr>
                                      <td width="60%">
                                        <div className="d-flex">
                                          <span className="fw-bold">
                                            El Essakkati
                                          </span>
                                        </div>
                                      </td>
                                      <td width="20%">
                                        <Form>
                                          <Form.Check type="switch" />
                                        </Form>
                                      </td>
                                      <td width="20%">
                                        <Form>
                                          <Form.Check type="switch" />
                                        </Form>
                                      </td>
                                      <td width="20%">
                                        <Form>
                                          <Form.Check type="switch" />
                                        </Form>
                                      </td>
                                    </tr>
                                  );
                                })}
                                {/* <tr>
                                  <td>1</td>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td colSpan={2}>Larry the Bird</td>
                                  <td>@twitter</td>
                                </tr> */}
                              </tbody>
                            </Table>
                          </Col>

                          <Col></Col>
                        </Row>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>

        <Row className="bg-white shadow py-4 position-sticky sticky-bottom ">
          <Col></Col>
          <Col lg={10}>
            <Row>
              <Col lg={12}>
                <div className="d-flex w-100 gap-3">
                  <Button
                    variant="white"
                    className="px-4 py-2 rounded-1 shadow-sm border"
                  >
                    <span>Place and add another</span>
                  </Button>
                  <Button variant="danger" className="px-5 py-2 rounded-1">
                    <span>Place a shift</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreatePlannings;
