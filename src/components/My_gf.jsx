import React,{useState} from 'react'

function My_gf() {
    const [Togle , setTogle]=useState(true)

    const toggleChange = () => {
        setTogle(!Togle)
    }

  return (
    <div >
    <div className='gf'>
        <h1>Krishna { Togle?" 💖" : "🧡"}</h1>
       {Togle ? <h1>Radha</h1> : <h1>Rukmini</h1>}
       
    </div>
    <div className='button2'>
        <button className='click' onClick={toggleChange}>Click</button>
    </div>
    </div>
  )
}

export default My_gf