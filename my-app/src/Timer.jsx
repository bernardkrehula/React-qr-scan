import { useState } from "react";
import { useEffect } from "react";
import './Timer.css'

const CountDownTimmer = ({resetIsGenerated}) => {
  const [ time, setTime ] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(time > 0) setTime(prev => prev  - 1);
      if(time === 0) resetIsGenerated();
    }, 1000)
    return () => clearTimeout(timer)
  },[time])

    return(
        <div className="countdown-timer-container">
          {time}s
        </div>
    )
}

export default CountDownTimmer;