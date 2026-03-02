import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RiskPage from "./risk-page";
import MainPage from "./main-page";
import InputPage from "./Input-page";
import { UserPreferencesProvider } from "./contexts/UserPreferencesContext";


function App() {
  return (
    <BrowserRouter>
      <UserPreferencesProvider>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/risk" element={<RiskPage />} />
          <Route path="/" element={<InputPage />} />
        </Routes>
      </UserPreferencesProvider>
    </BrowserRouter>
  )
}

export default App
