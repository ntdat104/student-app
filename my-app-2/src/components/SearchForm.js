import React, { Component } from 'react';
import "../css/SearchForm.css";

class SearchForm extends Component {
    render() {
        return (
            <div className="SearchForm">
                <input type="text" placeholder="Nhập tên cần tìm" onChange={(e) => this.props.getTextSearch(e)}/>
                <button type="button" onClick={() => this.props.showResultRow()}>Tìm</button>
            </div>
        );
    }
}

export default SearchForm;