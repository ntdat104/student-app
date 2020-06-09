import React, { Component } from "react";
import "./App.css";
import data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      option: 0,
    };
  }

  show() {
    return (
      <table>
        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Họ</th>
            <th>Đệm</th>
            <th>Tên</th>
            <th>Ngày sinh</th>
            <th>Lớp</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.data.map((x, index) => (
              <tr key={index}>
                <td>{x.maSV}</td>
                <td>{x.lastName}</td>
                <td>{x.middleName}</td>
                <td>{x.firstName}</td>
                <td>{x.dateOfBirth}</td>
                <td>{x.className}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }

  create() {
    return (
      <form method="get">
        <input type="number" placeholder="Mã SV" />
        <input type="text" placeholder="Họ" />
        <input type="text" placeholder="Đệm" />
        <input type="text" placeholder="Tên" />
        <input type="date" placeholder="Ngày sinh" />
        <input type="text" placeholder="Lớp" />
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }

  delete() {}

  save() {}

  result() {
    if (this.state.option === 1) {
      return this.show();
    } else if (this.state.option === 2) {
      return this.create();
    } else if (this.state.option === 3) {
      return this.delete();
    } else if (this.state.option === 4) {
      return this.save();
    }
  }

  showClick() {
    this.setState({ option: 1 });
  }

  createClick() {
    this.setState({ option: 2 });
  }

  render() {
    return (
      <div className="App">
        <h1>Phần mềm quản lý sinh viên</h1>
        <h1>Tác giả: Nguyễn Tiến Đạt - Soict BK</h1>
        <div className="btn">
          <button onClick={() => this.showClick()}>Show</button>
          <button onClick={() => this.createClick()}>Create</button>
          <button>Delete</button>
          <button>Save</button>
        </div>
        {this.result()}
      </div>
    );
  }
}

export default App;
