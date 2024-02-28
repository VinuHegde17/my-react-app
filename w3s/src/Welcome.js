import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome Page</h1>
      <p style={styles.description}>Welcome to our application!</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <button type="submit" style={styles.button}>Back</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
  },
  button: {
    width: '100%',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Welcome;
