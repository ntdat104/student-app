import React, { Component } from "react";
import "../css/TableData.css";

class TableData extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Điện thoại</th>
            <th>Quyền</th>
            <th>Hành động</th>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>
              <button type="button">Sửa</button>
              <button type="button">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>
              <button type="button">Sửa</button>
              <button type="button">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableData;
