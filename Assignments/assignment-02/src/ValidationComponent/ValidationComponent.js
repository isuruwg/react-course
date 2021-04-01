import React from 'react';

const validationComponent = (props) => {
    let lengthComment = "too short"
    if (props.textLength >= 5){
        lengthComment = "long enough"
    }
    return (
        <div>
            <p> Text {lengthComment}</p>
        </div>
    )
};

export default validationComponent;