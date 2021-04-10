import "./Home.scss";

import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";

import vehicleTypes from "../data/vehicle-types.json";

export const Home: FunctionComponent = () => {
  return (
    <div className="home">
      <Row>
        <Col xs="12" className="banner-wrapper">
          <div className="country-selector">
            <img
              src={process.env.PUBLIC_URL + "/uae-flag.svg"}
              alt="UAE flag"
            />
            <span>UAE</span>
          </div>
          <div className="user">
            <span>Guest</span>
            <img src={process.env.PUBLIC_URL + "/avatar.svg"} alt="UAE flag" />
          </div>
          <img
            src={process.env.PUBLIC_URL + "/home-bg.jpg"}
            alt="traffic on road"
            className="banner"
          />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h1 className="title">Hire! Packing and Transportation services</h1>
        </Col>
      </Row>
      <Row>
        {vehicleTypes.map((vehicleType) => (
          <Col xs="6" key={vehicleType["vehicle-type-id"]} className="v-type">
            <img
              src={`${process.env.PUBLIC_URL}/vehicle-types/${vehicleType["image-url"]}`}
              alt={vehicleType.type}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <img
            onClick={() => window.alert("Work in progress...")}
            className="see-more"
            src={`${process.env.PUBLIC_URL}/vehicle-types/see-more-vehicles.svg`}
            alt="See more"
          />
        </Col>
      </Row>
    </div>
  );
};
