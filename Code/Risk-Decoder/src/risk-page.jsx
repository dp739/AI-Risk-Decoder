import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './styles/components/preferences.css';
import './styles/components/category-card.css'; 
import './styles/components/button.css'
import './styles/components/risk-box.css'
import './styles/components/risk-layout.css'

import safety from './Proper_icons/information&safety.svg'
import malicious from './Proper_icons/malicious.svg'
import autonomy from './Proper_icons/human_autonomy&integrity.svg'
import misinformation from './Proper_icons/misinformation.svg'
import toxicty from './Proper_icons/representation&toxicity.svg'
import enviroment from './Proper_icons/socioeconomics&enviromental.svg'

function RiskPage() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  function handleBack() {
    navigate('/main')
  }

  const RISKS = [
    ['Advanced models are now capable of discovering zero-day vulnerabilities and assisting in complex industrial intrusions','#d9a3a3', malicious],
    ['OpenAI\'s 2026 contract with the Pentagon risks integrating unpredictable generative models into classified defense networks','#d9a3a3', autonomy],
    ['Corporate definitions of "imminent threat" create a lethal gap where AI identifies violent ideation but fails to alert authorities in time','#edcca8', safety],
    ['Generative models continue to perpetuate "techno-patriarchy" by disproportionately hyper-sexualizing female imagery','#edcca8', toxicty],
    ['Rolling out Western-centric AI in low-income countries - like the "Horizon 1000" health initiative - risks undermining local data sovereignty','#c5e6c9', autonomy],
    ['The "agreeable" nature of AI leads it to validate a user\'s harmful intent rather than challenging it, creating a "digital groomer" effect','#c5e6c9', toxicty]
  ]

  return (
    <>
      <div className="risk_page">
        <div className="risk_column">
          <h1>OpenAI Risks</h1>

          <div className="risk_container">
            <ul className="risk_boxes">
              {RISKS.map(([r,c,icon], i) => (
                <li className="risk_box" key={i} style={{background:c}}>
                  <div className="left">
                    <img className="icon" src={icon} alt={`icon`} />
                    <span className="label">{r}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button className="submit-btn" onClick={() => navigate('/main')}>
            Back to main
          </button>
        </div>

        <aside className="news_article">
          <div className="news_article__badge">Breaking News</div>
          <h2>The "War for Classified AI": OpenAI Seals Pentagon Deal as Anthropic is Blacklisted</h2>
          <p>
            OpenAI has officially secured a massive contract to integrate its AI models into the U.S. Department of Defense's classified networks, stepping in just as the Trump administration blacklisted rival Anthropic over safety disputes. 
            While Anthropic was designated a "supply chain risk" for refusing to drop safeguards against fully autonomous weaponry and mass surveillance, OpenAI successfully negotiated terms by technically embedding these "red lines" into its cloud architecture rather than just the legal contract.
          </p>
        </aside>
      </div>
    </>
  )
}

export default RiskPage
