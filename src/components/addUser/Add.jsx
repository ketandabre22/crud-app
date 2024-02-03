import React, { useState } from "react";
import "./Add.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast'

const Add = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //  const submitForm = async (e) => {
  //    e.preventDefault();
  //    await axios
  //      .post("http://localhost:8000/api/create", user)
  //      .then((response) => {
  //        toast.success(response.data.msg, { position: "top-right" });
  //        navigate("/");
  //      })
  //      .catch((error) => console.log(error));
  //  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/create",
        user
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="addUser">
      <Link className="link" to={"/"}>
        Back{" "}
      </Link>
      <h2>Add New User</h2>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            onChange={inputHandler}
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
            onChange={inputHandler}
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
            onChange={inputHandler}
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
            onChange={inputHandler}
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
            required
          />
        </div>
        <div>
          <button className="submitButton" type="submit">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
