import React from "react";
import renderer from "react-test-renderer";
import SingleCard from "./Index";

const data = {
  link: "https://www.wiseoceans.com/blog-plastic-pollution/",
  img: "https://images.unsplash.com/photo-1617953141905-b27fb1f17d88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG9jZWFuJTIwd2FzdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  title: "this is a blog title",
  authorImg: "https://avatars.githubusercontent.com/u/81809505?v=4",
  author: "Bilal Avvad",
  date: "January 4, 2020",
};

it("renders correctly", () => {
  const tree = renderer.create(<SingleCard blog={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
