import React from "react";
import Hero from "../component/Hero";
import Story from "../component/Story";
import AddsBanner from "../component/AddsBanner";
import Header from "../component/Header";
import { Row, Col, Container } from "react-bootstrap";
import Aside from "../component/Aside";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Hero />
        </Row>
        <Row>
          <Col lg={3}>
            <Aside />
          </Col>
          <Col lg={9}>
            <Story />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
