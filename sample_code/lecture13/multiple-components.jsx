import React from 'react';

const dogs = [
  { id: 1, name: 'Cooper', breed: 'Golden Retriever', age: 1 },
  { id: 2, name: 'Pepper', breed: 'Border Collie', age: 3 }
];

function Title(props) {
  return <h1>Welcome to {props.name}'s House</h1>;
}

class App extends React.Component {
  state = {
    name: 'Cooper'
  }
  render() {
    return (
      <div>
        <Title name={this.state.name}/>
        {dogs.map(dog => (
          <div>
            <p>Name: {dog.name}</p>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
