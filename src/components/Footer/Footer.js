import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerImg from "../../image/footer-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light mt-5">
      <Container className="py-5">
        <Row>
          <Col>
            <div>
              <img src={footerImg} alt="" />
            </div>
            <div className="footer-text-color py-3">
              <p>
                Physiotherapy offers the highest quality physiotherapy and
                services in Gujarat. Professional,motivated & highly skilled and
                friendly therapists work for you.
              </p>
            </div>
          </Col>

          <Col>
            <div>
              <h3>PHYISO SERVICES</h3>
            </div>
            <div className="footer-text-color">
              <p> Physiotherapy</p>
              <p>Diagnostics</p>
              <p> Manual Therapy</p>
              <p>Massage Therapy</p>
            </div>
          </Col>

          <Col>
            <div>
              <h3>Time Sheduled</h3>
              <div className="footer-text-color">
                <div>
                  <strong>Monday - Friday </strong>
                  <br />" 8am to 6pm"
                </div>
                <div>
                  <strong>Saturday </strong>
                  <br />
                  "Sunday 9am to 4pm"
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <h3>CONTAACT US</h3>
            <div className="footer-text-color">
              <p>
                7320 Ricckvan Road, Chicago, M03 42JR, st. Zavburg, VB 5421.
              </p>
              <p>800-123-4567</p>
              <p> info@physio.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
