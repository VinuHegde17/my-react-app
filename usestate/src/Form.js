import React, { useState } from 'react'

function Form() {
    const[form,setForm]=useState({
    firstName: 'Anil',
    lastName: 'Kumar',
    email: 'anilkumar@sculpture.com',
  });
  return (
    <div>
      <label>First Name
        <input type="text"
        value={form.firstName}
        onChange={e=>{
            setForm({...form,firstName:e.target.value})
        }}
        />
      </label>
<br />
      <label>Last Name
        <input type="text"
        value={form.lastName}
        onChange={e=>{
            setForm({...form,lastName:e.target.value})
        }}
        />
      </label>
<br />
      <label>Email
        <input type="text"
        value={form.email}
        onChange={e=>{
            setForm({...form,email:e.target.value})
        }}
        />
      </label>
<p>
    {form.firstName} {' '}
    {form.lastName} {' '}
    {form.email}
</p>

    </div>
  )
}

export default Form
