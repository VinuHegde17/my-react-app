import React, { useEffect, useState } from 'react';
import './Form.css'; 
function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  const handleData = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password)
      alert("All fields are mandatory");
    else
      setFlag(true);
  };

  return (
    <>
      <div className='form-container'>
        <h1 className='header'>Registration Form</h1>
        {flag ? <h2 className='success-message'>Hello {inputData.name} you have registered successfully</h2> : null}
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type="text" placeholder='Enter your name' name='name' value={inputData.name} onChange={handleData} />
          </div>
          <div className='form-group'>
            <input type="text" placeholder='Enter your email' name='email' value={inputData.email} onChange={handleData} />
          </div>
          <div className='form-group'>
            <input type="password" placeholder='Enter your password' name='password' value={inputData.password} onChange={handleData} />
          </div>
          <div className='form-group'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
