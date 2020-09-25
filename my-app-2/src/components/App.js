import React, { Component } from "react";
import "../css/App.css";
import { data } from "../firebaseConfig";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentWillUnmount(){
    data.on("value", (snapshot) => {
      console.log(snapshot.val())
    })
  }

  getDataFromFirebase() {
    // data.once("value").then((snapshot) => {
    //   console.log(snapshot.val());
    // })
    data.on("value", (snapshot) => {
      console.log(snapshot.val())
    })
  }

  checkData(){
    if(this.state.users.length === 0){
      data.on("value", (snapshot) => {
        this.setState({
          users: snapshot.val()
        });
      })
    }
  }

  render() {
    this.checkData();
    // this.getDataFromFirebase();
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;