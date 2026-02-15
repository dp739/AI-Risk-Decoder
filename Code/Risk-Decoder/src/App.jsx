import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RiskPage from "./risk-page";
import MainPage from "./main-page";
import InputPage from "./Input-page";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/risk" element={<RiskPage />} />
        <Route path="/" element={<InputPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
