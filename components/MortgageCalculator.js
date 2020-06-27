import React from "react";
import styles from "../styles/MortgageCalculator.module.css";
import { Input } from "antd";

function MortgageCalculator() {
  let inputStyleWide = {
    width: 200,
    backgroundColor: "rgb(243, 244, 246)",
  };
  let inputStyleSmall = {
    width: 120,
    backgroundColor: "rgb(243, 244, 246)",
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
            <span>RM 1886</span>
            <span className="pm">p/m</span>
          </div>
          <div className="loanAmount">
            <span>Loan Amount: RM 450,000</span>
          </div>
        </div>
        <div className="moCalcRight">
          <div className="moInputWrap">
            <div>
              <div className="moInpLabel">Property Price (RM)</div>
              <Input style={inputStyleWide} />
            </div>
            <div>
              <div className="moInpLabel">Down Payment</div>
              <Input style={inputStyleSmall} />
            </div>
          </div>
          <div className="moInputWrap">
            <div>
              <div className="moInpLabel">Interest Rate (%)</div>
              <Input style={inputStyleWide} />
            </div>
            <div>
              <div className="moInpLabel">Loan term (Years)</div>
              <Input style={inputStyleWide} />
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
