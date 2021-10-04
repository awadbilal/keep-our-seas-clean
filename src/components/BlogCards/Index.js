import React from "react";
import { Row } from "react-bootstrap";
import SingleBlogCard from "../SingleCard/Index";

const Index = ({ blogsArr }) => {
  return (
    <Row>
      {blogsArr.map((blogData) => (
        <SingleBlogCard key={blogData.id} blog={blogData} />
      ))}
    </Row>
  );
};

export default Index;
