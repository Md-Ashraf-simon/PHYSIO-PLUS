import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../image/about-pic-1.jpg";
import imgTow from "../../image/facility-pic.jpg";

const About = () => {
  return (
    <div>
      <h2 className="py-5 text-primary text-center">About Us</h2>
      <Container>
        <div>
          <Row xs={1} md={2}>
            <Col>
              <img src={aboutImg} alt="" />
            </Col>
            <Col>
              {" "}
              <h3>Our Approach and Values</h3>
              <p>
                Our aim is to provide a gold standard physiotherapy service that
                is easy to access, conveniently located and delivered
                seamlessly.
              </p>
              <br />
              <p>
                Physiotherapy & Sports Injury Clinic offer massage, and clinical
                Pilates in Hertfordshire. We believe that motivation and
                enthusiasm are essential ingredients to help you.
              </p>
              <button className="btn btn-warning"> See Our Services </button>
            </Col>
          </Row>
        </div>

        <div className="py-5">
          <Row xs={1} md={2}>
            <Col>
              <img src={imgTow} alt="" />
            </Col>
            <Col className="text-left">
              <li> Fully equipped studio</li>
              <li> Fully equipped studio</li>
              <li>Consulting rooms – no curtained cubicles</li>
              <li>Street parking out front or in a car park across the road</li>
              <li>Easy access by public transport, both bus and train</li>
              <li>Extended opening hours</li>
              <li>Highly experienced Physiotherapists</li>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
