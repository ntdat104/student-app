import React, { Component } from 'react';
import "../css/SearchForm.css";

class SearchForm extends Component {
    render() {
        return (
            <form className="SearchForm" onSubmit={(e) => this.props.handleSubmit(e)}>
                <input name="textSearch" type="text" placeholder="Nhập tên cần tìm" onChange={(e) => this.props.handleChange(e)}/>
                <button type="submit">Tìm</button>
            </form>
        );
    }
}

export default SearchForm;