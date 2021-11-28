import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, description, image } = service;
  return (
    <Col md={4} className="single__service">
      <div className="single__area">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p className="px-3">{description}</p>
        <Link to={`/booking/${id}`}>
          <button className="btn btn-warning">Read More</button>
        </Link>
      </div>
    </Col>
  );
};

export default Service;
