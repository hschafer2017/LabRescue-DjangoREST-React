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
    fetch("api/breed")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          console.log(data);
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(breed => {
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