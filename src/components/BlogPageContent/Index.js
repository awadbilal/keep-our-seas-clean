import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Row } from "react-bootstrap";
import db from "../../firebaseConfig";
import BlogCard from "../BlogCards/Index";
import BlogPageCard from "../BlogPageCards/Index";

const Index = () => {
  const { i18n } = useTranslation();
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedData = [];
      const querySnapshot = await db
        .collection(i18n.language === "en" ? "blogs" : "blogsTR")
        .get();
      querySnapshot.forEach((doc) =>
        fetchedData.push({ id: doc.id, ...doc.data() })
      );
      setBlogsData(fetchedData);
    };
    fetchBlogs();
    // eslint-disable-next-line
  }, i18n.language);

  return (
    <>
      <BlogCard blogsArr={blogsData.slice(0, 3)} />
      <Row className="justify-content-center">
        {blogsData.slice(3, blogsData.length).map((blog) => (
          <BlogPageCard blog={blog} />
        ))}
      </Row>
    </>
  );
};

export default Index;
