import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Calendar from "./Calender";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";
import "../assets/index.css";
import { useState, useEffect } from "react";
const newsAgencies = [
  {
    name: "وكالة عمون الإخبارية",
    image: process.env.PUBLIC_URL + "/images/al-rai-jordan.jpg",
  },
  {
    name: "وكالة الأنباء ",
    image: process.env.PUBLIC_URL + "/images/alanbaa.png",
  },
  {
    name: " جريدة الغد ",
    image: process.env.PUBLIC_URL + "/images/alghad.png",
  },
  {
    name: " التلفزيون الأردني  ",
    image: process.env.PUBLIC_URL + "/images/alordoni.jpg",
  },
  {
    name: "قناة رؤيا   ",
    image: process.env.PUBLIC_URL + "/images/roya.svg",
  },
  {
    name: "  وكالة عمون الإخبارية",
    image: process.env.PUBLIC_URL + "/images/ammon.png",
  },

  {
    name: " خبرني ",
    image: process.env.PUBLIC_URL + "/images/khaberni.jpg",
  },
  {
    name: " صحيفة الدستور",
    image: process.env.PUBLIC_URL + "/images/dostor.jpg",
  },
  {
    name: " بلكي",
    image: process.env.PUBLIC_URL + "/images/balki.jpg",
  },
];

const Aside = () => {
  const [isViewportWideEnough, setIsViewportWideEnough] = useState(
    window.innerWidth > 992
  );

  useEffect(() => {
    const handleResize = () => {
      setIsViewportWideEnough(window.innerWidth > 992);
    };

    // Add debounced resize event listener
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 200); // Adjust the debounce delay as needed
    };

    window.addEventListener("resize", debouncedResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <>
      {isViewportWideEnough && (
        <Container className="aside-container">
          <Row className="aside-news-agencies d-flex gap-4">
            {newsAgencies.map((newsAgency) => (
              <img src={newsAgency.image} alt={newsAgency.name} />
            ))}
            <p className="text-start">المزيد</p>
          </Row>
          <Row className="text-center d-flex mb-4">
            <Col className="p-2" style={{ background: "#ff0000" }}>
              <i
                class="fa-brands fa-google py-2"
                style={{ color: "white" }}
              ></i>
            </Col>
            <Col className="p-2" style={{ background: "#016cfe" }}>
              <i
                class="fa-brands fa-facebook-f py-2"
                style={{ color: "white" }}
              ></i>
            </Col>
            <Col className="p-2" style={{ background: "#4cd4f2" }}>
              <i
                class="fa-brands fa-twitter py-2"
                style={{ color: "white" }}
              ></i>
            </Col>
            <Col className="p-2" style={{ background: "orange" }}>
              <i class="fa-solid fa-rss py-2" style={{ color: "white" }}></i>
            </Col>
          </Row>
          <Weather />
          <Calendar />
        </Container>
      )}
    </>
  );
};

export default Aside;
