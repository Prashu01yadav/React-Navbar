
import './App.css'
import BgChanger from './components/BgChanger'
import Breakups from './components/Breakups'
import Home from './components/Home'
import List from './components/List'
import My_gf from './components/My_gf'
import Navbar from './components/Navbar'
import Stopwatch from './components/Stopwatch'
import {Outlet} from 'react-router-dom'

function App() {
 

  return (
    <>
      <div className='box'>
        {/* <h1>PRASHANT YADAV</h1> */}
        {/* <Home></Home> */}
        {/* <My_gf></My_gf> */}
        {/* <List></List> */}
        {/* <Breakups></Breakups> */}
        {/* <BgChanger></BgChanger> */}
        <Navbar></Navbar>
        <div className='outlet'>

<Outlet></Outlet>
</div>

      </div>
     
    </>
   
  )
  
}

export default App
