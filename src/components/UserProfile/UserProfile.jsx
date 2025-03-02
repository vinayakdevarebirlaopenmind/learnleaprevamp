import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  console.log(user);

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <img src={user.image} alt="User Profile" width={100} />
    </div>
  );
};

export default UserProfile;
