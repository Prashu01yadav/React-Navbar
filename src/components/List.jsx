import React from 'react'

function List({obj}) {
   
  return (
    <div>
        <h2>My crush</h2>
      <p> {obj.name}</p> 
      <p> {obj.reason}</p> 
      <p> {obj.date}</p> 
    </div>
  )
}

export default List