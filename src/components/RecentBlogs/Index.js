import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import BlogCards from "../BlogCards/Index";
import db from "../../firebaseConfig";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [blogsArr, setBlogsArr] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedData = [];
      const querySnapshot = await db
        .collection(i18n.language === "en" ? "blogs" : "blogsTR")
        .get();
      querySnapshot.forEach((doc) =>
        fetchedData.push({ id: doc.id, ...doc.data() })
      );
      setBlogsArr(fetchedData.slice(0, 3));
    };
    fetchBlogs();
    // eslint-disable-next-line
  }, i18n.language);

  return (
    <div className="homePage">
      <Container>
        <div className="recentBlogsContainer">
          <Row>
            <h2 className="recentBlogs">{t("homeRecentBlogs")}</h2>
          </Row>
          <BlogCards blogsArr={blogsArr} />
          <div>
            <Link to="/Blog" className="blogLink">
              <button className="blogsButton">{t("homeCheckOthers")}</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
