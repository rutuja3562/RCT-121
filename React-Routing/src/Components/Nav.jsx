import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/product">Details</Link>
      <Link to="*"></Link>
    </div>
  );
};
