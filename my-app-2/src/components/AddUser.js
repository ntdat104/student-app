import React, { Component } from "react";
import "../css/AddUser.css";

class AddUser extends Component {
  render() {
    return (
      <form className="AddUser">
        <h1>Thêm mới User vào hệ thống</h1>
        <input name="name" type="text" placeholder="Tên User" onChange={(e) => this.props.getDataFromAddUser(e)} />
        <input name="tel" type="number" placeholder="Điện thoại" onChange={(e) => this.props.getDataFromAddUser(e)} />  
        <select name="permission" onChange={(e) => this.props.getDataFromAddUser(e)}>
          <option value={1}>Admin</option>
          <option value={2}>Manager</option>
          <option value={3}>User</option>
        </select>
        <button type="button" onClick={() => this.props.showResultData()}>Thêm mới</button>
      </form>
    );
  }
}

export default AddUser;
