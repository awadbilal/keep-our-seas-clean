import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";
import ContactForm from "../ContactForm";

const ContactUsForm = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="main pt-5 pb-5 fdb-block">
      <Row className="align-items-center">
        <Col className="px-4" sm={12} md={12} lg={{ span: 3, offset: 1 }}>
          <h2 className="title">{t("contact.getInTouch.title")}</h2>
          <p className="mt-4">{t("contact.getInTouch.paragraph")}</p>
        </Col>
        <Col className="px-4" sm={12} md={12} lg={7}>
          <Row sm={12} md={12}>
            <ContactForm />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsForm;
