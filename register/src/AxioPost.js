import axios from 'axios';
import React, { useState } from 'react'

function AxioPost() {
    const data={firstName:'',lastName:''};
    const [iData,setiData]=useState(data);
   const handleData=((e)=>{
setiData({...iData,[e.target.name]:e.target.value})
    })

    const handleSubmit=((e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",iData)
        .then((response)=>{
            console.log(response);
        })
    })
    const handleUpdate=((e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",iData)
        .then((response)=>{
            console.log(response);
        })
    })
    const handleDelete=((e)=>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response);
        })
    })
  return (
<>
<label>First Name: </label>
<input type="text" name='firstName' value={iData.firstName}onChange={handleData}></input>
<label>Last Name: </label>
<input type="text" name='lastName' value={iData.lastName}onChange={handleData}></input>
<button onClick={handleSubmit}>Submit</button>
<button style={{margin:'20px'}} onClick={handleUpdate}>Update</button>
<button style={{margin:'10px'}} onClick={handleDelete}>Delete</button>

</>
  )
}

export default AxioPost
