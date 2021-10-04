import React from "react";
import renderer from "react-test-renderer";
import AboutUsContent from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<AboutUsContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
