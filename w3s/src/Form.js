import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [theme, setTheme] = useState('light'); 
  const [largeText, setLargeText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/welcome');
  };

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); 
  };

  return (
    <div style={theme === 'light' ? styles.lightTheme : styles.darkTheme}>
      <h1 style={{ textAlign: 'center' }}>Form Page</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
          <label style={styles.label}>Theme:</label>
          <label style={styles.toggleLabel}>
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
            />
            Dark/Light
          </label>
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone Number:</label>
          <input
            type="number"
            value={phoneNumber}
            placeholder="Enter your number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Age:</label>
          <input
            type="number"
            value={age}
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Gender:</label>
          <div>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Select State:</label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            style={styles.input}
          >
            <option value="" disabled hidden>
              Select State
            </option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
          </select>
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Large Text:</label>
          <textarea
            value={largeText}
            placeholder="Describe youself...."
            onChange={(e) => setLargeText(e.target.value)}
            style={{ ...styles.input, height: '150px' }}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  radioLabel: {
    marginRight: '20px',
  },
  toggleLabel: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '10px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  lightTheme: {
    background: '#f5f5f5',
    color: '#333',
    minHeight: '100vh',
    padding: '20px',
  },
  darkTheme: {
    background: '#333',
    color: '#fff',
    minHeight: '100vh',
    padding: '20px',
  },
};

export default Form;
