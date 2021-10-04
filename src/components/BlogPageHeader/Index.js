import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";

function Index() {
  const { t } = useTranslation();

  return (
    <Container fluid className="main pt-5 pb-5 fdb-block">
      <Row>
        <Col className="col-md-8 offset-md-2 text-center">
          <h1 className="title">{t("blogHeader")}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
