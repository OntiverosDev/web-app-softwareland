import React from 'react';
import { Container, Row, Col } from "reactstrap";



const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="fw-bolder text-dark">About <span className="text-warning">Us</span></h3>
              <p className="text-muted">By injected humour, or randomised words which don't look even slightly believable.</p>
              
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6>
                <p className="text-muted font-weight-light">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                <p className="text-muted font-weight-light">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;