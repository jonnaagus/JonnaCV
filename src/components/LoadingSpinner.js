import React from 'react';
import './loading-spinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner">
        <div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;