import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import whyDonateImage from "../../images/whyDonate.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./index.css";

const WhyDonate = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="main pt-5 pb-5 fdb-block">
      <Row className="align-items-center">
        <Col sm={12} md={{ span: 4, offset: 2 }}>
          <h2 className="titles">{t("whyDonate.title")}</h2>
          <p className="mt-4">{t("aboutUsContent.title.paragraph")}</p>
          <Link className="donateButton" to="/donate">
            {t("donate.button")}
          </Link>
        </Col>
        <Col sm={12} md={6}>
          <img className="whyDonate" src={whyDonateImage} alt="whyDonate" />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyDonate;
