import React, { useState, useEffect } from "react";
import { Input } from "antd";
import MortgageDownPaymentMetricToggle from "./MortgageDownPaymentMetricToggle";
import "../styles/MortgageCalculator.module.css";

function MortgageCalculator() {
  let inputStyleWide = {
    width: 200,
    backgroundColor: "rgb(243, 244, 246)",
  };
  let inputStyleSmall = {
    width: 120,
    backgroundColor: "rgb(243, 244, 246)",
    minWidth: "100px",
  };

  // States
  const [monthlyAmount, setMonthlyAmount] = useState(1886);
  const [loanAmount, setLoanAmount] = useState(450000);
  const [propertyPrice, setPropertyPrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(10);
  const [downPaymentMetric, setDownPaymentMetric] = useState("%");
  const [interestRate, setInterestRate] = useState(3.6);
  const [loanYears, setLoanYears] = useState(35);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [propertyPrice, downPayment, downPaymentMetric, interestRate, loanYears]);

  const calcLoanAmount = () => {
    return downPaymentMetric === "%"
      ? propertyPrice - (propertyPrice * downPayment) / 100
      : propertyPrice - downPayment;
  };

  const calculateMonthlyPayment = () => {
    let loanAmount = calcLoanAmount();
    setLoanAmount(loanAmount);
    const loanMonths = loanYears * 12;
    let i = interestRate / 12 / 100;
    let monthly =
      (loanAmount * i * Math.pow(1 + i, loanMonths)) /
      (Math.pow(1 + i, loanMonths) - 1);
    setMonthlyAmount(monthly.toFixed(0));
  };

  const handlePropertyPriceChange = (event) => {
    setPropertyPrice(event.target.value);
    calculateMonthlyPayment();
  };

  const handleDownPaymentChange = (event) => {
    setDownPayment(event.target.value);
    calculateMonthlyPayment();
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
    calculateMonthlyPayment();
  };

  const handleLoanYearsChange = (event) => {
    setLoanYears(event.target.value);
    calculateMonthlyPayment();
  };

  const handleMetricChange = (val) => {
    if (val === downPaymentMetric) return;
    setDownPaymentMetric(val);
    val === "%"
      ? setDownPayment((downPayment / propertyPrice) * 100)
      : setDownPayment((downPayment * propertyPrice) / 100);
  };

  return (
    <div className="moCalculator">
      <div className="mortgageTitleBar">
        <span className="morgCalcTitle">Mortgage Calculator</span>
        <span className="companyLogoWrap">
          <img src="./assets/images/iproperty-logo-black.png" />
        </span>
      </div>
      <div className="moCalcBody">
        <div className="moCalcLeft">
          <div className="monthlyAmount">
            <span data-testid="monthly-amount">RM {monthlyAmount}</span>
            <span className="pm">p/m</span>
          </div>
          <div className="loanAmount">
            <span data-testid="loan-amount">Loan Amount: RM {loanAmount}</span>
          </div>
        </div>
        <div className="moCalcRight">
          <div className="moInputWrap">
            <div>
              <div className="moInpLabel">Property Price (RM)</div>
              <Input
                type="number"
                style={inputStyleWide}
                value={propertyPrice}
                onChange={handlePropertyPriceChange}
                data-testid="property-price"
              />
            </div>
            <div>
              <div className="moInpLabel">Down Payment</div>
              <div className="downPaymentInputsWrapper">
                <Input
                  type="number"
                  style={inputStyleSmall}
                  value={downPayment}
                  onChange={handleDownPaymentChange}
                  data-testid="down-payment"
                />
                <MortgageDownPaymentMetricToggle
                  metric={downPaymentMetric}
                  onChangeMetric={handleMetricChange}
                  data-testid="down-payment-metric"
                />
              </div>
            </div>
          </div>
          <div className="moInputWrap">
            <div>
              <div className="moInpLabel">Interest Rate (%)</div>
              <Input
                type="number"
                style={inputStyleWide}
                value={interestRate}
                onChange={handleInterestRateChange}
                data-testid="interest-rate"
              />
            </div>
            <div>
              <div className="moInpLabel">Loan term (Years)</div>
              <Input
                type="number"
                style={inputStyleWide}
                value={loanYears}
                onChange={handleLoanYearsChange}
                data-testid="loan-years"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="disclaimerWrap">
        <span className="disclaimerText">Please read the disclaimer &gt;</span>
      </div>
    </div>
  );
}

export default MortgageCalculator;
