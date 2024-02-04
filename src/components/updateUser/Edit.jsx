import React, { useEffect, useState } from "react";
import "../addUser/Add.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(users);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending data:", user);
      const response = await axios.put(
        `http://localhost:8000/api/update/${id}`,
        user
      );
      const toastDuration = 4000;
      console.log("Response:", response.data);
      toast.success(`User Updated Successfully`, {
        position: "top-right",
        duration: toastDuration,
      });
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
      <h2>Update User</h2>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            value={user.fname}
            onChange={inputChangeHandler}
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
            value={user.lname}
            onChange={inputChangeHandler}
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
            value={user.email}
            onChange={inputChangeHandler}
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
};

export default Edit;
