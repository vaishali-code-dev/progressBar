import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  // useEffect hook to set the animation complete state after 5 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationComplete(true);
    }, 5000);

    return () => clearTimeout(timeoutId); // Cleanup function
  }, []);

  return (
    <>
      <div className="wrapper">
        <div
          className={`progress ${animationComplete ? "complete" : ""}`}
        ></div>
      </div>
    </>
  );
}
