import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';

function InputPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>AI risk decoder ~ user input page</h1>
      <nav>
      <Link to="/main">main page</Link>
      </nav>
    </>
  )
}

export default InputPage
