import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SecondCompo from "./SecondCompo";

// Task:
 
// The Page1 component contains a button that increments the count and changes the background color based on whether the count is odd or even. The Link to Page 2 includes the count and background color in the state.
 
// The Page2 component receives the count and background color from the state and displays the information. The Link to Page 1 allows you to go back to Page 1 and maintains the count where you left off.
 
// Note: This example assumes you are using React Router for navigation. Make sure to set up your routing accordingly.

const FirstCompo = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  let val = useRef(null);
  const navigate = useNavigate();

  const handleCount = () => {
    setCount(count + 1);
    // navigate('/second')
  };

  useEffect(() => {
    if (count % 2 === 0) {
      setColor("Green");
    } else {
      setColor("Red");
    }
  }, [count]);

  return (
    <>
      <div style={{ background: color }}>
        <h1>
          Count: {count} {color}
        </h1>
        <button type="button" onClick={handleCount}>
          Count
        </button>

        <Link to={{ pathname: '/SecondCompo', state: { count, color } }}>Click</Link>

        {/* <SecondCompo count={count} color={color} /> */}
      </div>
    </>
  );
};

export default FirstCompo;
