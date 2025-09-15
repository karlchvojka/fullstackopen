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
  const [mostVotes, setMost] = useState(0);

  // Helper Functions
  // Click Event Handlers
  const handleRandomClick = () => {
    const getRand = Math.floor(Math.random() * (anecdotes.length - 0 + 0)) + 0
    setSelected(getRand)
  };

  // Handles the voting button clicks and updating of state.
  const handleVote = () => {
    let newScores = [...scores]
    newScores[selected] += 1
    const mostVal = Math.max(...newScores);
    const mostVote = { index: newScores.indexOf(mostVal) , val: mostVal}
    setScores(newScores)
    setMost(mostVote)
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}<br/> has {scores[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleRandomClick}>Inspire Me!</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotes.index]}<br/> has {mostVotes.val} votes</p>
    </div>
  )
}

export default App