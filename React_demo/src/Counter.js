import React, {Component } from 'react';

const Counter = (props)=>{
    return(
        <div>
            <h1>count:{props.count}</h1>
            <button onClick={props.increment}>INC</button>
            <button onClick={props.decrement}>DEC</button>
            <button onClick={props}>ADD MORE</button>
        </div>
    )}

    export default Counter