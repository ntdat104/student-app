import React, { Component } from "react";
import "../css/App.css";
import SearchForm from "./SearchForm";
import TableResult from "./TableResult";
import AddUser from "./AddUser";
import dataUser from "../dataUser.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataUser,
      showButtonAddUser: true,
      addUserStatus: false,
    };
  }

  showButtonAddUser() {
    if (this.state.showButtonAddUser === true) {
      return (
        <button
          type="button"
          className="addUserBtn"
          onClick={() => this.addUserClick()}
        >
          Thêm mới
        </button>
      );
    }
  }

  addUserClick() {
    this.setState({
      showButtonAddUser: false,
      addUserStatus: true,
    });
  }

  checkAddUserStatus() {
    if (this.state.addUserStatus === true) {
      return (
        <AddUser
          handleChange={(e) => this.handleChange(e)}
          addUserSubmit={(e) => this.addUserSubmit(e)}
        />
      );
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log(value);
  }

  searchFormSubmit(e) {
    e.preventDefault();
    this.setState({
      text: this.state.textSearch,
    });
  }

  addUserSubmit(e){
    e.preventDefault();
    this.setState({
      showButtonAddUser: true,
      addUserStatus: false,
    })

    if (this.state.name && this.state.tel && this.state.permission) {
      let newUser = {
        name: this.state.name,
        tel: this.state.tel,
        permission: parseInt(this.state.permission),
      };
      this.state.data.push(newUser);
    }
  }
  
  showResult() {
    let Users = [];
    if (this.state.text) {
      this.state.data.forEach((item) => {
        if (item.name.indexOf(this.state.text) !== -1) {
          Users.push(item);
        }
      });
      return (
        <TableResult editUserStatus={(user) => this.editUserStatus(user)} data={Users} />
      );
    } else
      return (
        <TableResult
          editUserStatus={(user) => this.editUserStatus(user)}
          data={this.state.data}
        />
      );
  }


  editUserStatus(user) {
    console.log("Kết nối thành công");
    console.log(user);
    this.setState({
      showButtonAddUser: false,
      addUserStatus: true,
    });
  }

  render() {
    return (
      <div className="App">
        <SearchForm
          handleChange={(e) => this.handleChange(e)}
          searchFormSubmit={(e) => this.searchFormSubmit(e)}
        />
        {this.showButtonAddUser()}
        {this.checkAddUserStatus()}
        {this.showResult()}
      </div>
    );
  }
}

export default App;
