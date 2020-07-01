import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Pagination from "../components/Pagination";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<Pagination />", div);
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer
    .create(<Pagination pageStart="1" pageEnd="20" totalRecords="43543" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
