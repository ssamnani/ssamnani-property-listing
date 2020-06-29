import React from "react";
import "../styles/Breadcrumb.module.css";

function Breadcrumb() {
  return (
    <div className="breadcrumbWrapper">
      <ol>
        <li>Home</li>
        <li>Sale</li>
        <li>All Residential</li>
      </ol>
    </div>
  );
}

export default Breadcrumb;
