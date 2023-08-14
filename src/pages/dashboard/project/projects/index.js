import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArchive } from "react-icons/fa";
import PageLayout from "../../../../layouts/PageLayout";

const Projects = () => {
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
                      <span className="fs-4 fw-bold">Projects</span>
                    </div>
                    <div className="d-flex gap-3">
                      <Button variant="danger" className="px-3 py-1 rounded-1">
                        <div className="d-flex gap-1">
                          <div>
                            <AiOutlinePlus color="#ffff" />
                          </div>
                          <div>
                            <span>Create new project</span>
                          </div>
                        </div>
                      </Button>
                      <Button
                        variant="white"
                        className="px-3 py-1 rounded-1  border"
                      >
                        <span>Show archive</span>
                      </Button>
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
                              <span className="mx-2">
                                Liebr Holding B.V. / Algemeen
                              </span>
                            </td>
                            <td
                              className="bg-white text-center align-middle border-start-0 border-end-0"
                              width={"25%"}
                            >
                              1 job
                            </td>
                            <td
                              className="bg-white align-middle border-start-0 border-end-0"
                              width={"15%"}
                            >
                              <div className="w-100 d-flex justify-content-center">
                                <Button
                                  variant="white"
                                  className="rounded-1 border"
                                  size="sm"
                                >
                                  <div className="d-flex gap-1">
                                    <div>
                                      <FaArchive />
                                    </div>
                                    <div>
                                      <small>
                                        <small>Show archive</small>
                                      </small>
                                    </div>
                                  </div>
                                </Button>
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

export default Projects;
