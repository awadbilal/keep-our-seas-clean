import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import "./style.css";
import { useTranslation } from "react-i18next";

const Index = ({ blog }) => {
  const { t } = useTranslation();

  return (
    <Col xs={12} md={6} lg={4} className="gridSystem">
      <Card className="blogCard">
        <a
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cardLink"
        >
          <Card.Img variant="top" src={blog.img} className="blogImg" />
          <Card.Header>
            <h1 className="cardTitle">{blog.title}</h1>
          </Card.Header>
        </a>
        <Card.Body>
          <Row className="justify-content-end">
            <Col xs={2} md={2}>
              <Image
                style={{ width: "50px", height: "50px" }}
                src={blog.authorImg}
                roundedCircle
              />
            </Col>
            <Col xs={10} md={9}>
              <Row>
                <Col xs={12} md={12}>
                  <span className="authorText">{t("homeWrittenBy")}</span>{" "}
                  <span className="authorName">{blog.author}</span>
                </Col>
                <Col xs={12} md={12}>
                  <span className="blogDate">{blog.date}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Index;
