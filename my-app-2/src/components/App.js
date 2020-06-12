import React, { Component } from "react";
import "../css/App.css";
import Option from "./Option";
import SearchForm from "./SearchForm";
import TableResult from "./TableResult";
import AddUser from "./AddUser";
import dataUser from "../dataUser.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataUser,
    };
  }

  changeOption(value) {
    this.setState({
      Option: value,
    });
  }

  display() {
    switch (this.state.Option) {
      case 1:
        return (
          <SearchForm
            handleChange={(e) => this.handleChange(e)}
            handleSubmit={(e) => this.handleSubmit(e)}
          />
        );
      case 2:
        return (
          <AddUser
            handleChange={(e) => this.handleChange(e)}
            handleSubmit={(e) => this.handleSubmit(e)}
          />
        );
      default:
        break;
    }
  }

  handleChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    console.log(value);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      text: this.state.textSearch
    });
    this.checkAddUserValid()
  }

  showResult() {
    let Users = [];
    if (this.state.text) {
      this.state.data.forEach((item) => {
        if (item.name.indexOf(this.state.text) !== -1) {
          Users.push(item);
        }
      });
      return <TableResult data={Users} />;
    } else return <TableResult data={this.state.data} />;
  }

  checkAddUserValid() {
    if (this.state.name && this.state.tel && this.state.permission){
      let newUser = {
        name: this.state.name,
        tel: this.state.tel,
        permission: parseInt(this.state.permission),
      };
      this.state.data.push(newUser);
    }
  }

  render() {
    return (
      <div className="App">
        <Option changeOption={(value) => this.changeOption(value)} />
        {this.display()}
        {this.showResult()}
      </div>
    );
  }
}

export default App;
