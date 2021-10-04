import React from "react";
import renderer from "react-test-renderer";
import DonationFormPage from "./index";

it("renders correctly", () => {
  const tree = renderer.create(<DonationFormPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
