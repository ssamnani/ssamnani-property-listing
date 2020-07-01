import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Header from "../components/Header";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<Header />", div);
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
