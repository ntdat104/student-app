import React, { Component } from 'react';
import '../css/App.css';
import Option from './Option';
import SearchForm from './SearchForm';
import TableResult from './TableResult';
import AddUser from './AddUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Option: 0
    }
  }

  changeOption(value){
    this.setState({
      Option: value
    });
  }

  display(){
    switch (this.state.Option) {
      case 1:
        return <SearchForm />
      case 2:
        return <TableResult />
      case 3:
        return <AddUser />
      default:
        break;
    }
  }
  
  render() {
    return (
      <div className="App">
        <Option 
          changeOption={(value) => this.changeOption(value)}
        />
        {this.display()}
      </div>
    );
  }
}

export default App;
