import React, { Component } from "react";
import "../css/TableResult.css";
import ResultRow from "./ResultRow";

class TableResult extends Component {
  mappingData() {
    return this.props.data.map((value, index) => (
      <ResultRow editUserStatus={(user) => this.props.editUserStatus(value)} key={index} stt={index} data={value} />
    ));
  }

  render() {
    return (
      <table className="TableResult">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Điện thoại</th>
            <th>Quyền</th>
            <th>Thao tác</th>
          </tr>
          {this.mappingData()}
        </tbody>
      </table>
    );
  }
}

export default TableResult;
