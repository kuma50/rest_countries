import React from "react";

function ChevronUp() {
  return <div></div>;
}

function ChevronDown() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
        fill="black"
      />
    </svg>
  );
}

function RegionFilter() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="regionContainer">
      <div className="dropdown" onClick={() => setShowMenu(!showMenu)}>
        <button className="dropdown-toggle">
          <span>Filter By Region</span>
          <ChevronDown />
        </button>
        {showMenu ? (
          <ul className="dropdown-menu">
            <li className="dropdown-menu--item">Asia</li>
            <li className="dropdown-menu--item">Africa</li>
            <li className="dropdown-menu--item">America</li>
            <li className="dropdown-menu--item">Europe</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default RegionFilter;
