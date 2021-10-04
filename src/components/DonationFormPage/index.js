import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import DonationForm from "../DonationForm";

const DonationFormPage = () => {
  return (
    <Container className="pt-5 pb-5 fdb-block">
      <Row className="align-items-center justify-content-center">
        <Col className="px-4" sm={12} md={12} lg={8}>
          <DonationForm />
        </Col>
      </Row>
    </Container>
  );
};

export default DonationFormPage;
