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
            getTextSearch={(e) => this.getTextSearch(e)}
            showResultRow={() => this.showResultRow()}
          />
        );
      case 2:
        return (
          <AddUser
            getDataFromAddUser={(e) => this.getDataFromAddUser(e)}
            showResultData={() => this.showResultData()}
          />
        );
      default:
        break;
    }
  }

  getTextSearch(e) {
    this.setState({
      textSearch: e.target.value,
    });
  }

  showResultRow() {
    this.setState({
      text: this.state.textSearch,
    });
  }

  showTableResult() {
    let data = [];
    if (this.state.text) {
      this.state.data.forEach((item) => {
        if (item.name.indexOf(this.state.text) !== -1) {
          data.push(item);
        }
      });
      return <TableResult data={data} />;
    } else return <TableResult data={this.state.data} />;
  }

  getDataFromAddUser(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  showResultData() {
    let newData = this.state.data;
    if (this.state.name === undefined || this.state.tel === undefined || this.state.permission === undefined){
      this.setState({
        data: newData
      });
    } else {
      let newUser = {
        name: this.state.name,
        tel: this.state.tel,
        permission: parseInt(this.state.permission),
      };
      newData.push(newUser);
      this.setState({
        data: newData
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Option changeOption={(value) => this.changeOption(value)} />
        {this.display()}
        {this.showTableResult()}
      </div>
    );
  }
}

export default App;
