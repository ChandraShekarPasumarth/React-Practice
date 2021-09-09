import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';


function HookCounterOneUseEffect() {

    const[ count,setCount] = useState(0);
    const[ name,setName ]= useState('');

    // Gets executed after every time component renders
    useEffect( () =>{
        console.log("useEffect - Updating document title")
        document.title = `You CLicked ${count } times`
    },[count])  // we want to execute this useEffect only if the property sent in the array changes
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick = { () => setCount(count + 1) }>Click {count} times </button>
        </div>
    )
}

export default HookCounterOneUseEffect
