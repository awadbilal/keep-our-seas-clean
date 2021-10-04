import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Form, Button } from "react-bootstrap";
import db from "../../firebaseConfig";

const ContactForm = () => {
  const [t] = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contactUs").add(formData);
    setFormData({
      name: "",
      surname: "",
      email: "",
      message: "",
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
            value={formData.name}
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
            value={formData.surname}
            required
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>{t("form.email")}</Form.Label>
        <Form.Control
          type="email"
          placeholder={t("formPlaceholder.email")}
          onChange={handleChange}
          name="email"
          value={formData.email}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{t("form.message")}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={t("formPlaceholder.message")}
          onChange={handleChange}
          name="message"
          value={formData.message}
          required
        />
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

export default ContactForm;
