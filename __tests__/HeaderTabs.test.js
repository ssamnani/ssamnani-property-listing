import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import HeaderTabs from "../components/HeaderTabs";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<HeaderTabs />", div);
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer.create(<HeaderTabs />).toJSON();
  expect(tree).toMatchSnapshot();
});
