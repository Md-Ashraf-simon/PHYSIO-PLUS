import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Location = () => {
  return (
    <div>
      <Container>
        <h2 className="text-primary py-5 text-center">Specialized Doctors</h2>
        <Row>
          <Col md={4} sm={6} xs={12}>
            <Card>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/smiling-asian-woman-physician-white-coat_9083-2472.jpg?size=626&ext=jpg"
              />
              <Card.Body>
                <Card.Title className="mt-3 font-weight-bold">
                  Disha Nair
                </Card.Title>
                <Card.Text className="text-primary">Neurologiest</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Card>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg"
              />
              <Card.Body>
                <Card.Title className="mt-3 font-weight-bold">
                  Dr. Alison
                </Card.Title>
                <Card.Text className="text-primary">Neurologiest</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Card>
              <Card.Img
                variant="top"
                src="https://us.123rf.com/450wm/rido/rido1704/rido170400095/76465313-portrait-of-smiling-doctor-with-stethoscope-around-his-neck-at-medical-clinic-happy-smiling-senior-d.jpg?ver=6"
              />
              <Card.Body>
                <Card.Title className="mt-3 font-weight-bold">
                  Loex Trahan
                </Card.Title>
                <Card.Text className="text-primary">Neurologiest</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Location;
