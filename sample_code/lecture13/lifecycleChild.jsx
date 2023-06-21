import React from 'react';

class LifecycleChild extends React.Component {
  constructor(props) {
    super(props);
    console.log('\t-- trigger constructor in child component');
  }

  componentWillMount() {
    console.log('\t-- trigger componentWillMount in child component');
  }

  componentDidMount() {
    console.log('\t-- trigger componentDidMount in child component');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      '\t-- During updating, trigger componentDidUpdate after re-render, in child component'
    );
  }

  render() {
    console.log('\t-- trigger render in child component');
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    );
  }
}

export default LifecycleChild;
