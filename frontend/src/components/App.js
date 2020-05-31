import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      dogs: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("api/breed"),
      fetch("api/dog")
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
        breeds: data1, 
        dogs: data2
    }));

  }

  render() {
    return (
      <ul>
        {this.state.breeds.map(breed => {
          return (
            <li key={breed.id}>
              {breed.breed_name} - {breed.description}. {breed.history}.  
              The average height is {breed.avg_height}. The most common colors are {breed.colors.map(color => {
                return (
                  <span key={color.id}>
                  {color}, 
                  </span>
                );
              })}.
            </li>
          );
        })}
        {this.state.dogs.map(dog => {
          return (
            <li key={dog.id}>
              {dog.name} - {dog.breed}. {dog.description}.
                Gender: {dog.gender}. Colors: {dog.colors.map(color => {
                  return (
                    <span key={color.id}>
                    {color}, 
                    </span>
                );
              })}.
              Spayed: {dog.spayed_neutered}.
            </li>
          );
        })}
      </ul>
    )
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);