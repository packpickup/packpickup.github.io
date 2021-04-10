import "./Header.scss";

import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header: FunctionComponent = () => {
  return (
    <Row className="header">
      <Col xs="12" style={{ textAlign: "center", marginTop: 12 }}>
        <Link to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt="Pack pickup"
          />
        </Link>
      </Col>
    </Row>
  );
};
