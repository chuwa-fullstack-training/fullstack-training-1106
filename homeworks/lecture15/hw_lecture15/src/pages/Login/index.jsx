import { Form, Input, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const onFinish = (values) =>{
        localStorage.setItem("username", values.username);
        if(location.state?.from){
          navigate(location.state.from);
        }
        else{
          navigate("/");
        }
    }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Username" name="username">
          <Input></Input>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input></Input>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
