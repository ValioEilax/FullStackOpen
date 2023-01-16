// osa 1 -  1.14*: anekdootit step3

import { useState } from 'react'

const Anecdote = ({ anecdote, likes }) =>
  <div>
    <p>{anecdote}</p>
    <p>👍{likes}</p>
  </div>

const MostLikes = ({ points, anecdotes }) => {
  const copyPoints = [...points]
  let max = Math.max(...points)
  let maxIndex = 0

  if (max === 0) {
    return (
      <div>No likes yet!</div>
    )
  }


  for (let i = 0; i < copyPoints.length; i++) {
    if (max === copyPoints[i]) {
      maxIndex = i
    }
  }

  return (
    <Anecdote anecdote={anecdotes[maxIndex]} likes={points[maxIndex]} />
  )
}

const App = () => {
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

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdoteClick = () => setSelected(Math.trunc(Math.random() * anecdotes.length))

  const likeClick = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} likes={points[selected]} />
      <button onClick={likeClick}>👍Like</button>
      <button onClick={nextAnecdoteClick}>next anecdote</button>
      <h1>Anecdote with most likes</h1>
      <MostLikes points={points} anecdotes={anecdotes} />
    </div >
  )
}

export default App