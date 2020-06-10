import React, { Component } from "react";
import "../css/Search.css";

class Search extends Component {
  render() {
    return (
      <form className="search">
        <input type="text" placeholder="Nhập từ khóa" />
        <button type="submit">Tìm kiếm</button>
      </form>
    );
  }
}

export default Search;
