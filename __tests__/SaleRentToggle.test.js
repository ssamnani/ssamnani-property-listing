import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SaleRentToggle from "../components/SaleRentToggle";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<SaleRentToggle />", div);
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer.create(<SaleRentToggle />).toJSON();
  expect(tree).toMatchSnapshot();
});
