import React, { useRef } from "react";
import "./style.css";
import { Form, Button, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";
const Login = () => {
  const { t } = useTranslation();

  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
    history.push("/");
  }

  return (
    <div className="mainLogin" style={{ minHeight: "84.6vh" }}>
      <Card className="cardLogin">
        <Card.Body className="cardBody">
          <div className="backgroundBody">
            <h2 className="headerElement">{t("login.text")}</h2>

            <Form className="formMain">
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="emailInput"
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label className="passwordText">
                  {t("password")}
                </Form.Label>
                <Form.Control
                  className="passwordInput"
                  type="password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <div className="aLabel">
                <input
                  className="inputElement"
                  type="checkbox"
                  value="Remember me"
                  id="RememberMe"
                ></input>
                <label className="labelElement" for="Remember me">
                  {t("remember")}
                </label>
                <p className="forgotPassword">{t("forgot.password")}</p>
              </div>
              <Form.Group className="loginGroup">
                <Button
                  onClick={handleSubmit}
                  className="loginButton"
                  type="submit"
                >
                  {t("login.button")}
                </Button>
              </Form.Group>
              <Form.Group className="googleGroup">
                <Button className="googleButton" type="submit">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/197a/7e4d/9af128e66ac7d6d0e573cad6385214d3?Expires=1631491200&Signature=Sael1bfQ9pc9uAQHsuv9oQw4-KqR5-XTAIxWzq9c72wzC3w3mU6V~avEYp3LKf7eBDItmDyWrkmdPRzGGers9F~qfSvD80-hc30847Yzg8lodMsn36uE-EFunFnXlRvMwDoFLupx8FGKdwBQ27rGtIAuTclFJni6YaW2DgUcOmmvC2PffwqE0xEgQtWe9MCp2aaMFPKKKV6iKpiPbbD~LbMoyGKbwW4VzyBuI9tMUcjW-2sSdpBkqITTqkNMKufHJgLRryUXz9uiAd7C9S1B~2BCn9UBhQOav1O2IU6Ueexz73NIRGoYZedLMBNr9YiPud44yU2poslsE34shD4VlA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    className="googleIcon"
                    alt="googleIcon"
                  />
                  {t("google")}
                </Button>
              </Form.Group>
              <Form.Group className="facebookGroup">
                <Button className="facebookButton" type="submit">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6YdxJ2jRzuriP3ZODKRVJ687zvL7pbGSVQ&usqp=CAU"
                    className="facebookIcon"
                    alt="facebookIcon"
                  />
                  {t("facebook")}
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
