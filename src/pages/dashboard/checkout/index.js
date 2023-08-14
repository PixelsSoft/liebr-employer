import { Images } from "../../../Constant/Constant";

import React, { Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import PageLayout from "../../../layouts/PageLayout";
export default function CheckOut() {
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
                      <span className="fs-4 fw-bold">Checkouts</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Card className="border-0 p-4">
                    <Card.Body>
                      <div className="d-flex flex-wrap gap-4">
                        <div>
                          <img
                            src={Images.send}
                            alt=""
                            class="img-responsive bgicon"
                          />
                        </div>
                        <div>
                          <Card.Title>
                            <div>
                              <span className="fs-4 fw-bold">
                                It's quiet at the moment...
                              </span>
                            </div>
                          </Card.Title>
                          <Card.Text className="mt-3">
                            Once a FreeFlexer has checked out, you can verify
                            their checkout data on <br /> this screen.
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
      {/* <div class="container my-5">
        <div class="row">
          <div class="col-md-12">
            <h1>Checkouts</h1>
          </div>
        </div>

        <div class="row my-5 checkoutsection p-3">
          <div class="col-md-12">
            <div class="img-sec d-flex align-items-center">
              <img src={Images.send} alt="" class="img-responsive bgicon" />
              <div class="childcontent mx-3">
                <div class="heading">
                  <h3>It's still quiet now...</h3>
                </div>
                <div class="paragraphtext">
                  <p>
                    Once a FreeFlexer has checked out, you can check the time
                    registration here.
                  </p>
                </div>
              </div>
            </div>
            <div class="contect-sec"></div>
          </div>
        </div>
      </div> */}
    </PageLayout>
  );
}
