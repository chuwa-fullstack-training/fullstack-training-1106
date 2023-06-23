import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
        </div>
        <div className="row">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default App;
