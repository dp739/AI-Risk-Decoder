import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';

function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>AI risk decoder ~ main page</h1>
       <nav>
      <Link to="/risk">risks</Link>
      </nav>
    </>
  )
}

export default MainPage
