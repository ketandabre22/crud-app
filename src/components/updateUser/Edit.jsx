import React from 'react'
import "../addUser/Add.css";
import { Link } from 'react-router-dom';

const Edit = () => {
  return (
    <div className="addUser">
      <Link className="link" to={"/"}>
        Back{" "}
      </Link>
      <h2>Update User</h2>
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
        <div>
          <button className="submitButton" type="submit">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit