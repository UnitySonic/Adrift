import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessageBox from './boxes/messageBox'

function App() {
  const [count, setCount] = useState(0)
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



  const messages = [
    "You awaken in a dark room!",
    "You hear strange noises around you...",
    "A faint light appears in the distance..."
  ];



  return (
    <>
      <div>
        <p>Current Date and Time:</p>
        <p>{dateTime.toLocaleString()}</p>
        <MessageBox messages={messages} />
      </div>

    </>
  )
}

export default App
