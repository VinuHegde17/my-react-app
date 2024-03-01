import React, { useCallback, useState } from 'react';

function HcallBck() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div style={styles.container}>
            <h1>Callback Example</h1>
            <p style={styles.count}>Count: {count}</p>
            <ChildComponent onClick={increment} />
        </div>
    );
}

function ChildComponent({ onClick }) {
    return <button style={styles.button} onClick={onClick}>Increment Count</button>;
}
export default HcallBck;

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        maxWidth: '300px',
        margin: '0 auto',
        marginTop: '50px',
    },
    count: {
        fontSize: '24px',
        marginBottom: '20px',
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
};

