import React from "react";


const messageBox = () => {
    return (
        <div style={{
            width: '200px',
            height: '100px',
            border: '2px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <p>This is a rectangle with a message inside!</p>
        </div>
    );


}

export default messageBox