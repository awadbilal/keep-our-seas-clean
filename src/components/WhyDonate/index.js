import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import whyDonateImage from "../../images/whyDonate.png";
import { useTranslation } from "react-i18next";
import "./index.css";

const WhyDonate = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="main pt-5 pb-5 fdb-block">
      <Row className="align-items-center">
        <Col sm={12} md={{ span: 4, offset: 2 }}>
          <h2 className="titles">{t("whyDonate.title")}</h2>
          <p className="mt-4">{t("aboutUsContent.title.paragraph")}</p>
          <Button className="donateButton" href="donate">
            {t("donate.button")}
          </Button>
        </Col>
        <Col sm={12} md={6}>
          <img className="whyDonate" src={whyDonateImage} alt="whyDonate" />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyDonate;
