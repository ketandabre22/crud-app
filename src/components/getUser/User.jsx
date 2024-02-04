import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setUsers(response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="userTable">
      <Link to={"/add"} className="addUser">
        Add User
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}.</td>
                <td>
                  {user.fname} {user.lname}
                </td>
                <td>{ user.email }</td>
                <td className="actionButton">
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/edit/` +user._id}>
                    <i className="fa-solid fa-user-pen"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
