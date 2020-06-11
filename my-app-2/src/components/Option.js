import React, { Component } from "react";
import "../css/Option.css";

class Option extends Component {
  render() {
    return (
      <div className="Option">
        <button type="button" onClick={() => this.props.changeOption(1)}>Hiển thị thanh tìm kiếm</button>
        <button type="button" onClick={() => this.props.changeOption(2)}>Hiển thị thêm user</button>
      </div>
    );
  }
}

export default Option;
