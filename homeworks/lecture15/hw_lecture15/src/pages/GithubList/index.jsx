import { useEffect, useState } from "react";
import { Table, Avatar, Card, Skeleton } from "antd";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const { Meta } = Card;
import "./GithubList.css";

function Repo(props) {
  const {repo} = props;

  return (
    <>
      <p>Repositories:</p>
      <ul>
        {repo.slice(0, 3).map((item, idx) => {
          return <li key={idx}>
              <a href={item.html_url} target="_blank">{item.name}</a>
              <p>{item.description}</p>
            </li>;
        })}
      </ul>
    </>

  );
}

Repo.propTypes = {
  repo: PropTypes.array,
};

export default function GithubList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [record, setRecord] = useState({});
  const [userRepo, setUserRepo] = useState([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Username",
      dataIndex: "login",
      render: (_, {login}) =>(
        <Link to={`/users/${login}`}>{login}</Link>
      ),
    },
    {
      title: "Image",
      dataIndex: "avatar_url",
      render: (_, { avatar_url }) => (
        <Avatar src={avatar_url} size={64} shape="square"></Avatar>
      ),
    },
  ];

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const res = await fetch("https://api.github.com/users");
    //     const data = await res.json();
    //     setUsers(data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    // fetchData();
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setRecord(data[0]);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (Object.keys(record).length !== 0) {
      fetch(record.repos_url)
        .then((res) => res.json())
        .then((data) => {
          setUserRepo(data);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    }
  }, [record, loading]);

  return (
    <div className="main">
      <Table
        className="table"
        dataSource={users}
        columns={columns}
        rowKey="id"
        onRow={(record) => {
          return {
            onClick: () => {
              setLoading(true);
              setRecord(record);
            },
          };
        }}
      ></Table>
      <div className="cardContainer">
        <Card className="userDetail" hoverable>
          <Skeleton loading={loading} avatar active paragraph={{rows:3}}>
            <Meta
              avatar={<Avatar size={96} src={record.avatar_url} />}
              title={record.login}
              description={<Repo repo={userRepo} />}
            ></Meta>
          </Skeleton>
        </Card>
      </div>
    </div>
  );
}
