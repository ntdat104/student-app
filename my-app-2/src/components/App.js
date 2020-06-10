import React from 'react';
import '../css/App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <div class="container">
        <TableData />
        <AddUser />
      </div>
    </div>
  );
}

export default App;
