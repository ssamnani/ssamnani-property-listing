import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SearchBox from "../components/SearchBox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<SearchBox />", div);
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer.create(<SearchBox />).toJSON();
  expect(tree).toMatchSnapshot();
});
