import React from 'react';

const dogs = [
  { id: 1, name: 'Cooper', breed: 'Golden Retriever', age: 1 },
  { id: 2, name: 'Pepper', breed: 'Border Collie', age: 3 }
];

function Dog(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Breed: {props.breed}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

function Search(props) {
  return (
    <div>
      <input onChange={props.handleChange} name="search" />
    </div>
  );
}

class App extends React.Component {
  state = {
    searchInput: ''
  };
  handleChange = e => {
    this.setState({ searchInput: e.target.value });
  };
  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        {dogs
          .filter(dog => dog.name.includes(this.state.searchInput))
          .map(dog => (
            <Dog key={dog.id} name={dog.name} breed={dog.breed} age={dog.age} />
          ))}
      </div>
    );
  }
}

export default App;
