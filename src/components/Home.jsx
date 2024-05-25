import React from 'react'

const Home = () => {

    const click =() =>{
        console.log("Button Clicked")}
  return (
    <div>
        <h1>Home</h1>
        <button className='button' onClick={click}>Click</button>
    </div>
  )
}

export default Home