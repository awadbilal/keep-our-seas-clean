import React from "react";
import renderer from "react-test-renderer";
import BlogPageContent from "./Index";

it("renders correctly", () => {
  const tree = renderer.create(<BlogPageContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
