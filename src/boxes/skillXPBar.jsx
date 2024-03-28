import { useState, useEffect } from "react"

const SkillXPBar = ({exp, nextLevel}) =>{

    const width =  (exp/nextLevel) * 400
    console.log(exp)

    return (
        <div style={{
            width: `${width}px`,
            height: '10px',
            border: '2px solid black',
            display: 'flex',
            flexDirection: 'column', // Stack elements vertically
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black'
        }}>
            
        </div>
    );


}

export default SkillXPBar