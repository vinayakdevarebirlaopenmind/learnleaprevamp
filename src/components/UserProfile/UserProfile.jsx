import React from "react";
import { useSelector } from "react-redux";
import Header from "../header";

const UserProfile = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log("User Data in profile page :", user);
  
  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <>
      <Header />
      <h2>Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <img src={user.image} alt="User Profile" width={100} />
    </>
  );
};

export default UserProfile;
