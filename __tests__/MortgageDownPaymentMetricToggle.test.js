import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import MortgageDownPaymentMetricToggle from "../components/MortgageDownPaymentMetricToggle";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  const fnOnChangeMetric = jest.fn();
  const div = document.createElement("div");
  ReactDOM.render(
    <MortgageDownPaymentMetricToggle
      metric="%"
      onChangeMetric={fnOnChangeMetric}
    />,
    div
  );
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer.create(<MortgageDownPaymentMetricToggle />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("should display only '%' button with selected class when prop->metric is '%'", () => {
  const { getByText } = render(<MortgageDownPaymentMetricToggle metric="%" />);
  expect(getByText("%")).toHaveClass("selected");
  expect(getByText("RM")).not.toHaveClass("selected");
});

it("should display only 'RM' button with selected class when prop->metric is 'RM'", () => {
  const { getByText } = render(<MortgageDownPaymentMetricToggle metric="RM" />);
  expect(getByText("RM")).toHaveClass("selected");
  expect(getByText("%")).not.toHaveClass("selected");
});

// Corner case
it("should not display 'RM' and '%' button with selected class when prop->metric is other than RM / %", () => {
  const { getByText } = render(
    <MortgageDownPaymentMetricToggle metric="USD" />
  );
  expect(getByText("RM")).not.toHaveClass("selected");
  expect(getByText("%")).not.toHaveClass("selected");
});

it("shoud call fn onChangeMetric() with 'RM' when 'RM' button clicked", () => {
  const fnOnChangeMetric = jest.fn();
  const { getByText } = render(
    <MortgageDownPaymentMetricToggle
      metric="RM"
      onChangeMetric={fnOnChangeMetric}
    />
  );
  const btnCurrency = getByText("RM");

  fireEvent.click(btnCurrency);

  expect(fnOnChangeMetric).toHaveBeenCalledTimes(1);
  expect(fnOnChangeMetric).toHaveBeenCalledWith("RM");
});

it("shoud call fn onChangeMetric() with '%' when '%' button clicked", () => {
  const fnOnChangeMetric = jest.fn();
  const { getByText } = render(
    <MortgageDownPaymentMetricToggle
      metric="%"
      onChangeMetric={fnOnChangeMetric}
    />
  );
  const btnPercent = getByText("%");

  fireEvent.click(btnPercent);

  expect(fnOnChangeMetric).toHaveBeenCalledTimes(1);
  expect(fnOnChangeMetric).toHaveBeenCalledWith("%");
});
