import React from "react";
import "./Add.css";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <div className="AddUser">
      <Link to={"/"}>Back </Link>
      <h3>Add new User</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First Name"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email ID"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="submitButton">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
