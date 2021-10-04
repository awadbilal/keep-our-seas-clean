import React from "react";
import { Container } from "react-bootstrap";
import BlogPageHeader from "../../components/BlogPageHeader/Index";
import BlogPageContent from "../../components/BlogPageContent/Index";

function Index() {
  return (
    <>
      <BlogPageHeader />
      <Container className="pt-5 pb-3">
        <BlogPageContent />
      </Container>
    </>
  );
}

export default Index;
