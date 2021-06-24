import React, { useState, useEffect } from "react";
import { Form, Input, Button, Radio } from "antd";
import { useRouter } from "next/router";
import "antd/dist/antd.css";

const FormLayoutDemo = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    phone: "",
  });

  //ฟังชั่นในการรับค่า
  console.log(data);
  //   function handleInputChange(e) {
  //     setData({ ...data, [e.target.name]: e.target.value });
  //   }

  //   function handleFormSubmit(e) {
  //     e.preventDefault(); //ป้องกันการรีเฟรชเมื่อมีการสับมิตฟอม
  //     if (data !== "") {
  //       setData(...data, {
  //         id: data.length + 1,
  //       });
  //     }
  //   }

  const router = useRouter();

  //   function onSubmit(e) {
  //     e.preventDefault();
  //     localStorage.setItem("data", JSON.stringify(data)); //แปลงข้อมูลเป็นสติงแล้วเก็บเข้าโลคอล
  //     router.push("../component/List");
  //   }

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
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
    marginLeft: "10%",
  };
  function handleonFinish(values) {
    console.log(values);
  }
  return (
    <div className="App">
      <h1 style={{ marginLeft: "44%", marginTop: "10%" }}>
        ลงทะเบียนรับวัคซีน
      </h1>
      {/* <Form onSubmit={handleFormSubmit}> */}
      <Form
        onFinish={handleonFinish}
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        style={contentStyle}
      >
        <Form.Item label="Fistname" name="firstname">
          <Input
            type="text"
            value={data.firstname}
            // onChange={handleInputChange}
            placeholder="input your firstname"
          />
        </Form.Item>
        <Form.Item label="Lastname" name="lastname">
          <Input
            type="text"
            // value={data.lastname}
            // onChange={handleInputChange}
            placeholder="input placeholder"
          />
        </Form.Item>

        <Form.Item label="Age" name="age">
          <Input
            type="text"
            // value={data.age}
            // onChange={handleInputChange}
            placeholder="input placeholder"
          />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input
            type="text"
            // value={data.phone}
            // onChange={handleInputChange}
            placeholder="input placeholder"
          />
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLayoutDemo;
