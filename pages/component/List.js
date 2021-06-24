import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { List, Typography, Divider, Button } from "antd";
import "antd/dist/antd.css";

const Mylist = () => {
  const router = useRouter();
  //   const [data, setData] = useState(() => {
  //     const loadData = localStorage.getItem("data");

  //     if (loadData) {
  //       return JSON.parse(loadData);
  //     } else {
  //       return [];
  //     }
  //   });

  const [data, setData] = useState(false);
  const dataone = useState;

  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem("data")));
  }, [dataone.data]); //รีเฟรสข้อมูลไม่เกิดเออเร่อ

  console.log(data);
  return (
    <div>
      {data.firstname}
      {data.lastname}
      {data.age}
      {data.phone}
      <Button
        type="primary"
        onClick={() => router.push("../component/Register")}
      >
        back
      </Button>
      ;
    </div>
  );
};
export default Mylist;
