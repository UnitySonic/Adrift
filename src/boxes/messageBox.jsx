import React from "react";
import ConfirmButton from "../buttons/confirmButton";
import { useState, useEffect } from "react";


const MessageBox = ({ messages }) => {

    const [messageIndex, setMessageIndex] = useState(0);
    const handleConfirm = () => {
        setMessageIndex(prevIndex => prevIndex + 1);
    };


    return (
        <div style={{
            width: '400px',
            height: '400px',
            border: '2px solid black',
            display: 'flex',
            flexDirection: 'column', // Stack elements vertically
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <p>{messages[messageIndex]}</p>
            <div style={{ marginTop: 'auto' }}> {/* Use margin-top:auto to push ConfirmButton to the bottom */}
                {messageIndex < messages.length && <ConfirmButton onClick={handleConfirm} />}
            </div>
        </div>
    );
}

export default MessageBox