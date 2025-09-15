// Framework Imports
import { useState } from 'react'

// Component Imports
import Button from './components/elements/Button.jsx'
import Statistics from './components/features/Statistics.jsx'
// Main App Component
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Helper Functions
  const handleGoodClick = () => {
    const uptGood = good + 1
    setGood(uptGood)
  }

  const handleNeutClick = () => {
    const uptNeut = neutral + 1
    setNeutral(uptNeut)
  }

  const handleBadClick = () => {
    const uptBad = bad + 1
    setBad(uptBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutClick} />
      <Button text="bad" onClick={handleBadClick} />
      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App
