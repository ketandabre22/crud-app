import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="userTable">
      <Link to={"/add"} className="addUser">
        Add User
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Ketan</td>
            <td>ketan@gmail.com</td>
            <td className="actionButton">
              <button>
                <i className="fa-solid fa-trash"></i>
              </button>
              <Link to={"/edit"}>
                <i class="fa-solid fa-user-pen"></i>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
