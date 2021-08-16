import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Typography } from "antd";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
// import "../src/assets/css/App.css";
// const [newData] = data;

const success = () => {
  message
    .loading("Action in progress..", 1)
    .then(() => message.success("Loading finished", 2));
}

const FormLayoutDemo = () => {
  const router = useRouter();
  const [data, setData] = useState();

  useEffect(() => {
    const dataEdit = JSON.parse(localStorage.getItem("data"));
    const key = new URLSearchParams(window.location.search);
    const myParam = key.get("data");

    dataEdit.filter((x, i) => {
      if (i == myParam) {
        setData(x);
      }
    });
  }, []);

  const { Title } = Typography;
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  const contentStyle = {
    marginTop: "2%",
    marginLeft: "40%",
    marginRight: "40%",
  };

  function handleonFinish(values) {
    const key = new URLSearchParams(window.location.search);
    const myParam = key.get("data");
    const data = JSON.parse(window.localStorage.getItem("data") || []);
    data[myParam] = values;
    localStorage.setItem("data", JSON.stringify(data));
    router.push("../src/List");
    console.log(key);
    console.log(window.location.search);
  }

  return (
    <div className="App">
      <Title className="App" style={{ marginLeft: "50%", marginTop: "10%" }}>
        Edit
      </Title>

      {data && (
        <Form
          onFinish={handleonFinish}
          // {...formItemLayout}

          form={form}
          initialValues={{
            firstname: data.firstname,
            lastname: data.lastname,
            age: data.age,
            phone: data.phone,
          }}
          // onValuesChange={onFormLayoutChange}
          style={contentStyle}
        >
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[
              {
                required: true,
                message: "Please input your firstname",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="input your new firstname" />
          </Form.Item>
          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your lastname",
                whitespace: true,
              },
            ]}
          >
            <Input type="text" placeholder="input your new lastname" />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your age",
                whitespace: true,
              },
            ]}
          >
            <Input type="number" placeholder="input your new age" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone",
                whitespace: true,
              },
            ]}
          >
            <Input type="number" placeholder="input your new phone" />
          </Form.Item>

          <Form.Item {...buttonItemLayout}>
            <Button
              style={{ marginLeft: "50%" }}
              htmlType="submit"
              onClick={success}
              type="dashed"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default FormLayoutDemo;
