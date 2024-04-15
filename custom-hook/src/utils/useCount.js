import  { useState } from 'react'

function useCount(val) {
    const[count,setCount]=useState(0);

    function increment(){
    setCount(count + 1)
    }

    function decrement(){
        setCount(count - val)
        }

  return {count,increment,decrement}
}

export default useCount
