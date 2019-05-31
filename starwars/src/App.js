import React, { Component } from "react";
import "./App.scss";
import StarWarList from "./components/StarWarList";
import Pagination from "./components/pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarList list={this.state.starwarsChars} />
        <Pagination  name={'< Next'}/> <Pagination  name={'Prev >'}/>
      </div>
    );
  }
}

export default App;
