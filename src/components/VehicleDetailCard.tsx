import "./VehicleDetailCard.scss";

import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";

import { Rating } from "../components/Rating";
import drivers from "../data/drivers.json";
import vehicles from "../data/vehicles.json";

type Vehicle = typeof vehicles[0] & { driver: typeof drivers[0] };

type Props = {
  vehicle: Vehicle;
  onClick?: () => void;
  className?: string;
};

export const VehicleDetailCard: FunctionComponent<Props> = ({
  vehicle,
  onClick,
  className = "",
}) => {
  return (
    <Row
      className={`result-item ${className} ${onClick ? "item-clickable" : ""}`}
      onClick={onClick}
    >
      <Col xs="4" sm="3" className="v-main-img">
        <img
          src={`${process.env.PUBLIC_URL}/vehicles/${vehicle["vehicle-id"]}/main.jpg`}
          alt={vehicle["vehicle-brand"]}
        />
      </Col>
      <Col xs="8" sm="6">
        <strong>
          {vehicle["vehicle-brand"]} - {vehicle["brand-model"]} -{" "}
          {vehicle["model-year"]}
        </strong>
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
};
