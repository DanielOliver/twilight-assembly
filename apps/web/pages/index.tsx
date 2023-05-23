import dynamic from "next/dynamic";
import * as React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";

const DynamicMap = dynamic(() => import("../components/GalaxyMap"), {
  ssr: false,
});

export default function Web() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>Twilight Assembly</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <DynamicMap />
        </Row>
      </Container>
    </div>
  );
}
