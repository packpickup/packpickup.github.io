import "./Home.css";

import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";

import vehicleTypes from "../data/vehicle-types.json";

export const Home: FunctionComponent = () => {
  return (
    <>
      <Row>
        <Col xs="12">
          <img
            src={process.env.PUBLIC_URL + "/home-bg.jpg"}
            alt="traffic on road"
            style={{
              width: "100%",
            }}
          />
        </Col>
      </Row>

      {/* <Link to="/detail">Go to Detail</Link> */}
      <Row>
        <Col xs="12">
          <h1 className="home-h1">Hire! Packing and Transportation services</h1>
        </Col>
      </Row>
      <Row>
        {vehicleTypes.map((vehicleType) => (
          <Col xs="6" key={vehicleType["vehicle-type-id"]}>
            {vehicleType.type}
          </Col>
        ))}
      </Row>
    </>
  );
};
