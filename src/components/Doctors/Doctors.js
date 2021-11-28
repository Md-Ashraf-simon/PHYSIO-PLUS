import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Doctors = () => {
  return (
    <Container className="mb-5">
      <h1 className="py-5">Specialized Doctors</h1>
      <Row className="">
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
        <Col md={4} sm={6} xs={12}>
          <Card>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg?size=626&ext=jpg"
            />
            <Card.Body>
              <Card.Title className="mt-3 font-weight-bold">
                Ethel Vanesa
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
                Harlan Mendsohn
              </Card.Title>
              <Card.Text className="text-primary">Neurologiest</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Card>
            <Card.Img
              variant="top"
              src="https://image.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg"
            />
            <Card.Body>
              <Card.Title className="mt-3 font-weight-bold">
                Dr. James Alison
              </Card.Title>
              <Card.Text className="text-primary">Neurologiest</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Doctors;
