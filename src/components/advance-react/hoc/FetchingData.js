import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

export default withLoading(FetchingData);
