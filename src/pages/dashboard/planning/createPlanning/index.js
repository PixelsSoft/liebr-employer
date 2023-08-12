import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Select from "react-select";
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
        <Row className="bg-light text-dark py-1 min-vh-100">
          <Col></Col>
          <Col lg={10}>
            <Row>
              <Col lg={12}>
                <p className="py-3">
                  <span className="fw-bold">Create a shift</span>
                </p>
                <p className="mb-0">
                  <small className="">Date and time</small>
                </p>
                <Row>
                  <Col lg={3}></Col>
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
                  <Col lg={6}></Col>
                </Row>
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
