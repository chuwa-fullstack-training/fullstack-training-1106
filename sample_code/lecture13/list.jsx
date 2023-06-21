import React from 'react';

const dogs = [
  { id: 1, name: 'Cooper', breed: 'Golden Retriever', age: 1 },
  { id: 2, name: 'Pepper', breed: 'Border Collie', age: 3 }
];

class App extends React.Component {
  render() {
    return dogs.map(dog => (
      <div>
        <p>Name: {dog.name}</p>
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age}</p>
      </div>
    ));
  }
}

export default App;
