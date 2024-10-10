import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import RegionFilter from "../RegionFilter/RegionFilter";

function Filter() {
  return (
    <div className="filterContainer wrapper">
      <SearchBox />
      <div></div>
      <RegionFilter />
    </div>
  );
}

export default Filter;
