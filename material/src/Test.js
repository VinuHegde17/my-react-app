import { Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';

function Test() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <Typography variant='button' sx={{ border: '1px solid red' }}>
        Hello world
      </Typography>

      <Button
        onClick={() => alert('Button 1 Clicked')}
        color='success'
        size='large'
        variant='contained'
        sx={{ margin: '3px' }}
      >
        First
      </Button>

      <Button
        onClick={() => alert('Button 2 Clicked')}
        color='error'
        size='medium'
        variant='outlined'
        sx={{ margin: '3px' }}
      >
        Second
      </Button>

      <Button
        onClick={() => alert('Button 3 Clicked')}
        color='info'
        size='small'
        variant='text'
        sx={{ margin: '3px' }}
      >
        Third
      </Button>
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          name='name'
          onChange={handleChange}
          sx={{ margin: '5px' }}
          placeholder='name'
          variant='outlined'
          type='text'
          value={inputs.name}
        />
        <br />

        <TextField
          name='email'
          onChange={handleChange}
          sx={{ margin: '5px' }}
          placeholder='email'
          variant='standard'
          type='email'
          value={inputs.email}
        />
        <br />

        <TextField
          name='password'
          onChange={handleChange}
          sx={{ margin: '5px' }}
          placeholder='password'
          variant='filled'
          type='password'
          value={inputs.password}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Test;
