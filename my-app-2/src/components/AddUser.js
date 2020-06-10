import React, { Component } from "react";
import "../css/AddUser.css";

class AddUser extends Component {
  render() {
    return (
      <form className="addUser">
        <input type="text" placeholder="Nhập tên" />
        <input type="text" placeholder="Nhập sdt" />
        <select>
          <option>Admin</option>
          <option>User</option>
          <option>Edit</option>
        </select>
        <button type="button">Thêm</button>
      </form>
    );
  }
}

export default AddUser;
