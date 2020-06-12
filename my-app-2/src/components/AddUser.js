import React, { Component } from "react";
import "../css/AddUser.css";

class AddUser extends Component {
  render() {
    return (
      <div className="AddUser">
        <h1>Thêm món ăn</h1>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <input name="name" type="text" placeholder="Tên User" onChange={(e) => this.props.handleChange(e)} />
          <input name="tel" type="number" placeholder="Điện thoại" onChange={(e) => this.props.handleChange(e)} />  
          <select name="permission" onChange={(e) => this.props.handleChange(e)}>
            <option>Chọn quyền mặc định</option>
            <option value={1}>Admin</option>
            <option value={2}>Manager</option>
            <option value={3}>User</option>
          </select>
          <button type="submit">Thêm mới</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
