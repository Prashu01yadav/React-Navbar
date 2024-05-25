import React, { useEffect, useRef, useState } from 'react'

function Stopwatch() {

    const [time , settime] = useState(0)
    
    useEffect(()=>{
        timeIn()
        return ()=> clearInterval(timeHandler.current)
    })
    let timeHandler=useRef()
    function timeIn() {
        timeHandler.current= setInterval(()=>{
            settime(prevTime => prevTime+1)
        } , 1000)   
    }
   
  return (
    <div className='watch'>
        <h1>{Format(time)}</h1>
        
        <button onClick={()=> settime(0)} className='restart'>Restart</button>
        <button  onClick={()=> clearInterval(timeHandler.current)} className='pause'>Pause</button>
    </div>
  ) 
}
const Format= (time)=>{
    let hours= Math.floor(time/60/60 %24);
    let minutes= Math.floor(time/60 %60);
    let seconds= Math.floor(time %60);

    hours= hours <10? '0'+ hours : hours
    minutes= minutes <10? '0'+ minutes : minutes
    seconds= seconds <10? '0'+ seconds : seconds
    return hours + ':' + minutes +':'+ seconds
}
export default Stopwatch