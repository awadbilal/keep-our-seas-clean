import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";

const WhoWeAre = () => {
  const { t } = useTranslation();

  return (
    <Container className="mt-5 mb-5">
      <Row className="whoWeAre">
        <Col className="col-md-8 offset-md-2 text-center">
          <h2 className="titles">{t("whoWeAre.title")}</h2>
          <p className="mt-4">{t("contact.team.paragraph")}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhoWeAre;
