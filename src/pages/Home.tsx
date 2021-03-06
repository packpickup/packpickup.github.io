import "./Home.scss";

import { FunctionComponent, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import vehicleTypes from "../data/vehicle-types.json";

export const Home: FunctionComponent = () => {
  useEffect(() => {
    document.title = "PackPickup.com";
  }, []);

  return (
    <div className="home">
      <Row>
        <Col xs="12" className="banner-wrapper">
          <div className="user">
            <span>Guest</span>
            <img src={process.env.PUBLIC_URL + "/avatar.svg"} alt="User" />
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
          <h1 className="title">Find Transportation Solutions!</h1>
        </Col>
      </Row>
      <Row>
        {vehicleTypes.map((vehicleType) => (
          <Col xs="6" key={vehicleType["vehicle-type-id"]} className="v-type">
            <Link
              className="v-link"
              to={`/search-results/?v-type=${vehicleType["vehicle-type-id"]}`}
              onClick={() => {
                window.gtag("event", "click", {
                  event_category: "Home page",
                  event_label: "vehicle-type-click",
                  value: `${vehicleType["vehicle-type-id"]}-${vehicleType.type}`,
                });
              }}
            >
              <img
                loading="lazy"
                src={`${process.env.PUBLIC_URL}/vehicle-types/${vehicleType["image-url"]}`}
                alt={vehicleType.type}
              />
            </Link>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <img
            loading="lazy"
            onClick={() => {
              window.alert("Work in progress...");
              window.gtag("event", "click", {
                event_category: "Home page",
                event_label: "see-more-click",
                value: "See more vehicle types",
              });
            }}
            className="see-more"
            src={`${process.env.PUBLIC_URL}/vehicle-types/see-more-vehicles.svg`}
            alt="See more"
          />
        </Col>
      </Row>
    </div>
  );
};
