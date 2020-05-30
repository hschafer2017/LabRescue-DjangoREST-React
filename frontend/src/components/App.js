import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("api/breed"),
      fetch("api/dog")
    ])
      .then(([res1, res2]) => {
        if (res1.status > 400 && res2.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return Promise.all([res1.json(), res2.json()])
      })
      .then(([res1, res2]) => {
        this.setState(() => {
          return {
            res1,
            res2,
            loaded: true
          };
        });
      });

  }

  render() {
    return (
      <ul>
        {this.state.res1.map(breed => {
          return (
            <li key={breed.id}>
              {breed.breed_name} - {breed.description}. {breed.history}.  
              The average height is {breed.avg_height}. The most common colors are {breed.colors.map(color => {
                return (
                  <span key={color.id}>
                  {color}, 
                  </span>
                )
              })}.
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);