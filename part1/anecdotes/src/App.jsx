import { useState } from 'react'

const App = () => {
    // Data
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // State Definitions
  const [selected, setSelected] = useState(0)
  const [scores, setScores] = useState(Array(anecdotes.length).fill(0))

  // Helper Functions

  const handleRandomClick = () => {
    const getRand = Math.floor(Math.random() * (anecdotes.length - 0 + 0)) + 0
    setSelected(getRand)
  };

  const handleRando = () => {
    let newScores = [...scores]
    newScores[selected] += 1
    setScores(newScores)
  }
  return (
    <div>
      <p>{anecdotes[selected]}<br/> has {scores[selected]} votes</p>
      <button onClick={handleRando}>vote</button>
      <button onClick={handleRandomClick}>Inspire Me!</button>
    </div>
  )
}

export default App