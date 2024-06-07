import React from "react";

export const Photo = ({ user }) => {
  return <img src={user.picture} alt={`${user.name}'s profile`}></img>;
};
