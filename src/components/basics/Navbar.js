import React from "react";
import "./Restaurant.css";

const Navbar = ({ filterItems, menuCategory }) => {
  return (
    <>
      <div className="navbar">
        <div className="buttons">
          {menuCategory.map((currElement) => {
            return (
              <button className="btn" onClick={() => filterItems(currElement)}>
                {currElement}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
