import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import db from "../../firebaseConfig";

const DonationForm = () => {
  const [t] = useTranslation();

  const [donationFormData, setDonationFormData] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    amount: "",
  });

  const handleChange = (e) => {
    setDonationFormData({
      ...donationFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("donation").add(donationFormData);
    setDonationFormData({
      name: "",
      surname: "",
      email: "",
      number: "",
      amount: "",
    });
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>{t("form.name")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("formPlaceholder.name")}
            onChange={handleChange}
            name="name"
            value={donationFormData.name}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>{t("form.surname")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("formPlaceholder.surname")}
            onChange={handleChange}
            name="surname"
            value={donationFormData.surname}
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>{t("form.email")}</Form.Label>
          <Form.Control
            type="email"
            placeholder={t("formPlaceholder.email")}
            onChange={handleChange}
            name="email"
            value={donationFormData.email}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridNumber">
          <Form.Label>{t("form.number")}</Form.Label>
          <Form.Control
            type="phone"
            placeholder={t("formPlaceholder.number")}
            onChange={handleChange}
            name="number"
            value={donationFormData.number}
            required
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>Amount</InputGroup.Text>
          <FormControl
            aria-label="Dollar amount"
            type="number"
            onChange={handleChange}
            name="amount"
            value={donationFormData.amount}
            required="true"
          />
        </InputGroup>
      </Form.Group>
      <Button
        className="submitButton"
        variant="primary"
        type="submit"
        onClick={handleSubmit}
      >
        {t("form.submit")}
      </Button>
    </Form>
  );
};

export default DonationForm;
