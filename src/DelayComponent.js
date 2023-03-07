import React, { useState, useEffect } from "react";

function DelayedComponent({ delay, children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return <div style={{ display: show ? "block" : "none" }}>{children}</div>;
}
export default DelayedComponent;
