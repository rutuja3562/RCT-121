import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const UserProfile = () => {
  const user = useSelector((state) => state.data.user);
  const dispatch = useDispatch();

  console.log("LLL", user);
  return <div>{`token:${user.token}`}</div>;
};
