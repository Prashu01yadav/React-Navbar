import React, {useState} from 'react'

function BgChanger() {
    const [color , setcolor] =useState('')
    const handleChange =(event)=>{
        setcolor(event.target.value);
    }
  return (
    <div className='wrapper'>
        <div className='box2' style={{background: color}}>{color}</div>
        <input type="text" className='text' value={color} onChange={handleChange} />
    </div>
   
  )
}

export default BgChanger