import React from "react";

export const FoodDetails = ({
  image,
  name,
  rating,
  votes,
  cost,
  reviews,
  minPrice,
  deliveryTimings,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        border: "1px solid black",
        width: "35%",
        margin: "auto",
        textAlign: "justify",
        marginBottom: "1rem",
      }}
    >
      <div>
        <img width="100px" height="100px" src={image} alt={name} />
      </div>
      <div>
        <div>{name}</div>
        <div>cost ₹{cost} for one</div>
        <div>
          min ₹{minPrice} . Up to {deliveryTimings}
        </div>
        <div>payment method</div>
      </div>
      <div>
        <div>{rating}</div>
        <div>Votes:{votes}</div>
        <div>Reviews:{reviews}</div>
      </div>
    </div>
  );
};
