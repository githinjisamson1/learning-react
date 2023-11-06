import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  // userId should correspond to dynamic route
  const { userId } = useParams();
  return <div>UserDetails {userId}</div>;
};

export default UserDetails;
