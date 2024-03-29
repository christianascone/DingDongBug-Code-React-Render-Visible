import React, { useState, useEffect } from "react";

const NinjaComponent = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`) // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={{border: '1px dashed yellow'}}>
      {data ? (<>
        <p>{data.id}</p>
        <p>{data.title}</p>
        <img src={data.thumbnailUrl} />
      </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NinjaComponent;
