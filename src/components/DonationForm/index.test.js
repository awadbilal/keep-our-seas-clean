import React from "react";
import renderer from "react-test-renderer";
import DonationForm from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<DonationForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
