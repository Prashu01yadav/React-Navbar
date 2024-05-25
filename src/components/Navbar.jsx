import React from 'react'
import {Outlet} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className='nev'>
        <h1>Mustang</h1>
        <ul>
            <li><a href="BgChanger">BgChanger</a></li>
            <li><a href="Breakups">Breakups</a></li>
            <li><a href="My_gf">My_gf</a></li>
            <li><a href="Home">Home</a></li>
            <li><a href="Stopwatch">Stopwatch</a></li>
        </ul>
        
    </div>
    {/* <div className='outlet'>

    <Outlet></Outlet>
    </div> */}
    </>
  )
}

export default Navbar