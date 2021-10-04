import React from "react";
import renderer from "react-test-renderer";
import TeamCard from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<TeamCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
