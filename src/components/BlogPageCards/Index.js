import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Card } from "react-bootstrap";
import "./style.css";

const Index = ({ blog }) => {
  const { t } = useTranslation();

  return (
    <Col xs={12} md={6} lg={4} className="gridSystem" key={blog.id}>
      <Card className="blogCardPage">
        <a
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cardLink"
        >
          <Card.Header>
            <h1 className="cardBlogTitle">{blog.title}</h1>
          </Card.Header>
        </a>
        <Card.Body>
          <Row style={{ textAlign: "center" }}>
            <div>
              <span className="blogAuthorText">{t("homeWrittenBy")}</span>{" "}
              <span className="blogAuthorName">{blog.author}</span>
            </div>
            <span className="blogCardDate">{blog.date}</span>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Index;
