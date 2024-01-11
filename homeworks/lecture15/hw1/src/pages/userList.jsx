import "../styles/userList.css";

import { useEffect, useState } from "react";
import { Flex } from "antd";
import UserInfo from "../components/UserInfo.jsx";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="userList">
      {/* user list */}
      <Flex vertical={false}>
        <Flex vertical>
          {/* list title */}
          <div className="userInfo">
            <div className="infoId">ID</div>
            <div className="infoText">Username</div>
            <div
              className="infoImg"
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Image
            </div>
          </div>
          {/* user info */}
          {users.map((user) => (
            <UserInfo key={user.id} user={user} />
          ))}
        </Flex>
      </Flex>
    </div>
  );
};

export default UserList;
