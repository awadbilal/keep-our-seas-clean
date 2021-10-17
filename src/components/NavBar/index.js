import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./style.css";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.png";

function NavBar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    if (i18n.language === "en") i18n.changeLanguage("tr");
    else i18n.changeLanguage("en");
  };

  return (
    <>
      <Navbar
        className="ps-2 pe-2 pb-2"
        collapseOnSelect
        expand="lg"
        variant="light"
        bg="transparent"
      >
        <Container>
          <Navbar.Brand
            expand="lg"
            fixed="top"
            className={i18n.language === "en" ? "col-1" : "col-1"}
          >
            <Link className="navLink" to="/">
              <img
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={i18n.language === "en" ? "col-8" : "col-9"}
          >
            <Nav className="m-auto pt-3 pb-3">
              <Nav.Link eventKey={1}>
                <Link className="navBarLinks m-4" to="/">
                  {t("home")}
                </Link>
              </Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link eventKey={2}>
                <Link className="navBarLinks m-4" to="/About">
                  {t("about")}
                </Link>
              </Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link eventKey={3}>
                <Link className="navBarLinks m-4" to="/Blog">
                  {t("blog")}
                </Link>
              </Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link eventKey={4}>
                <Link className="navBarLinks m-4" to="/Contact_us">
                  {t("contactUs")}
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <div>
                <Button id="lang-button" onClick={changeLanguage}>
                  {i18n.language === "en" ? "TR" : "EN"}
                </Button>
                <Link to="/donate">
                  <Button id="donateButton" href="../WhyDonate/index.js">
                    {t("donateButton")}
                  </Button>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
