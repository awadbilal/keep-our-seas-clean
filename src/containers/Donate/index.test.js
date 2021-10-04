import React from "react";
import renderer from "react-test-renderer";
import Donate from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<Donate />).toJSON();
  expect(tree).toMatchSnapshot();
});
