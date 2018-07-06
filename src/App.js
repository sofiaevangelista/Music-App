import React from "react";
import Header from "./components/Header.js";
import MusicApi from "./components/MusicApi.js";
import Search from "./components/Search.js";
import "./css/App.css";

class App extends React.Component {
  state = {
    searchText: ""
  };

  updateSearchText = query => {
    this.setState({
      searchText: query
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Search searchFunction={this.updateSearchText} />
        <MusicApi query={this.state.searchText} />
      </div>
  
    );
  }
}

export default App;
