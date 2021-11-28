import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Service from "../Service/Service";

const Services = () => {
  const { location } = useHistory();

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./fakeData/Data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container>
      <div id="services">
        <h2 className="text-primary mt-5 mb-5 text-center">Our services</h2>
        <div className="service-container">
          <Row className="gy-4">
            {/* checking wheather it's home page or services page to show total service. */}
            {location.pathname === "/"
              ? services
                  ?.slice(0, 6)
                  .map((service) => (
                    <Service key={service.id} service={service}></Service>
                  ))
              : services.map((service) => (
                  <Service key={service.id} service={service}></Service>
                ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Services;
