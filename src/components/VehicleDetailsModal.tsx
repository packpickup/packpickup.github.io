import "./VehicleDetailsModal.scss";

import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";

import drivers from "../data/drivers.json";
import vehicleTypes from "../data/vehicle-types.json";
import vehicles from "../data/vehicles.json";
import { VehicleDetailCard } from "./VehicleDetailCard";

type Props = {
  vehicleType: typeof vehicleTypes[0];
  selectedVehicle: typeof vehicles[0] & { driver: typeof drivers[0] };
  onHide: () => void;
};

export const VehicleDetailsModal: FunctionComponent<Props> = ({
  vehicleType,
  selectedVehicle,
  onHide,
}) => {
  return (
    <div className="vehicle-details">
      <Row>
        <Col xs="9" sm="10">
          <img
            className="v-type-img"
            src={`${process.env.PUBLIC_URL}/vehicle-types/simple/${vehicleType["image-url"]}`}
            alt={vehicleType.type}
          />
        </Col>
        <Col xs="3" sm="2">
          <img
            className="close-img"
            src={`${process.env.PUBLIC_URL}/close.svg`}
            alt="Close"
            onClick={onHide}
          />
        </Col>
      </Row>

      <VehicleDetailCard className="v-card" vehicle={selectedVehicle} />

      <Row>
        <Col className="working-times">
          <strong>Working hours:</strong>{" "}
          {selectedVehicle.driver["work-hours"].day &&
          selectedVehicle.driver["work-hours"].night ? (
            <strong>
              <img
                src={`${process.env.PUBLIC_URL}/time/24-hrs.png`}
                alt="24 hours"
              />
              24Hrs
            </strong>
          ) : selectedVehicle.driver["work-hours"].day ? (
            <strong>
              <img
                src={`${process.env.PUBLIC_URL}/time/day.png`}
                alt="day time"
              />
              Day
            </strong>
          ) : !selectedVehicle.driver["work-hours"].day &&
            !selectedVehicle.driver["work-hours"].night ? (
            <strong style={{ color: "red" }}>
              <img
                src={`${process.env.PUBLIC_URL}/time/closed.png`}
                alt="not available"
              />
              Sorry not available at the moment
            </strong>
          ) : (
            <strong>
              <img
                src={`${process.env.PUBLIC_URL}/time/night.png`}
                alt="not available"
              />
              Night
            </strong>
          )}
        </Col>
      </Row>

      <Row className="working-days">
        <Col xs="12">
          <strong>Working days:</strong>
        </Col>
        <Col xs="12" className="days">
          {days.map((day) => {
            return (
              <div className="day" key={day}>
                {(!selectedVehicle.driver["work-hours"].day &&
                  !selectedVehicle.driver["work-hours"].night) ||
                !selectedVehicle.driver["working-days"].includes(day) ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/days/no-${day}.svg`}
                    alt={day}
                  />
                ) : (
                  <img
                    src={`${process.env.PUBLIC_URL}/days/yes-${day}.svg`}
                    alt={day}
                  />
                )}
              </div>
            );
          })}
        </Col>
      </Row>

      <Row className="photos">
        <Col xs="12">
          <strong>Reference photos:</strong>
        </Col>
        <Col xs="12" sm="6">
          <img
            alt="vehicle main"
            src={`${process.env.PUBLIC_URL}/vehicles/${selectedVehicle["vehicle-id"]}/main.jpg`}
          />
        </Col>
        <Col xs="12" sm="6">
          <img
            alt="driver"
            src={`${process.env.PUBLIC_URL}/vehicles/${selectedVehicle["vehicle-id"]}/driver.jpg`}
          />
        </Col>
        {[...Array(selectedVehicle["number-of-pictures"])].map((_, i) => (
          <Col xs="12" sm="6" key={i}>
            <img
              key={i}
              alt="vehicle"
              src={`${process.env.PUBLIC_URL}/vehicles/${
                selectedVehicle["vehicle-id"]
              }/${i + 1}.jpg`}
            />
          </Col>
        ))}
      </Row>

      <Row className="comms">
        <Col xs="6" className="sms">
          <a href={`tel:${selectedVehicle.driver.mobile}`}>
            <img
              alt="Call"
              src={`${process.env.PUBLIC_URL}/comms/phone-call.png`}
            />
          </a>
        </Col>
        <Col xs="6" className="whatsapp">
          <a
            target="whatsapp"
            href={`https://wa.me/${selectedVehicle.driver.mobile}?text=Hello ${
              selectedVehicle.driver.name.split(" ")[0]
            },%0a${encodeURI(
              "Message from: https://packpickup.com"
            )} %0a${encodeURI(whatsAppMessage)}`}
          >
            <img
              alt="WhatsApp"
              src={`${process.env.PUBLIC_URL}/comms/whatsapp.png`}
            />
          </a>
        </Col>
      </Row>

      <Row>
        <button
          className="close"
          onClick={(e) => {
            e.preventDefault();
            onHide();
          }}
        >
          Close
        </button>
      </Row>
    </div>
  );
};

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const whatsAppMessage =
  "Are you available for packaging and transportation service?";
