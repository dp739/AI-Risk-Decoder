import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './styles/components/preferences.css';
import './styles/components/category-card.css';
import './styles/components/button.css'
import './styles/components/risk-box.css'

function RiskPage() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  function handleBack() {
    navigate('/main')
  }

  const RISKS = [
    'Representation & Toxicity Risks',
    'Misinformation Risks',
    'Information & Safety Risks',
    'Malicious Use Risks',
    'Human Autonomy & Integrity Risks',
    'Socioeconomic & Environmental Risks'
  ]

  return (
    <>
      <h1>Risk page ~ company</h1>

      <div className="risk_container">
        <ul className="risk_boxes">
          {RISKS.map((r, i) => (
            <li className="risk_box" key={i}>
              <div className="left">
                <span className="bullet" />
                <span className="label">{r}</span>
              </div>
              <button
                className="action"
                onClick={() => {
                  /* replace with real per-risk route or modal when available */
                  console.log('View details for', r)
                }}
              >
                View
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button className="submit-btn" onClick={() => navigate('/main')}>
        Back to main
      </button>
    </>
  )
}

export default RiskPage
