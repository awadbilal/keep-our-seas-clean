import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import vision from "../../images/vision.png";
import aboutimage from "../../images/aboutimage.png";
import { useTranslation } from "react-i18next";
import "./index.css";

const AboutUsContent = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="maincontent pt-5 pb-5 fdb-block">
      <Row>
        <Col mt-5 sm={12} md={{ span: 4, offset: 2 }}>
          <h2 className="title-about">{t("aboutUsContent.title")}</h2>
          <p className="aboutcontent  mt-4">
            {t("aboutUsContent.title.paragraph")}
          </p>
          <Row>
            <Col className="mt-5">
              <img
                className="d-flex justify-content-between"
                src={vision}
                alt={t("alt")}
              />
              <h5 className="subTitle">{t("aboutUsContent.vission")}</h5>
              <p>{t("aboutUsContent.vissionText")}</p>
            </Col>
            <Col className="mt-5">
              <img
                className="d-flex justify-content-between"
                src={vision}
                alt={t("alt")}
              />
              <h5 className="subTitle">{t("aboutUsContent.mission")}</h5>
              <p>{t("aboutUsContent.missionText")}</p>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={6}>
          <img className="groupImage" src={aboutimage} alt={t("alt")} />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsContent;
