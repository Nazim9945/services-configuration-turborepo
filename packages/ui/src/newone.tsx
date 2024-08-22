"use client"
import { useState } from "react"


const Newone = () => {
    const[count,setCount]=useState(0);
  return (
    <>
      <div>click on button</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </>
  );
}

export default Newone