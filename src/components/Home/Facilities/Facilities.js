import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faTransgender } from "@fortawesome/free-solid-svg-icons";

import "./Facilities.css";

const Facilities = () => {
  const iconOne = <FontAwesomeIcon icon={faShareAlt} />;
  const iconTow = <FontAwesomeIcon icon={faFileAlt} />;
  const iconThree = <FontAwesomeIcon icon={faTransgender} />;
  return (
    <div className="py-5 ">
      <Container>
        <div>
          <h2 className="small-title text-center">Why choose us</h2>
        </div>
        <Row>
          <Col xs={12} md={4}>
            <Card className="Card">
              <Card.Body>
                <i className="icon__Style">{iconTow}</i>
                <Card.Title>Excellence Research</Card.Title>
                <Card.Text>
                  We have the right caring, experience and dedicated
                  professional for you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="Card">
              <Card.Body>
                <i className="icon__Style">{iconOne}</i>
                <Card.Title>Personal Treatments</Card.Title>
                <Card.Text>
                  We care about you and the success of your providing
                  personalised care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="Card">
              <Card.Body>
                <i className="icon__Style">{iconThree}</i>
                <Card.Title>Professional therapist</Card.Title>
                <Card.Text>
                  We are highest levels of honesty and professionalism at all
                  times.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Facilities;
