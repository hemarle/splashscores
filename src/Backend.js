import React, { useState, useEffect } from "react";

function Backend() {
  const [apiData, setApiData] = useState([]);
  const getApiData = fetch("url")
    .then((data) => data.json)
    .then((data) => setApiData(data))
    .catch((err) => console.log(err));

  return <div></div>;
}

export default Backend;
