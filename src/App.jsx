import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import messageBox from './boxes/messageBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <messageBox />
      </div>

    </>
  )
}

export default App
