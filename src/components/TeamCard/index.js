// import teamData from "../../teamData.json";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { EnvelopeFill, Linkedin } from "react-bootstrap-icons";
import "./index.css";

const TeamCard = ({ name, image, alt, linkedin, email }) => {
  return (
    <Col sm={12} md={6}>
      <Row className="align-items-center pt-4" sm={12} md={12}>
        <Col className="team-section-picture" sm={1} md={6} lg={4}>
          <img className="memberImg" src={image} alt={alt} />
        </Col>
        <Col className="team-section-content" sm={4} md={6} lg={8}>
          <h4>{name}</h4>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin
              className="contactIcons p-1"
              color="#383838"
              size={30}
              style={{ cursor: "pointer" }}
            />
          </a>
          <a href={email} target="_blank" rel="noopener noreferrer">
            <EnvelopeFill
              className="contactIcons p-1"
              color="#383838"
              size={34}
              style={{ cursor: "pointer" }}
            />
          </a>
        </Col>
      </Row>
    </Col>
  );
};
export default TeamCard;
