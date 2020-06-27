import React from "react";
import "./Header.module.css";
import HeaderTabs from "./HeaderTabs";
import Breadcrumb from "./Breadcrumb";

function Header() {
  return (
    <div>
      <div className="appHeader">
        <div className="navWrapper">
          <img
            src="/assets/images/iproperty-logo.png"
            className="logo"
            alt="iproperty-logo"
          />
          <div>
            <HeaderTabs />
          </div>
        </div>
        <Breadcrumb />
      </div>
    </div>
  );
}

export default Header;
