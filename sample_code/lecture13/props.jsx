import React from 'react';

const dogs = [
  { id: 1, name: 'Cooper', breed: 'Golden Retriever', age: 1 },
  { id: 2, name: 'Pepper', breed: 'Border Collie', age: 3 }
];

class Dog extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Breed: {this.props.breed}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        {dogs.map(dog => (
          <Dog key={dog.id} name={dog.name} breed={dog.breed} age={dog.age} />
        ))}
      </div>
    );
  }
}

export default App;
