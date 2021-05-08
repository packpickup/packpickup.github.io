import "./SearchResults.scss";

import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import ReactGA from "react-ga";
import { Link, useLocation } from "react-router-dom";

import { VehicleDetailCard } from "../components/VehicleDetailCard";
import { VehicleDetailsModal } from "../components/VehicleDetailsModal";
import drivers from "../data/drivers.json";
import vehicleTypes from "../data/vehicle-types.json";
import vehicles from "../data/vehicles.json";

export const SearchResults: FunctionComponent = () => {
  const { search } = useLocation();
  const vehicleTypeId = search.split("?")[1].split("=")[1];
  const [show, setShow] = useState(false);
  const [activeVehicle, setActiveVehicle] = useState<
    typeof vehicles[number] & { driver: typeof drivers[number] }
  >();

  const vehiclesByType = useMemo(() => {
    const filteredVehicles = vehicles.filter(
      (vehicle) => vehicle["vehicle-type-id"] === vehicleTypeId
    );

    return filteredVehicles.map((filteredVehicle) => ({
      ...filteredVehicle,
      driver:
        drivers.find(
          (driver) => driver["vehicle-id"] === filteredVehicle["vehicle-id"]
        ) || drivers[0],
    }));
  }, [vehicleTypeId]);

  const vehicleType = useMemo(() => {
    return (
      vehicleTypes.find(
        (vehicleType) => vehicleType["vehicle-type-id"] === vehicleTypeId
      ) || vehicleTypes[0]
    );
  }, [vehicleTypeId]);

  useEffect(() => {
    document.title = `${vehicleType.type} - PackPickup.com`;
  }, [vehicleType.type]);

  return (
    <div className="search-results">
      <Row className="header">
        <Col xs="7" sm="8">
          <div className="user">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "/avatar.svg"}
              alt="User"
            />
            <span>Guest</span>
          </div>
          <h1>{vehicleType.type}</h1>
        </Col>
        <Col xs="5" sm="4">
          <img
            loading="lazy"
            className="v-type-img"
            src={`${process.env.PUBLIC_URL}/vehicle-types/simple/${vehicleType["image-url"]}`}
            alt={vehicleType.type}
          />
        </Col>
      </Row>

      {vehiclesByType.length === 0 ? (
        <div>
          No vehicles found. Please <Link to="/">click here</Link> to navigate
          to home page
        </div>
      ) : (
        vehiclesByType.map((vehicle) => {
          return (
            <VehicleDetailCard
              key={vehicle["vehicle-id"]}
              vehicle={vehicle}
              onClick={() => {
                setActiveVehicle(vehicle);
                setShow(true);

                ReactGA.ga("send", {
                  hitType: "event",
                  eventCategory: "Results page",
                  eventAction: "vehicle-details-click",
                  eventLabel: `${vehicle["vehicle-id"]}-${vehicle.driver.mobile}`,
                });
              }}
            />
          );
        })
      )}

      <Modal
        show={show}
        animation={false}
        onHide={() => {
          setShow(false);
          setActiveVehicle(undefined);
        }}
        dialogClassName="custom-modal"
      >
        {activeVehicle && (
          <VehicleDetailsModal
            selectedVehicle={activeVehicle}
            onHide={() => setShow(false)}
          />
        )}
      </Modal>

      <Row>
        <Link className="back-to-home-link" to="/">
          Main page
        </Link>
      </Row>
    </div>
  );
};
