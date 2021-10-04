import React from "react";
import renderer from "react-test-renderer";
import BlogPageHeader from "./Index";

it("renders correctly", () => {
  const tree = renderer.create(<BlogPageHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
