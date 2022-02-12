import React from 'react'
import { Todos } from './Todos'

export const Todoitems = ({todo}) => {
  return (
    <div>
       <h4>{todo.title}</h4> 
       <p>{todo.desc}</p>
    </div>
  )
}
