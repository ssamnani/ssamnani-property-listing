import React from "react";
import SearchBox from "./SearchBox";
import StatesDropdown from "./StatesDropdown";
import "../styles/SearchBar.module.css";
import SaleRentToggle from "./SaleRentToggle";

function SearchBar() {
  return (
    <>
      <div className="searchBarWrapper">
        <div className="statesDropdown">
          <StatesDropdown />
        </div>
        <div className="searchBoxWrapper">
          <SearchBox />
        </div>
        <div className="saleRentToggle">
          <SaleRentToggle />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
