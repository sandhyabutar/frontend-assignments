import React from 'react'
import {Todoitems} from './Todoitems'

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center  ">Todos List</h3>
     {props.todos.map((todo)=>{
        return <Todoitems todo={todo}/>
     })}
     
      <button className="btn btn-danger">Delete</button>
    </div>
  )
}
