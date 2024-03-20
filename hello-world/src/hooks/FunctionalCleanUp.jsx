import React, { useState, useEffect } from "react";

function FunctionalCleanUp() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Function to update current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Dependency array is empty, so effect runs only once after initial render

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default FunctionalCleanUp;
