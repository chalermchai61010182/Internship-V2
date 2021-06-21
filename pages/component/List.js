import React, { useState, useEffect } from "react";

export default function List() {
  const [data, setData] = useState(() => {
    const loadData = localStorage.getItem("data");

    if (loadData) {
      return JSON.parse(loadData);
    } else {
      return [];
    }
  });

  console.log(data);
  return <div>{data.firstname}</div>;
}
