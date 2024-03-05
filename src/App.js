import React from "react";
import { useEffect, useState } from "react";

const App = () => {
const [time, setTime] = useState(0);
const [runing, setRuning] = useState(false)


useEffect(() => {
    let interval;
    if (runing) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
        }, 10)
    } else if (!runing) {
        clearInterval(interval)
    }
    return () => clearInterval(interval);
}, [runing]);
    return(
   <>
     <h1>01-Stopwatch</h1>
     <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}: </span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
     </div>
     <div>
    {runing ?  (
            <button onClick={() => { setRuning(false) }}>stop</button>
        ) : (
            <button onClick={() => {setRuning(true)  }}>Start</button>
        )
    }
<button onClick={() => { setTime(0) }}>Reasent</button>
     </div>
   </>
    )
}
export default App