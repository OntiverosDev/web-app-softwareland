import React from 'react';
import { Container, Row, Col } from "reactstrap";



const Service = () => {
  const services = [
    { title : "Desarrollo De Apps", desc : "frecemos a nuestros clientes servicios de desarrollo de apps móviles y soluciones web preparadas para móviles." },
    { title : "Apps de negocio", desc : "Desarrollamosaplicaciones confiables, de las cuales tu negocio puede depender." },
    { title : "Consultorías", desc : "Proveemos asesoramiento para el uso de programas y herramientas que solucionen tus necesidades tecnológicas." },
    { title : "Software Soluciones", desc : "Desarrollamos software a la medida que es fácil de usar, con altos estándares de calidad." },
    { title : "Aplicaciones Web", desc : "Nos enfocamos en desarrollar aplicaciones web en las que tu negocio puede confiar. " },
    { title : "Servicios en la nube", desc : "Los servicios y herramientas de la nube están disponibles para una amplia gama de necesidades." },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning fw-bolder">Services</span></h3>
              <p className="text-muted">Adoptamos un enfoque de ciclo de vida completo, asociándonos con nuestros clientes desde la conceptualización</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark fw-bold pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;