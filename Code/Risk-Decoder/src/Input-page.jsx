import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './styles/InputPage.css'

const CATEGORIES = [
  { id: 'environmental', label: 'Environmental' },
  { id: 'existential', label: 'Existential' },
  { id: 'data-privacy', label: 'Data Privacy' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'safeguards', label: 'Safeguards' },
  { id: 'malware', label: 'Malware & Cyber Warfare' },
  { id: 'user-liability', label: 'User Liability and Indemnification' },
  { id: 'biometric', label: 'Biometric & Identity Theft' },
  { id: 'child-safety', label: 'Age Compliance and Child Safety' },
]

function InputPage() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const navigate = useNavigate()

  function toggleCategory(id) {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
  }

  function handleSubmit() {
    navigate('/main')
  }

  return (
    <div className="preferences-wrapper">
      <h1>AI Risk Decoder</h1>
      <p>Select the risk categories most important to you.</p>
      <div className="preferences-container">
        {CATEGORIES.map(({ id, label }) => (
          <div
            key={id}
            className={`category-card${selectedCategories.includes(id) ? ' selected' : ''}`}
            onClick={() => toggleCategory(id)}
          >
            {label}
          </div>
        ))}
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default InputPage
