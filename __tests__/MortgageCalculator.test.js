import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import MortgageCalculator from "../components/MortgageCalculator";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render("<MortgageCalculator />", div);
});

// Snapshot Testing
it("matches snapshot", () => {
  const tree = renderer.create(<MortgageCalculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("should set initial states and render info correctly", () => {
  const { getByText, getByTestId } = render(<MortgageCalculator />);
  expect(getByTestId("monthly-amount")).toHaveTextContent("RM 1886");
  expect(getByTestId("loan-amount")).toHaveTextContent("450000");
  expect(getByTestId("property-price")).toHaveValue(500000);
  expect(getByTestId("down-payment")).toHaveValue(10);
  expect(getByTestId("interest-rate")).toHaveValue(3.6);
  expect(getByTestId("loan-years")).toHaveValue(35);
  expect(getByText("%")).toHaveClass("selected");
});

it("should calculate correct loan amount and monthly payment when input values change", () => {
  const { getByTestId } = render(<MortgageCalculator />);
  const inpPropertyPrice = getByTestId("property-price");
  const inpDownPayment = getByTestId("down-payment");
  const inpInterestRate = getByTestId("interest-rate");
  const inpLoanYears = getByTestId("loan-years");
  const spanMonthlyAmount = getByTestId("monthly-amount");
  const spanLoanAmount = getByTestId("loan-amount");

  fireEvent.change(inpPropertyPrice, { target: { value: 370000 } });
  fireEvent.change(inpDownPayment, { target: { value: 20 } });
  fireEvent.change(inpInterestRate, { target: { value: 4.2 } });
  fireEvent.change(inpLoanYears, { target: { value: 15 } });

  expect(spanMonthlyAmount).toHaveTextContent("RM 2219");
  expect(spanLoanAmount).toHaveTextContent("Loan Amount: RM 296000");
});

it("should render down-payment metric with % as selected by default", () => {
  const { getByText } = render(<MortgageCalculator />);
  const btnPercent = getByText("%");

  expect(btnPercent).toHaveClass("selected");
});

it("should convert down-payment to currency and percentage when clicked", () => {
  const { getByText } = render(<MortgageCalculator />);
  const btnCurrency = getByText("RM");
  const btnPercent = getByText("%");

  fireEvent.click(btnCurrency);
  expect(btnCurrency).toHaveClass("selected");

  fireEvent.click(btnPercent);
  expect(btnPercent).toHaveClass("selected");
});

it("should not change selected toggle when alread selected button is clicked", () => {
  const { getByText } = render(<MortgageCalculator />);
  const btnCurrency = getByText("RM");
  const btnPercent = getByText("%");

  // Click on already selected
  fireEvent.click(btnPercent);

  // Expected no change in selected classes
  expect(btnPercent).toHaveClass("selected");
  expect(btnCurrency).not.toHaveClass("selected");
});
