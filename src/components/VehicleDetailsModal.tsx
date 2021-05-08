import "./VehicleDetailsModal.scss";

import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";

import drivers from "../data/drivers.json";
import vehicles from "../data/vehicles.json";
import { VehicleDetailCard } from "./VehicleDetailCard";

type Props = {
  selectedVehicle: typeof vehicles[0] & { driver: typeof drivers[0] };
  onHide: () => void;
};

export const VehicleDetailsModal: FunctionComponent<Props> = ({
  selectedVehicle,
  onHide,
}) => {
  return (
    <div className="vehicle-details">
      <Row>
        <Col xs="12" className="modal-close">
          <img
            title="Close"
            src={`${process.env.PUBLIC_URL}/close.svg`}
            alt="Close"
            onClick={onHide}
          />
        </Col>
      </Row>

      <VehicleDetailCard className="v-card" vehicle={selectedVehicle} />

      <Row className="comms">
        <Col xs="12">
          <a
            target="whatsapp"
            onClick={() => {
              window.ga(
                "send",
                "event",
                "x-driver-contacted",
                "x-click",
                selectedVehicle.driver.name
              );
              window.ga("send", {
                hitType: "event",
                eventCategory: "Driver contacted",
                eventAction: "click",
                eventLabel: "whatsapp",
                eventValue: `${selectedVehicle.driver["driver-id"]}-${selectedVehicle.driver.name}-${selectedVehicle.driver.mobile}`,
              });
            }}
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
            <span>WhatsApp</span>
          </a>
        </Col>
      </Row>

      <Row className="photos">
        <Col xs="12">
          <strong>Reference photos:</strong>
        </Col>
        <Col xs="12" sm="6">
          <img
            loading="lazy"
            alt="vehicle main"
            src={`${process.env.PUBLIC_URL}/vehicles/${selectedVehicle["vehicle-id"]}/main.jpg`}
          />
        </Col>
        <Col xs="12" sm="6">
          <img
            loading="lazy"
            alt="driver"
            src={`${process.env.PUBLIC_URL}/vehicles/${selectedVehicle["vehicle-id"]}/driver.jpg`}
          />
        </Col>
        {[...Array(selectedVehicle["number-of-pictures-ref"])].map((_, i) => (
          <Col xs="12" sm="6" key={i}>
            <img
              key={i}
              loading="lazy"
              alt="vehicle"
              src={`${process.env.PUBLIC_URL}/vehicles/${
                selectedVehicle["vehicle-id"]
              }/${i + 1}.jpg`}
            />
          </Col>
        ))}
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

const whatsAppMessage =
  "Are you available for packaging and transportation service?";
