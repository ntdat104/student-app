import React, { Component } from "react";
import "../css/AddUser.css";

class AddUser extends Component {
  render() {
    return (
        <form className="AddUser" onSubmit={(e) => this.props.addUserSubmit(e)}>
          <input name="name" type="text" placeholder="Tên User" onChange={(e) => this.props.handleChange(e)} required/>
          <input name="tel" type="number" placeholder="Điện thoại" onChange={(e) => this.props.handleChange(e)} required/>  
          <select name="permission" onChange={(e) => this.props.handleChange(e)} required>
            <option value="">Chọn quyền mặc định</option>
            <option value={1}>Admin</option>
            <option value={2}>Manager</option>
            <option value={3}>User</option>
          </select>
          <button type="submit">Submit</button>
        </form>
    );
  }
}

export default AddUser;
