import React from "react";
import renderer from "react-test-renderer";
import Blog from "./Index";

it("renders correctly", () => {
  const tree = renderer.create(<Blog />).toJSON();
  expect(tree).toMatchSnapshot();
});
