import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Typography } from "antd";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
// import "../src/assets/css/App.css";

const success = () => {
  message
    .loading("Action in progress..", 1)
    .then(() => message.success("Loading finished", 2));
};

const FormLayoutDemo = () => {
  var data = [];
  const router = useRouter();

  const handleDeleteClick = (key) => {
    setData(data.filter((item) => item.key !== key));
    localStorage.setItem(
      "remove",
      JSON.stringify(data.filter((item) => item.key !== key))
    );
  };

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
    //ถ้าไม่มีข้อมูลให้ ข้อมูลเป็นค่าเปล่า
    // console.log("1212121");
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify([]));
    }
    data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    console.log(typeof data);
    data.push(values);
    localStorage.setItem("data", JSON.stringify(data));

    router.push("../src/List"); //ไว้ท้ายเพราะเพื่อให้ข้อมูลทำงานเสร็จทั้งหมดค่อยเปลี่ยน page
  }

  return (
    <div className="App">
      <Title className="App" style={{ marginLeft: "38%", marginTop: "10%" }}>
        Register for vaccination
      </Title>

      <Form
        onFinish={handleonFinish}
        // {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        style={contentStyle}
      >
        <Form.Item
          label="Fistname"
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input your firstname",
              whitespace: true,
            },
          ]}
        >
          <Input type="text" placeholder="input your firstname" />
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
          <Input type="text" placeholder="input your lastname" />
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
          <Input type="number" placeholder="input your age" />
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
          <Input type="number" placeholder="input your phone" />
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
    </div>
  );
};

export default FormLayoutDemo;
