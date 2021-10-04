import React from "react";
import renderer from "react-test-renderer";
import WhyDonate from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<WhyDonate />).toJSON();
  expect(tree).toMatchSnapshot();
});
