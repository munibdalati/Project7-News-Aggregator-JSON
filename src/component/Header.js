import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/index.css";


const Header = () => {
  return (
    <div>
      {/* First navbar begining */}
      <Navbar expand="lg" >
        <Container fluid className="navbar"  style={{  paddingRight:"5%", paddingLeft:"5%" }}>
          <div>
            <Navbar.Brand
              href="#"
              style={{ color: "#fff", marginRight: "5%", marginLeft: "5px" }}
            >
              المحطة
            </Navbar.Brand>
            <Navbar.Brand href="#" style={{ color: "red", marginLeft: "2%" }}>
              الإخبارية
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navFlex">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", marginRight:"2%" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ color: "#fff" }}>
                تسجيل دخول
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "#fff" }}>
                إنشاء حساب
              </Nav.Link>
            </Nav>
            <Form className="d-flex nav-searchBar ">
              <Form.Control
                type="search"
                placeholder= " ابحث هنا"
                className="me-2 nav-searchBarPlaceholder border-0 rounded-0 "
                aria-label="Search"
                style={{ '::placeholder': { color: '#fff' } }}
              />
            </Form>
            <Navbar.Brand href="#" style={{ color: "#fff" }}>
              الأحد، 18 يونيو/ حزيران 2023
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* First Navbar ending */}

      {/* Second Navbar begining */}
      <Navbar expand="lg" className="Heading-secondNav">
        <Container fluid style={{ paddingRight:"5%", paddingLeft:"5%" }}>
          <Navbar.Brand href="#home" style={{ color: "red" }}>
            الرئيسية
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Heading-secondNavLink">
              <Nav.Link style={{ color: "#fff" }}>|</Nav.Link>
              <Nav.Link style={{ color: "#fff" }}>عاجل</Nav.Link>
              <Nav.Link style={{ color: "#fff" }}>العالم</Nav.Link>
              <Nav.Link style={{ color: "#fff" }}>رياضة</Nav.Link>
              <Nav.Link style={{ color: "#fff" }}>اقتصاد</Nav.Link>
              <Nav.Link style={{ color: "#fff" }}>صحة</Nav.Link>
              <Nav.Link style={{ color: "#fff" }}>منوعات</Nav.Link>
              <Nav.Link style={{ color: "#fff" }}>البث المباشر</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Second Navbar ending */}
    </div>
  );
};

export default Header;
