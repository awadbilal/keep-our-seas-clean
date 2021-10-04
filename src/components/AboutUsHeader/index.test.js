import React from "react";
import renderer from "react-test-renderer";
import AboutUsHeader from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<AboutUsHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
