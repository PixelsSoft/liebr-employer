import React, { Fragment } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";
import PageLayout from "../../../../layouts/PageLayout";
import { Labels } from "../../../../assets/labels";

const ArchiveProject = () => {
  return (
    <PageLayout>
      <Fragment>
        <Container fluid className="">
          <Row className=" text-dark py-5 mt-5">
            <Col></Col>
            <Col lg={10}>
              <Row>
                <Col lg={12}>
                  <div className="d-flex flex-wrap justify-content-between gap-3 py-3">
                    <div>
                      <span className="fs-4 fw-bold">
                        {Labels.projectArchive}
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Card className="border-0 p-4">
                    <Card.Body>
                      <div className="d-flex flex-wrap gap-4">
                        <div></div>
                        <div className="text-center w-100 py-0">
                          <Card.Text className="">
                            <small>
                              <small>
                                {
                                  Labels.youllFindAnOverviewOfAllArchivedProjectsHereSoon
                                }
                              </small>
                            </small>
                          </Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
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

export default ArchiveProject;
