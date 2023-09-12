import moment from "moment";
import InputNumber from "rc-input-number";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Tabs from "react-bootstrap/Tabs";
import { BsCalendar3, BsClock, BsClockHistory } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import { Labels } from "../../../../assets/labels";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo( () => new URLSearchParams( search ), [search] );
}

const CreatePlannings = () => {
  const datePickerRef = useRef( null );
  const query = useQuery();
  const [selectedDate, setSelectedDate] = useState(
    moment().format( "yyyy-MM-DD" )
  );
  /* eslint-disable */
  useEffect( () => {
    setSelectedDate( query.get( "on" ) );
  }, [query.get( "on" )] );
  const handleClickDatePicker = ( date ) => {
    setSelectedDate( moment( date[0] ).format( "yyyy-MM-DD" ) );
  };
  return (
    /* eslint-disable */
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
                  <span>{Labels.placeRecurringShift}</span>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="bg-warning text-white py-1 ">
          <Col></Col>
          <Col lg={10}>
            <Row>
              <Col></Col>
              <Col lg={10}>
                <p className="text-center">
                  <>
                    <small>
                      {
                        Labels.yourCurrentCreditIsTooLowToAllowFactoringForFreeflexersThisSignificantlyReducesTheChanceOfFindingSuitableFreeflexersWeRecommendThatYouIncreaseYourCreditBeforeYouPlaceTheShift
                      }
                    </small>
                  </>
                </p>
              </Col>
              <Col></Col>
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
                  <span className="fw-bold">{Labels.createAShift}</span>
                </p>
                <div className="d-flex flex-column gap-3">
                  <div>
                    <p className="mb-0">
                      <small>
                        <small className="">{Labels.dateAndTime}</small>
                      </small>
                    </p>
                    <Row>
                      <Col lg={3}>
                        <ListGroup variant="flush">
                          <ListGroup.Item
                            className="cursor-pointer"
                            onClick={() => {
                              datePickerRef.current.flatpickr.open();
                            }}
                          >
                            <div>
                              <div className="d-flex gap-2 align-items-center">
                                <div>
                                  <BsCalendar3 />
                                </div>
                                <div>
                                  <small>
                                    {moment( selectedDate )?.format( "DD-MM-yyyy" )}
                                  </small>
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>
                          <Flatpickr
                            ref={datePickerRef}
                            style={{
                              width: 0,
                              height: 0,
                              padding: 0,
                              border: 0,
                            }}
                            value={selectedDate}
                            onChange={handleClickDatePicker}
                          />
                          <ListGroup.Item>
                            <div>
                              <div className="d-flex gap-2">
                                <div>
                                  <BsClock />
                                </div>
                                <div>
                                  <small>Start 00:00 End 00:00</small>
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item className="bg-transparent shadow-sm">
                            <div className="d-flex w-100 justify-content-between">
                              <div>
                                <div className="d-flex gap-2">
                                  <div>
                                    <BsClockHistory />
                                  </div>
                                  <div>
                                    <small>
                                      {Labels.flexibleStartAndEndTime}
                                    </small>
                                  </div>
                                </div>
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
                                  <small>
                                    {
                                      Labels.similarShiftsInYourRegionAreOnAveragePerHourIncludingUsageFee
                                    }
                                  </small>
                                </Card.Text>
                              </div>
                              <div className="mt-3 d-flex justify-content-center">
                                <Button className="px-3 py-2 rounded-1">
                                  <span>{Labels.iWantTheSameForThisShift}</span>
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
                      <small>
                        <small className="">
                          {" "}
                          {Labels.numberOfFreeflexers}
                        </small>
                      </small>
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
                      <small>
                        <small className=""> {Labels.totalCostPerHour}</small>
                      </small>
                    </p>
                    <Row>
                      <Col lg={6}>
                        <ListGroup variant="flush">
                          <ListGroup.Item className="p-0">
                            <Select options={[]} />
                          </ListGroup.Item>

                          <ListGroup.Item className="bg-transparent shadow-sm">
                            <div className="d-flex w-100 justify-content-between">
                              <div>
                                <small>
                                  {
                                    Labels.increaseTheCostByIfThisShiftIsStillUnfulfilledDaysBeforeItStarts
                                  }
                                </small>
                              </div>
                              <div>
                                <Form>
                                  <Form.Check type="switch" />
                                </Form>
                              </div>
                            </div>
                          </ListGroup.Item>
                        </ListGroup>
                        {/* <Select options={[]} /> */}
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
                  <Tab eventKey="details" title={Labels.details}>
                    <div className="d-flex flex-column gap-3">
                      <div>
                        <p className="mb-0">
                          <small>
                            <small className="">
                              {
                                Labels.automaticallyAcceptFreeflexersFromYourFlexpool
                              }
                            </small>
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
                                          {
                                            Labels.hoursBeforeTheStartOfTheShiftAutoAcceptFreeflexersThatHaveFrequentlyWorkedWithMe
                                          }
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
                          <small>
                            <small className="">
                              {Labels.cancellationPolicy}
                            </small>
                          </small>
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
                  <Tab eventKey="shift Roles" title={Labels.shiftRoles}>
                    <div className="d-flex flex-column gap-3">
                      <div>
                        <p className="mb-0">
                          <span className="">
                            {Labels.selectWhoCanManageThisShift}
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
                                  <span>{Labels.addUser}</span>
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
                                    <small>
                                      <small className="fw-normal">
                                        {Labels.editCancelShift}
                                      </small>
                                    </small>
                                  </th>
                                  <th className="bg-transparent" width="20%">
                                    <small>
                                      <small className="fw-normal">
                                        {Labels.selectApplicants}
                                      </small>
                                    </small>
                                  </th>
                                  <th className="bg-transparent" width="20%">
                                    <small>
                                      <small className="fw-normal">
                                        {Labels.checkout}
                                      </small>
                                    </small>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="shadow-sm">
                                {Array.from( { length: 4 } )?.map( ( item ) => {
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
                                } )}
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
                    <span>{Labels.placeAndAddAnother}</span>
                  </Button>
                  <Button variant="danger" className="px-5 py-2 rounded-1">
                    <span>{Labels.placeAShift}</span>
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
