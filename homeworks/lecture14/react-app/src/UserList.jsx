import { useEffect, useState } from "react";
import axios from "axios";
import { List, Card, Row, Col, Image, Avatar } from "antd";

const profileStyle = {
  width: "600px",
  height: "400px",
  marginTop: "200px",
  marginLeft: "300px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  borderRadius: "0",
};

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContentContent: "center",
};

function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(1);
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("https://api.github.com/users");
        result.data.unshift({
          id: "ID",
          login: "Username",
          avatar_url: "Image",
        });
        setUsers(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const getUserData = async () => {
        try {
          const repoResult = await axios.get(users[selected].repos_url);
          setRepos(repoResult.data.slice(0, 3));
          const detailResult = await axios.get(users[selected].url);
          setUser(detailResult.data);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      getUserData();
    }
  }, [selected, users]);

  const handleSelect = (event) => {
    const idx = +event.currentTarget.id;
    if (idx !== selected) {
      setSelected(idx);
      setLoading(true);
    }
  };

  return (
    <Row>
      <Col>
        <List
          dataSource={users}
          renderItem={(user, idx) => (
            <Card
              id={user.id}
              onClick={handleSelect}
              className="user-container"
            >
              <Row>
                <Col span={6} style={listItemStyle}>
                  <span>{user.id}</span>
                </Col>
                <Col span={6} style={listItemStyle}>
                  <span>{user.login}</span>
                </Col>
                <Col span={6}>
                  {idx ? <Image src={user.avatar_url}></Image> : "Image"}
                </Col>
              </Row>
            </Card>
          )}
        />
      </Col>
      <Col>
        <Card style={profileStyle} loading={loading}>
          <Row>
            <Col span={7}>
              {users.length > 0 && (
                <Avatar
                  size={150}
                  src={<img src={users[selected].avatar_url} />}
                ></Avatar>
              )}
            </Col>
            <Col span={17}>
              <Row>
                <h1>{user.name}</h1>
              </Row>
              <Row>
                <span>Location: {user.location}</span>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <span>Repositories</span>
              </Row>
              <Row>
                <ul>
                  {repos.map((repo) => {
                    return (
                      <li key={repo.id}>
                        <a href={repo.git_url}>{repo.name}</a>
                        <p>{repo.description && repo.description}</p>
                      </li>
                    );
                  })}
                </ul>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default App;
