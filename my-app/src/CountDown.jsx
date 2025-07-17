import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const CountDownTimmer = () => {
  const [ time, setTime ] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(time > 0) setTime(prev => prev  - 1);
      console.log('radi')
    }, 1000)
    return () => clearTimeout(timer)
  },[time])
  
  console.log(time)
    return(
        <div className="countdown-timer-container">
  
        </div>
    )
}

export default CountDownTimmer;