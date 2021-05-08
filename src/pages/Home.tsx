import "./Home.scss";

import { FunctionComponent, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ReactGA from "react-ga";
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
          <h1 className="title">Hire! Transportation services</h1>
        </Col>
      </Row>
      <Row>
        {vehicleTypes.map((vehicleType) => (
          <Col xs="6" key={vehicleType["vehicle-type-id"]} className="v-type">
            <Link
              className="v-link"
              to={`/search-results/?v-type=${vehicleType["vehicle-type-id"]}`}
              onClick={() => {
                console.log("LOG vehicle type clicked");
                ReactGA.ga("send", {
                  hitType: "event",
                  eventCategory: "Home page",
                  eventAction: "vehicle-type-click",
                  eventLabel: `${vehicleType["vehicle-type-id"]}-${vehicleType.type}`,
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
              ReactGA.ga("send", {
                hitType: "event",
                eventCategory: "Home page",
                eventAction: "click",
                eventLabel: "See more vehicle types",
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
