import React, { useState } from "react";
import "../styles/MortgageDownPaymentMetricToggle.module.css";

function MortgageDownPaymentMetricToggle(props) {
  return (
    <>
      <div className="downPaymentToggle">
        <button
          className={props.metric === "RM" ? "selected" : ""}
          onClick={() => props.onChangeMetric("RM")}
        >
          RM
        </button>
        <button
          className={props.metric === "%" ? "selected" : ""}
          onClick={() => props.onChangeMetric("%")}
        >
          %
        </button>
      </div>
    </>
  );
}

export default MortgageDownPaymentMetricToggle;
