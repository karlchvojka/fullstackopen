// Framework Imports
import { useState } from 'react'

// Statistics Components
const Statistics = ({ good, neutral, bad }) => {
  // Helper functions
  const calcAll = good + bad + neutral
  const calcAvg = (good * 1 + neutral * 0 + bad * (-1))/calcAll
  const calcPos = parseFloat(good / calcAll) * 100
  return (
    <p>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}<br/>
      all {calcAll}<br/>
      average {calcAvg}<br/>
      positive {calcPos} %
    </p>
  )
}

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
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
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
