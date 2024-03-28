import { useState, useEffect } from "react";
import SkillXPBar from "./skillXPBar";

const SkillBox = ({ name }) => {
    const [level, setLevel] = useState(1)
    const [nextLevelExpCost, setNextLevel] = useState(50)
    const [exp, setExp] = useState(0)
    const [dateTime, setDateTime] = useState(new Date());
    const tickRate = 1000

    useEffect(() => {
        // Update the date and time every second
        const interval = setInterval(() => {
          setDateTime(new Date());
        }, tickRate);
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
      }, []); // Empty dependency array to run this effect only once

      useEffect(() => {
        setExp(prevExp => {
            const newExp = prevExp + 5;
            if (newExp >= nextLevelExpCost) {
                setLevel(prevLevel => prevLevel + 1);
                setNextLevel(Math.ceil(nextLevelExpCost * 1.15));
                return nextLevelExpCost - newExp;
            }
            return newExp;
        });
    }, [dateTime]);

    return(
        <>
        <div style={{
            width: '400px',
            height: '150px',
            border: '2px solid black',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
                <div>
                    <p>{name}</p>
                    <p>Level: {level}</p>
                    <p>Exp: {exp}  To Next: {nextLevelExpCost-exp}</p>
                    <SkillXPBar exp = {exp} nextLevel={nextLevelExpCost}/>
                </div>
            </div>
        </>
    )





}

export default SkillBox;