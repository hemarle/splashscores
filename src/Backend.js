import React, { useState, useEffect } from "react";

function Backend() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getApiData = fetch(
      "https://livescore-api.com/api-client/scores/live.json&key=FZrLOaiRCSeaDtnR&secret=TJv9jRSQPbMScbtSbUDZ4WRHO5Rsyfjs",
      {
        method: "GET",
        headers: {
          "Accept":
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
          "Access-Control-Allow-Origin": "*",
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setApiData(data);
        console.log(data);
      })

      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
}

export default Backend;
