import React, { forwardRef, useImperativeHandle } from 'react'

function Child(props,ref) {
    useImperativeHandle(ref,()=>{
        return{
            sayHai
        }
    })
    const sayHai=()=>{
        console.log("Hi everyone");
    }
  return (
    <div>
      Child Component
    </div>
  )
}

export default forwardRef(Child)
