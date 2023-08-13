import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Select from "react-select";
import PageLayout from "../../layouts/PageLayout";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
const shiftStatus = [
  {
    label: "Fulfilled",
  },
  {
    label: "Action required",
  },
  {
    label: "Unfulfilled",
  },
  {
    label: "Offline",
  },
  {
    label: "Archived",
  },
];

const daysFilter = [
  { label: "Week", value: 7 },
  { label: "5 days", value: 5 },
  { label: "3 days", value: 3 },
];
export default function Planning() {
  const [selectedDayOption, setSelectedDayOption] = useState(daysFilter[0]);
  return (
    <PageLayout>
      <Fragment>
        <Container fluid className="bg-light min-vh-100">
          <Row className="bg-white text-dark py-1">
            <Col></Col>
            <Col lg={10}>
              <Row>
                <Col lg={12}>
                  <div className="d-flex flex-wrap justify-content-end gap-3 py-3 ">
                    <div>
                      <span>Need help? Contact our support department</span>
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                      <div></div>
                      <div>
                        <span>020 241 4009</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  {/* <Select
                    options={[
                      { label: "Week", value: "week" },
                      { label: "5 days", value: "5 days" },
                      { label: "3 days", value: "3 days" },
                    ]}
                    value={{ label: "5 days", value: "5 days" }}
                  /> */}
                </Col>
                <Col lg={3}>
                  <Select
                    options={daysFilter}
                    value={selectedDayOption}
                    onChange={setSelectedDayOption}
                  />
                </Col>
                <Col lg={3}>
                  <Dropdown className="d-inline mx-2 w-100">
                    <Dropdown.Toggle
                      id="dropdown-autoclose-true w-100"
                      variant="white"
                      className="shadow-sm border rounded-1"
                    >
                      Shift statuses
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {shiftStatus?.map((item) => {
                        return (
                          <Dropdown.Item key={item?.label}>
                            <div>
                              <div></div>
                              <div>
                                <span>{item?.label}</span>
                              </div>
                            </div>
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                {/* <Col lg={2}></Col> */}
                <Col lg={3} className="d-flex justify-content-end">
                  <Button variant="success" className="px-3 py-2 rounded-1">
                    <span className="">Create a shift</span>
                  </Button>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={12}>
                  <Row>
                    <Col lg={3} className="px-0">
                      <div
                        className="d-flex w-100 align-items-center px-2 border"
                        style={{ height: "90px" }}
                      >
                        <span className="fs-4 fw-bold">August</span>
                      </div>
                    </Col>
                    <Col lg={9} className="px-0 d-flex">
                      {Array.from({ length: selectedDayOption?.value })?.map(
                        (item) => {
                          return (
                            <div
                              className="d-flex align-items-center border px-2"
                              style={{
                                height: "90px",
                                width: `${100 / selectedDayOption?.value}%`,
                              }}
                            >
                              <div className="d-flex justify-content-center gap-2 align-items-center w-100">
                                <div>
                                  <small className="">Mo</small>
                                </div>
                                <div>
                                  <span className="fs-4 fw-bold">7</span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={12}>
                  <Row>
                    <Col lg={12} className="px-0">
                      <div
                        className="d-flex w-100 align-items-center px-2"
                        style={{ height: "50px" }}
                      >
                        <span className="fw-bold">Liebr Holding B.V.</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className="px-0">
                      <div
                        className="d-flex w-100 align-items-center border border-bottom-0 px-2"
                        style={{ height: "50px" }}
                      >
                        <span className="fw-bold">Algemeen</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={3} className="px-0">
                      <div
                        className="d-flex w-100 align-items-center border px-2"
                        style={{ height: "70px" }}
                      >
                        <span>Schoonmaker</span>
                      </div>
                    </Col>
                    <Col lg={9} className="px-0 d-flex">
                      {Array.from({ length: selectedDayOption?.value })?.map(
                        (item) => {
                          return (
                            <div
                              className="d-flex align-items-center border px-2"
                              style={{
                                height: "70px",
                                width: `${100 / selectedDayOption?.value}%`,
                              }}
                            >
                              <span></span>
                            </div>
                          );
                        }
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Fragment>
    </PageLayout>
  );
}
