import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";

const DonateHeader = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="main pt-5 pb-5 fdb-block">
      <Row>
        <Col className="col-md-8 offset-md-2 text-center">
          <h1 className="title">{t("donate.title")}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateHeader;
