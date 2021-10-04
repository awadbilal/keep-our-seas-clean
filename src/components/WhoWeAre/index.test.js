import React from "react";
import renderer from "react-test-renderer";
import WhoWeAre from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<WhoWeAre />).toJSON();
  expect(tree).toMatchSnapshot();
});
