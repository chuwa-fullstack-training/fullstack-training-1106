import React from "react";
import "./styles.css";

function UserDisplay({ avatar_url, username }) {
  return (
    <li>
      <img src={avatar_url} alt="avatar" width="32" heigh="32" />
      <span>{username}</span>
    </li>
  );
}

class App extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    console.log("component did mount");
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user) => (
          <UserDisplay
            key={user.id}
            avatar_url={user.avatar_url}
            username={user.login}
          />
        ))}
      </ul>
    );
  }
}

export default App;
