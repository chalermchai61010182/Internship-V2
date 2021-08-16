import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { Table, Button, message, Popconfirm } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const contentStyle = {
  marginTop: "2%",
  marginLeft: "2%",
  marginRight: "2%",
};

const Mylist = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem("data") || []));
  }, []); //รีเฟรสข้อมูลไม่เกิดเออเร่อ

  function hadleRemove(index) {
    for (let i = 0; i < data.length; i++) {
      if (index == i) {
        const newData = data.slice(0, i).concat(data.slice(index + 1));
        setData(newData);
        localStorage.setItem("data", JSON.stringify(newData));
        console.log(index);
        // console.log(data.slice(0, i));
        // console.log(data.slice(index + 1));
      }
    }
  }

  function hadleDataEdit(index) {
    console.log(index);
    router.push(`../src/DataEdit?data=${index}`);
    // console.log(data.slice(0, i));
    // console.log(data.slice(index + 1));
  }

  const columns = [
    {
      title: "firstName",
      dataIndex: "firstname",
      key: "fistname",
      width: "30%",
    },
    {
      title: "lastName",
      dataIndex: "lastname",
      key: "lastname",
      width: "30%",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Delete",
      key: "x",
      render: (text, row, index) => {
        function confirm(e) {
          console.log(e);
          hadleRemove(index);
          message.success("Click on ok");
        }

        function cancel(e) {
          console.log(e);
          message.error("Click on cencel");
        }
        return (
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
          >
            <a>Delete</a>
          </Popconfirm>
        );
      },
    },
    {
      title: "Edit",
      key: "Edit",
      render: (text, row, index) => {
        return <a onClick={() => hadleDataEdit(index)}>Edit</a>;
      },
    },
    // {
    //   title: "Edit",
    //   key: "x",
    //   render: (text, row, index) => {
    //     function confirm(e) {
    //       console.log(e);
    //       hadleDataEdit(index);
    //       message.success("Click on ok");
    //     }

    //     function cancel(e) {
    //       console.log(e);
    //       message.error("Click on cencel");
    //     }
    //     return (
    //       <Popconfirm
    //         title="Are you sure edit this task?"
    //         onConfirm={confirm}
    //         onCancel={cancel}
    //       >
    //         <a>Edit</a>
    //       </Popconfirm>
    //     );
    //   },
    // },
  ];
  return (
    <div style={contentStyle}>
      {/* <Pagination defaultCurrent={1} total={50} /> */}
      <Table pagination={{ pageSize: 5 }} columns={columns} dataSource={data} />

      <Button
        style=""
        style={{ marginLeft: "94.5%" }}
        type="primary"
        onClick={() => router.push("../src/Register")}
      >
        Register
      </Button>
    </div>
  );
};
export default Mylist;
