import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSprayCan } from "react-icons/bi";

import { BsPencil } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Link } from "react-router-dom";
import { Labels } from "../../../../assets/labels";
import PageLayout from "../../../../layouts/PageLayout";

const FlexPools = () => {
  return (
    <PageLayout>
      <Fragment>
        <Container fluid className="">
          <Row className=" text-dark py-5">
            <Col></Col>
            <Col lg={10}>
              <Row>
                <Col lg={12}>
                  <div className="d-flex flex-wrap justify-content-between gap-3 py-3">
                    <div>
                      <span className="fs-4 fw-bold">
                        Flexpools for Liebr Holding B.V.
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <Link to="/flex-pools/create/">
                        <Button
                          variant="danger"
                          className="px-3 py-1 rounded-1"
                        >
                          <div className="d-flex gap-1">
                            <div>
                              <AiOutlinePlus color="#ffff" />
                            </div>
                            <div>
                              <span>{Labels.addNewFlexpool}</span>
                            </div>
                          </div>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Table bordered width={"100%"}>
                    <tbody>
                      {Array.from({ length: 5 })?.map((item) => {
                        return (
                          <tr>
                            <td
                              className="bg-white align-middle cursor-pointer border-start-0 border-end-0"
                              width={"60%"}
                            >
                              <div className="d-flex gap-2">
                                <div>
                                  <BiSprayCan />
                                </div>
                                <div className="d-flex gap-1">
                                  <div>
                                    <span className="mx-2">
                                      Bartending - abc
                                    </span>
                                  </div>
                                  <div>
                                    <small>
                                      <small className="text-muted">
                                        0 FreeFlexer
                                      </small>
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td
                              className="bg-white align-middle border-start-0 border-end-0"
                              width={"15%"}
                            >
                              <div className="w-100 d-flex justify-content-center">
                                <div className="d-flex gap-3">
                                  <div>
                                    <BsPencil
                                      size={20}
                                      className="cursor-pointer"
                                    />
                                  </div>
                                  <div>
                                    <RiDeleteBin6Line
                                      size={20}
                                      className="cursor-pointer"
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Fragment>
    </PageLayout>
  );
};

export default FlexPools;
