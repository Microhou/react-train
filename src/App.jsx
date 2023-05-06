import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './component/MyButton.jsx';
import Game from './component/Game'

function App() {
  const [count, setCount] = useState(0)
  
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Counters that update separately</h1>
      <MyButton count={count} handleClick={handleClick}/>
      <Game/>
    </>
  )
}

export default App
