import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);
    
  // useEffect(() =>{
  //   console.log("component mounded")
  // },[])
   
  // useEffect(() =>{
  //   alert("count has changed ")
  // },[count])
  //  useEffect(() =>{
  //   console.log("component Updated")
  // },[])

  function Increment() {
    if (count < 100) setcount(count + 1*5);
  }

  function Decrement() {
    if (count > 0) setcount(count - 1*5);
  }

  function Reset() {
    setcount(0);
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex flex-col items-center gap-6 w-[320px]">
        
        <h1 className="text-6xl font-bold text-white">
          {count}
        </h1>

        <div className="flex gap-4">
          <button
            onClick={Increment}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
          >
            Increment
          </button>

          <button
            onClick={Decrement}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition"
          >
            Decrement
          </button>

          <button
            onClick={Reset}
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}

export default Counter;