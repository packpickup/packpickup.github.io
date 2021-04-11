import "./SearchResults.scss";

import { Fragment, FunctionComponent, useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { Rating } from "../components/Rating";
import drivers from "../data/drivers.json";
import vehicleTypes from "../data/vehicle-types.json";
import vehicles from "../data/vehicles.json";

export const SearchResults: FunctionComponent = () => {
  const { search } = useLocation();
  const vehicleTypeId = search.split("?")[1].split("=")[1];

  const vehiclesByType = useMemo(() => {
    const filteredVehicles = vehicles.filter(
      (vehicle) => vehicle["vehicle-type-id"] === vehicleTypeId
    );

    return filteredVehicles.map((filteredVehicle) => ({
      ...filteredVehicle,
      driver: drivers.find(
        (driver) => driver["vehicle-id"] === filteredVehicle["vehicle-id"]
      ),
    }));
  }, [vehicleTypeId]);

  const vehicleType = useMemo(() => {
    return vehicleTypes.find(
      (vehicleType) => vehicleType["vehicle-type-id"] === vehicleTypeId
    );
  }, [vehicleTypeId]);

  if (!vehicleType || vehiclesByType.length === 0) {
    return (
      <div className="no-results">
        No vehicles found. Please <Link to="/">click here</Link> to navigate to
        home page
      </div>
    );
  }

  return (
    <div className="search-results">
      <Row className="header">
        <Col xs="7" sm="8">
          <div className="user">
            <img src={process.env.PUBLIC_URL + "/avatar.svg"} alt="User" />
            <span>Guest</span>
          </div>
          <h1>{vehicleType.type}</h1>
        </Col>
        <Col xs="5" sm="4">
          <img
            className="v-type-img"
            src={`${process.env.PUBLIC_URL}/vehicle-types/${vehicleType["image-url"]}`}
            alt={vehicleType.type}
          />
        </Col>
      </Row>

      {vehiclesByType.map((vehicle) => {
        return (
          <Row key={vehicle["vehicle-id"]} className="result-item">
            <Col xs="4" sm="3">
              <img
                className="v-main-img"
                src={`${process.env.PUBLIC_URL}/vehicles/${vehicle["vehicle-id"]}/main.jpg`}
                alt={vehicle["vehicle-brand"]}
              />
            </Col>
            <Col xs="8" sm="6">
              <h4>
                {vehicle["vehicle-brand"]} - {vehicle["brand-model"]} -{" "}
                {vehicle["model-year"]}
              </h4>
              {vehicle.driver && (
                <>
                  <div>
                    <img
                      className="driver-name-avatar"
                      src={`${process.env.PUBLIC_URL}/green-avatar.svg`}
                      alt="Driver"
                    />{" "}
                    {vehicle.driver.name}
                  </div>
                  <div>Area: {vehicle.driver.area}</div>
                  <div>
                    {vehicle.driver.city}, {vehicle.driver.country}
                  </div>
                </>
              )}
            </Col>
            {vehicle.driver && (
              <>
                <Col xs="4" sm="1" className="spacer" />
                <Col xs="8" sm="3" className="driver-info">
                  <>
                    <div
                      className="driver-image"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/vehicles/${vehicle["vehicle-id"]}/driver.jpg)`,
                      }}
                    />
                    <span className="rating">
                      <Rating rating={Number(vehicle.driver["rating-stars"])} />
                    </span>
                  </>
                </Col>
              </>
            )}
          </Row>
        );
      })}
      <Row>
        <Link className="back-to-home-link" to="/">
          Main page
        </Link>
      </Row>
    </div>
  );
};
