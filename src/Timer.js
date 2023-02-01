import React, { useState, useEffect } from "react";

export default function Timer(props) {
  let initialValue = 300;
  if (props?.value) {
    initialValue = props.value;
  }
  const [delay, setDelay] = useState(initialValue);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <span>
        {minutes}:{seconds}
      </span>
    </>
  );
}
