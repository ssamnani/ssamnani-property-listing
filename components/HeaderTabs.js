import React from "react";
import "../styles/HeaderTabs.module.css";

function HeaderTabs() {
  return (
    <div className="headerTabs">
      <ul>
        <li>
          <a className="active">Buy</a>
        </li>
        <li>
          <a>Rent</a>
        </li>
        <li>
          <a>New Launches</a>
        </li>
        <li>
          <a>Advertise</a>
        </li>
        <li>
          <a>News & Lifestyle</a>
        </li>
        <li>
          <a>Events</a>
        </li>
        <li>
          <a>International</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderTabs;
