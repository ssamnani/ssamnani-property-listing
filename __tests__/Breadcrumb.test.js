import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Breadcrumb from "../components/Breadcrumb";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<Breadcrumb />", div);
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer.create(<Breadcrumb />).toJSON();
  expect(tree).toMatchSnapshot();
});
