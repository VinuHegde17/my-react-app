import React from 'react'
import useOnline from '../utils/useOnline'
import useCount from '../utils/useCount';
import useFetch from '../utils/useFetch';

function A() {
    useOnline();
    const { count, increment } = useCount(0)
    const data = useFetch("https://api.github.com/users")
    console.log("Data", data);
    
    return (
        <div>
            Hi I am A {useOnline() ? "🟢" : "🔴"}
            <h2>The value is {count}</h2>
            <button onClick={increment}>INC</button>
            <br></br>
            {data && data.map((ele) => (
                <li key={ele.id}>{ele.login}</li>
            ))}
        </div>
    )
}

export default A
