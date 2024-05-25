import React from 'react'
import List from './List'

function Breakups() {
    const crushList =[
        {
            name: "Shwet ",
            reason:" Not working",
            date: "2002"

        },
        {
            name: "Kalyan ",
            reason:" Miss understanding",
            date: "2005"

        },
        {
            name: "Prince ",
            reason:"Cheated on me ",
            date: "2008"

        },
        {
            name: "Aman ",
            reason:"Chotta ",
            date: "2010"

        }
    ]
   
  return (
    <div>
        <h1>Breakups</h1>
        {/* <List obj={crushList[0]}></List>
        <List obj={crushList[1]}></List>
        <List obj={crushList[2]}></List>
        <List obj={crushList[3]}></List> */}
        {crushList.map((obj,index)=>
        {
            return <List key={index} obj={obj}></List>
        })}
    </div>
  )
}

export default Breakups