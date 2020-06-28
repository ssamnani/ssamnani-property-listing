import React from "react";
import styles from "../styles/SearchResult.module.css";

function SearchResult() {
  return (
    <div className="propertyCard">
      <div className="cardHeader">
        <div className="headerLeft">
          <div className="agentImage">
            <img
              src="https://pictures-my.ippstatic.com/realtors/images/agent/c2d903f03b17447aa33fddd6a7d88285.jpg"
              alt="Agent Image"
            />
          </div>
          <div className="agentName">Grace Koo</div>
          <div className="postedOn">Posted today 12:38 AM</div>
        </div>
        <div className="headerRight">
          <div className="agencyLogo">
            <img
              src="https://images-my.ippstatic.com/images/searchresult/agencybrandlogo/0771059589124aa19fd8daf5c60c8dc8.png"
              alt="Agency Logo"
            />
          </div>
        </div>
      </div>
      <div className="carouselWrapper">
        <img src="https://img.rea-asia.com/my-subsale/premium/750x560-fit/realtors/images/640/35327/c1e81b7953ef4a63a8143f6d66074ade.jpg" />
      </div>
      <div className="descriptionWrapper">
        <div className="price">RM 330,000</div>
        <div className="place">Aspire Residence, Cyberjaya</div>
        <div className="city">
          Block 18, Cyberjaya, Cyberjaya, 47130, Selangor
        </div>
        <div className="specs">
          2-sty Terrace/Link House • Built-up : 3,032 sq. ft.
        </div>
        <div className="cardFooter"></div>
      </div>
    </div>
  );
}

export default SearchResult;
