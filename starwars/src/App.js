import React, { Component } from "react";
import "./App.scss";
import StarWarList from "./components/StarWarList";
import Pagination from "./components/pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: {},
      prev: {}
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
        this.setState({
          starwarsChars: data.results,
          next: {
            data: data.next,
            disabled: (data.next === null) ? true : false
          },
          prev: {
            data: data.previous,
            disabled: (data.previous === null) ? true : false
          }
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  paginationHandler = id => {
    if (id === "next" && this.state.next.data !== null) {
      this.getCharacters(this.state.next.data);
    }
    if (id === "prev" && this.state.prev.data !== null) {
      this.getCharacters(this.state.prev.data);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarList list={this.state.starwarsChars} />
        <Pagination
          click={this.paginationHandler}
          disabled={this.state.prev['disabled']}
          name={"< Prev"}
          id={"prev"}
        />
        <Pagination
          click={this.paginationHandler}
          disabled={this.state.next['disabled']}
          name={"Next >"}
          id={"next"}
        />
      </div>
    );
  }
}

export default App;
