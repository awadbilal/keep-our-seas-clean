import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";
import TeamCard from "../TeamCard";
import teamData from "../../teamData.json";

const ContactUsTeam = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="pt-5 pb-5 fdb-block">
      <Row className="align-items-center">
        <Col className="px-4" sm={12} md={12} lg={{ span: 3, offset: 1 }}>
          <h2 className="title">{t("contact.team.title")}</h2>
          <p className="mt-4">{t("contact.team.paragraph")}</p>
        </Col>
        <Col className="px-4" sm={12} md={12} lg={7}>
          <Row sm={12} md={12}>
            {teamData.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  image={member.image}
                  alt={member.alt}
                  linkedin={member.linkedin}
                  email={member.email}
                />
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsTeam;
