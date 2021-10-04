import React from "react";
import renderer from "react-test-renderer";
import DonateHeader from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<DonateHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
