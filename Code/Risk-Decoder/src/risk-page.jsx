import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';

function RiskPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>AI risk decoder ~ risk page</h1>
       <nav>
      <Link to="/main">back to main page</Link>
      </nav>
    </>
  )
}

export default RiskPage
