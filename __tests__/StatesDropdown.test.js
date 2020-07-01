import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import StatesDropdown from "../components/StatesDropdown";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<StatesDropdown />", div);
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer.create(<StatesDropdown />).toJSON();
  expect(tree).toMatchSnapshot();
});
