import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Footer from "../components/Footer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<Footer />", div);
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
