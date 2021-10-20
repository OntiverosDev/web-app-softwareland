import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'



const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary fw-bold f-14 mb-4">What is Lorem Ipsum?</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span className="text-primary font-weight-medium">Name</span></h1>
              <p className="text-muted mb-4 pb-2"> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0 ">
              <Image src='images/dev.png' alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;