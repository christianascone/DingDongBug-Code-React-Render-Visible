import { useRef } from "react";
import PropTypes from "prop-types";
import useFetchOnVisible from "../hooks/useFetchOnVisible";

const NinjaComponent = ({ id }) => {
  const ref = useRef(null);

  const getSource = () =>
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`) // replace with your API endpoint
      .then((response) => response.json());
  const [data, loading] = useFetchOnVisible(ref, getSource);

  return (
    <div ref={ref} style={{ border: "1px dashed yellow" }}>
      {data && !loading ? (
        <>
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

NinjaComponent.propTypes = {
  id: PropTypes.number,
};
export default NinjaComponent;
