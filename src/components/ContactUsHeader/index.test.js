import React from "react";
import renderer from "react-test-renderer";
import ContactUsHeader from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<ContactUsHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
