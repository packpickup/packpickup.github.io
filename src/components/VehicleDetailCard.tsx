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
      <Col xs="4" className="v-main-img">
        <img
          loading="lazy"
          src={`${process.env.PUBLIC_URL}/vehicles/${vehicle["vehicle-id"]}/${
            onClick ? "main" : "driver"
          }.jpg`}
          alt={vehicle["vehicle-brand"]}
        />
        <div className="mobile-only">
          <Rating rating={Number(vehicle.driver["rating-stars"])} />
        </div>
      </Col>
      <Col xs="8" className="v-info">
        <div className="rating desktop-only">
          <Rating rating={Number(vehicle.driver["rating-stars"])} />
        </div>
        <div>
          <strong>
            {vehicle["vehicle-brand"]} - {vehicle["brand-model"]} -{" "}
            {vehicle["model-year"]}
          </strong>
        </div>
        <div>
          {vehicle.driver && (
            <>
              <div>
                <img
                  className="driver-name-avatar-icon"
                  src={`${process.env.PUBLIC_URL}/green-avatar.svg`}
                  alt="Driver"
                />{" "}
                {vehicle.driver.name}
              </div>
              <div>
                <img
                  className="driver-areas-icon"
                  src={`${process.env.PUBLIC_URL}/map-point.svg`}
                  alt="Areas"
                />{" "}
                {vehicle.driver.area}, {vehicle.driver.city}
              </div>
            </>
          )}
        </div>
      </Col>
    </Row>
  );
};
