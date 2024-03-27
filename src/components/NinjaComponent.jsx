import React, { useState, useEffect } from "react";

const NinjaComponent = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={{border: '1px dashed yellow'}}>
      {data ? (<>
        <p>{data.id}</p>
        <p>{data.title}</p>
        <p>{data.body}</p>
      </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NinjaComponent;
