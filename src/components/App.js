import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigsList from "./PigsList";
import Filter from './Filter'
import GifContainer from "../containers/GifContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <GifContainer />
        {/* <Filter hogs={hogs}/> */}
        <PigsList hogs={hogs} />
      </div>
    );
  }
}

export default App;
