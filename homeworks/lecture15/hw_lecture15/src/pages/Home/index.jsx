import styles from "./Home.module.css";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(localStorage.getItem("username"));

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      {userName ? (
        <>
          <p>Welcome {userName}</p>
          <Button
            type="primary"
            onClick={() => {
              localStorage.removeItem("username");
              setUserName();
            }}
          >
            Log out
          </Button>
        </>
      ) : (
        <Button
          type="primary"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      )}
    </div>
  );
}
