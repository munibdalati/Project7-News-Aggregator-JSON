import React from "react";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Header = () => {
  const currentDate = new Date().toLocaleDateString("ar-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    numberingSystem: "arab",
  });
  return (
    <div className="">
      <Row className="head p-3 px-4 ">
        <Col>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex gap-4">
              <h4>
                <Link to="/">
                  المحطة <span style={{ color: "#EF4747" }}>الإخبارية</span>
                </Link>
              </h4>
              <button className="header-sign">
                <Link to="/SignIn">تسجيل دخول </Link>
              </button>
              <button className="header-sign">
                <Link to="/SignUp">إنشاء حساب </Link>
              </button>
            </div>
            <div className="d-flex align-items-center gap-4">
              <Form className="header-search-form">
                <FormControl
                  type="text"
                  placeholder="ابحث هنا..."
                  className="text-light search-field"
                  style={{
                    borderRadius: "0",
                    border: "none",
                    backgroundColor: "#525D6C",
                  }}
                />
              </Form>
              <span>{currentDate}</span>
            </div>
          </div>
        </Col>
      </Row>

      {/* Second section */}
      <Row>
        <Navbar className="head-nav px-5" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto gap-4">
              <Form className="nav-search-form px-2 text-light">
                <FormControl
                  type="text"
                  placeholder="  ابحث هنا ..."
                  className="search-field"
                  style={{
                    borderRadius: "0",
                    border: "none",
                    backgroundColor: "##fff",
                    color: "white",
                  }}
                />
              </Form>
              <Nav.Link href="#section1" className=" text-light px-2 main-news">
                <Link to="/">
                  {" "}
                  <span style={{ color: "#EF4747" }}>الرئيسية </span>
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-light px-2">
                <Link to="/breaking"> عاجل</Link>
              </Nav.Link>
              <Nav.Link href="#section2" className="text-light px-2">
                <Link to="/world">العالم</Link>
              </Nav.Link>
              <Nav.Link href="#section3" className="text-light px-2">
                <Link to="/sport">رياضة</Link>
              </Nav.Link>
              <Nav.Link href="#section3" className="text-light px-2">
                <Link to="/economy">إقتصاد</Link>
              </Nav.Link>
              <Nav.Link href="#section3" className="text-light px-2">
                <Link to="/health">صحة</Link>
              </Nav.Link>
              <Nav.Link href="#section3" className="text-light px-2">
                <Link to="/">منوعات</Link>{" "}
              </Nav.Link>
              <Nav.Link href="#section3" className="text-light px-2">
                <Link to="/">البث المباشر</Link>
              </Nav.Link>
              <Nav.Link href="#section3" className="text-light px-2 ">
                <button className="nav-sign">
                  {" "}
                  <Link to="/SignIn">تسجيل دخول </Link>
                </button>
              </Nav.Link>
              <Nav.Link href="#section3" className="text-light px-2 ">
                <button className="nav-sign">
                  {" "}
                  <Link to="/SignUp"> إنشاء حساب </Link>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </div>
  );
};

export default Header;
