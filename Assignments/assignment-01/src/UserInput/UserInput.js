import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: '#3CBC8D',
        color: 'white'
    };
    return <input 
        type="text"
        style={style} 
        onChange={props.changed} 
        value={props.username}></input>;
};

export default userInput;