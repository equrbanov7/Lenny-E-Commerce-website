//import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import "./loadingItems.scss"
// eslint-disable-next-line react/prop-types
const LoadingItems = ({ loading, size }) => {
  return (
    <div className="loading-container">
      <BeatLoader
        color={"rgba(32, 113, 206, 0.93)"}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingItems;
