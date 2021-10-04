import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../Context/AuthContext";
import { Row, Col, Form, Button } from "react-bootstrap";
import db from "../../firebaseConfig";
import "./styles.css";
import { useHistory } from "react-router";

const EditInfoForm = () => {
  const [t] = useTranslation();
  const { currentUser, signOut } = useAuth();
  const history = useHistory();

  const [editForm, setEditForm] = useState({
    name: "",
    surname: "",
    email: "",
    biography: "",
  });

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("EditInfo").add(editForm);
    setEditForm({
      name: "",
      surname: "",
      email: "",
      biography: "",
    });
  };

  const handleSignOut = () => {
    signOut();
    history.push("/login");
  };

  return (
    <Form className="edit-form">
      <Row className="mb-3 g-0">
        <Form.Group as={Col} className="me-2" controlId="formGridEmail">
          <Form.Label>{t("editForm.name")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("editFormPlaceholder.name")}
            onChange={handleChange}
            name="name"
            value={editForm.name}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>{t("editForm.surname")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("editFormPlaceholder.surname")}
            onChange={handleChange}
            name="surname"
            value={editForm.surname}
            required
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>{t("editForm.email")}</Form.Label>
        <Form.Control
          type="email"
          placeholder={
            currentUser ? currentUser.email : t("editFormPlaceholder.email")
          }
          onChange={handleChange}
          name="email"
          value={editForm.email}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{t("editForm.biography")}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={t("editFormPlaceholder.biography")}
          onChange={handleChange}
          name="biography"
          value={editForm.biography}
        />
        <div className="radiobuttons">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" for="inlineRadio1">
              {t("editForm.female")}
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio1">
              {t("editForm.male")}
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option3"
            />
            <label className="form-check-label" for="inlineRadio1">
              {t("editForm.other")}
            </label>
          </div>
        </div>
      </Form.Group>
      <div class="d-grid gap-2 col-6 mx-auto">
        <Button
          className="submitButton mx-auto"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          {t("editForm.submit")}
        </Button>
        <Button
          className="submitButton mx-auto"
          variant="danger"
          onClick={handleSignOut}
        >
          {t("editForm.logOut")}
        </Button>
      </div>
    </Form>
  );
};

export default EditInfoForm;
