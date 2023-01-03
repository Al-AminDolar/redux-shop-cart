import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(name);
  //   console.log(password);

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div>
      <div className=" border rounded-md border-gray-500 p-10 ">
        <h1 className="p-10 text-center text-2xl font-semibold">
          Please LogIn
        </h1>
        <Form
          onSubmitCapture={(e) => handlesubmit(e)}
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              className="flex justify-center"
              ype="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
