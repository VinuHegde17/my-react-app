import React, { useState } from 'react'

function initialtodo() {
    const itodo=[];
    for(let i=0;i<5;i++){
        itodo.push({
            id:i,
            text:'Item'+ (i+1)
        })
    }
    return itodo
}

function Item() {
    const[todo,setTodo]=useState(initialtodo);
    const[text,setText]=useState('');
  return (
    <div>
     <input type="text" value={text} onChange={e=>setText(e.target.value)}/> 
     <button onClick={()=>{
        setText('')
        setTodo([{
            id:todo.length,
            text:text
        },...todo])
     }}>Add</button>
     
        {todo.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
    </div>
  )
}

export default Item