import React, { useState, useEffect } from "react";
import { Form, Input, Button, Radio } from "antd";
import { useRouter } from "next/router";

const FormLayoutDemo = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    phone: "",
  });
  const router = useRouter();

  //ฟังชั่นในการรับค่า
  console.log(data);
  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    localStorage.setItem("data", JSON.stringify(data)); //แปลงข้อมูลเป็นสติงแล้วเก็บเข้าโลคอล
    router.push("../component/List");
  }

  return (
    <div className="App">
      <h1>ลงทะเบียนรับวัคซีน</h1>
      {/* <Form onSubmit={handleFormSubmit}> */}
      <Form>
        <input
          type="text"
          name="firstname"
          placeholder="create a new todo"
          value={data.firstname}
          onChange={handleInputChange} //เพื่ออัพเดทค่า
        />
        <input
          type="text"
          name="lastname"
          placeholder="create a new todo"
          value={data.lastname}
          onChange={handleInputChange} //เพื่ออัพเดทค่า
        />
        <input
          type="text"
          name="age"
          placeholder="create a new todo"
          value={data.age}
          onChange={handleInputChange} //เพื่ออัพเดทค่า
        />
        <input
          type="text"
          name="phone"
          placeholder="create a new todo"
          value={data.phone}
          onChange={handleInputChange} //เพื่ออัพเดทค่า
        />
        <button onClick={onSubmit}>Add</button>
      </Form>
    </div>
  );
};

export default FormLayoutDemo;
