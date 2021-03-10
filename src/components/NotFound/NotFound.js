import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="bg-light d-flex align-items-center justify-content-center">
      <section>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="text-center">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <div class="mb-3">Sorry, an error has occured, Requested page not found!</div>
                <Link to="/" className="btn btn-warning btn-lg">
                  Go To Home
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default NotFound;
