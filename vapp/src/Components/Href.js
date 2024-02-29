import React, { useRef, useState } from 'react';

function Href() {
    const inputRef = useRef(null);
    const [typedText, setTypedText] = useState('');

    const focusInput = () => {
        inputRef.current.focus();
    };

    const handleChange = (event) => {
        setTypedText(event.target.value);
    };

    return (
        <div style={styles.container}>
            <input
                ref={inputRef}
                type="text"
                onChange={handleChange}
                placeholder="Type something..."
                style={styles.inputField}
            />
            <button
                type="button"
                onClick={focusInput}
                style={styles.focusButton}
            >
                Focus Input
            </button>
            <h1 style={styles.typedText}>{typedText}</h1>
        </div>
    );
}

export default Href;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        marginBottom: '10px',
        padding: '5px',
        fontSize: '16px',
    },
    focusButton: {
        padding: '10px 20px',
        border: 'none',
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
    },
    typedText: {
        marginTop: '20px',
        fontSize: '24px',
    },
};
