import React, { Fragment, useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import moment from "moment";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsCalendar3, BsTelephone } from "react-icons/bs";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import PageLayout from "../../../../layouts/PageLayout";

import "../planning.css";
import Flatpickr from "react-flatpickr";
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

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Planning() {
  const query = useQuery();
  const navigate = useNavigate();
  const datePickerRef = useRef(null);
  const [selectedDayOption, setSelectedDayOption] = useState(daysFilter[0]);
  const [selectedDate, setSelectedDate] = useState(
    moment().format("yyyy-MM-DD")
  );

  useEffect(() => {
    setSelectedDate(query.get("on"));
  }, [query.get("on")]);

  const handleClickCreateShift = (date = null) => {
    navigate(
      `/planning/jobs/shifts/:create?on=${
        date
          ? moment(date).format("yyyy-MM-DD")
          : moment(selectedDate).format("yyyy-MM-DD")
      }`
    );
  };

  const handleClickNextAndPreviousWeek = (number) => {
    if (number === 1) {
      navigate(
        `/planning?on=${moment(selectedDate)
          .add(selectedDayOption?.value, "days")
          .format("yyyy-MM-DD")}`
      );
    } else {
      navigate(
        `/planning?on=${moment(selectedDate)
          .subtract(selectedDayOption?.value, "days")
          .format("yyyy-MM-DD")}`
      );
    }
  };

  const handleClickDatePicker = (date) => {
    navigate(
        `/planning?on=${moment(date[0]).format("yyyy-MM-DD")}`
      )
 
  };
  return (
    <PageLayout>
      <Fragment>
        <Container fluid className="bg-light min-vh-100">
          <Row className="bg-white text-dark py-1 pb-5">
            <Col></Col>
            <Col lg={10}>
              <Row>
                <Col lg={12}>
                  <div className="d-flex flex-wrap justify-content-end gap-3 py-3 ">
                    <div>
                      <span>Need help? Contact our support department</span>
                    </div>
                    <div className="d-flex flex-wrap gap-2 cursor-pointer">
                      <div>
                        <BsTelephone />
                      </div>
                      <div>
                        <span>020 241 4009</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  <div className="d-flex gap-4 justify-content-between">
                    <div>
                      <span className="fs-4 fw-bold">
                        Week {moment(selectedDate).week()}
                      </span>
                    </div>
                    <div className="d-flex flex-column ">
                      <div className="shadow-sm ">
                        <Button
                          variant="transparent"
                          className="border rounded-0"
                          onClick={() => handleClickNextAndPreviousWeek(-1)}
                        >
                          <MdArrowBackIosNew />
                        </Button>
                        <Button
                          variant="transparent"
                          className="border rounded-0"
                          onClick={() => {
                            datePickerRef.current.flatpickr.open();
                          }}
                        >
                          <div></div>
                          <BsCalendar3 />
                        </Button>
                        <Button
                          variant="transparent"
                          className="border rounded-0"
                          onClick={() => handleClickNextAndPreviousWeek(1)}
                        >
                          <MdArrowForwardIos />
                        </Button>
                      </div>
                      <div  style={{ width: 0, height: 0, padding: 0, border: 0 }}>
                        <Flatpickr
                          ref={datePickerRef}
                          style={{ width: 0, height: 0, padding: 0, border: 0 }}
                          value={selectedDate}
                          onChange={handleClickDatePicker}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <Select
                    options={daysFilter}
                    value={selectedDayOption}
                    onChange={setSelectedDayOption}
                    className="shadow-sm"
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

                    <Dropdown.Menu className="rounded-1">
                      {shiftStatus?.map((item, index) => {
                        return (
                          <>
                            <Dropdown.Item
                              key={item?.label}
                              className={index !== 0 ? "border-top" : ""}
                            >
                              <div>
                                <div></div>
                                <div>
                                  <span>{item?.label}</span>
                                </div>
                              </div>
                            </Dropdown.Item>
                          </>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col lg={3} className="d-flex justify-content-end">
                  <Button
                    variant="success"
                    className="px-3 rounded-1"
                    onClick={handleClickCreateShift}
                  >
                    <span className="">Create a shift</span>
                  </Button>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={12}>
                  <Row>
                    <Col lg={3} className="px-0">
                      <div
                        className="d-flex w-100 align-items-center px-2 "
                        style={{ height: "90px", background: "#FBFBFB" }}
                      >
                        <span className="fs-4 fw-bold">
                          {moment(selectedDate)?.format("MMMM")}
                        </span>
                      </div>
                    </Col>
                    <Col lg={9} className="px-0 d-flex">
                      {Array.from({ length: selectedDayOption?.value })?.map(
                        (item, index) => {
                          const dateAndDay = moment(selectedDate).add(
                            index,
                            "day"
                          );

                          return (
                            <div
                              className="d-flex align-items-center px-2"
                              style={{
                                height: "90px",
                                width: `${100 / selectedDayOption?.value}%`,
                                background:
                                  dateAndDay.format("yyyy-MM-DD") ===
                                  moment().format("yyyy-MM-DD")
                                    ? "#0F0017"
                                    : index % 2 == 0
                                    ? "#F3F2F3"
                                    : "#FBFBFB",
                                color:
                                  dateAndDay.format("yyyy-MM-DD") ===
                                  moment().format("yyyy-MM-DD")
                                    ? "#ffff"
                                    : "black",
                              }}
                            >
                              <div className="d-flex justify-content-center gap-2 align-items-center w-100">
                                <div>
                                  <small className="">
                                    {moment(dateAndDay)?.format("dd")}
                                  </small>
                                </div>
                                <div>
                                  <span className="fs-4 fw-bold">
                                    {moment(dateAndDay)?.format("DD")}
                                  </span>
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
                        className="d-flex w-100 align-items-center px-2 cursor-pointer"
                        style={{ height: "50px" }}
                      >
                        <span className="fw-bold">Liebr Holding B.V.</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className="px-0">
                      <div
                        className="d-flex w-100 align-items-center border border-bottom-0 px-2 cursor-pointer"
                        style={{ height: "50px" }}
                      >
                        <span className="fw-bold">Algemeen</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={3} className="px-0">
                      <div
                        className="d-flex w-100 align-items-center border border-end-0 px-2"
                        style={{ height: "70px" }}
                      >
                        <span>Schoonmaker</span>
                      </div>
                    </Col>
                    <Col lg={9} className="px-0 d-flex">
                      {Array.from({ length: selectedDayOption?.value })?.map(
                        (item, index) => {
                          const dateAndDay = moment(selectedDate).add(
                            index,
                            "day"
                          );
                          return (
                            <div
                              className="d-flex align-items-center border-top border-bottom"
                              style={{
                                height: "70px",
                                background:
                                  index % 2 == 0 ? "#F3F2F3" : "#FBFBFB",
                                width: `${100 / selectedDayOption?.value}%`,
                                cursor: "pointer",
                              }}
                            >
                              <div
                                className="w-100 h-100 d-flex justify-content-center align-items-center planning-plus-button"
                                onClick={() =>
                                  handleClickCreateShift(dateAndDay)
                                }
                              >
                                <span>
                                  <AiOutlinePlus size={25} />
                                </span>
                              </div>
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
