import React from "react";
import "./menucard.css";


function MenuCard({ menuData }) {
  // console.log(menuData);
  return (
    <>
      {menuData.map((currElement) => {
          const { id , name , price , image , description } = currElement;
        return (
          <>
            <div className="card-container" key ={id}>
              <div className="card-body">
                <div className="title">{name}</div>
                <div className="price">{price}</div>
                <div className="description">{description}</div>
              </div>
              <img src={image} alt="ima" />
            </div>
          </>
        );
      })}
    </>
  );
}

export default MenuCard;
