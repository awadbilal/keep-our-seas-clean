import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";

const AboutUsHeader = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="main pt-5 pb-5 fdb-block">
      <Row>
        <Col className="col-md-8 offset-md-2 text-center">
          <h1 className="title">{t("aboutUs.title")}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsHeader;
