import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SearchBar from "../components/SearchBar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<SearchBar />", div);
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer.create(<SearchBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
