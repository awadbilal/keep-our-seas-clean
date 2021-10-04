import React from "react";
import renderer from "react-test-renderer";
import ContactUsTeam from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<ContactUsTeam />).toJSON();
  expect(tree).toMatchSnapshot();
});
