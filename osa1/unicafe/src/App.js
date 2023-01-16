// osa 1 - 1.11*: unicafe step6 

import { useState } from 'react'

const Button = ({ handleClick, text }) =>
  <button onClick={handleClick}>{text}</button>


const StatisticLine = ({ text, value }) => (
  < tr >
    <td>{text}</td>
    <td>{value}</td>
  </tr >
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <div>No feedback given!</div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="😊" value={good} />
          <StatisticLine text="🤔" value={neutral} />
          <StatisticLine text="😠" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [allValue, setValue] = useState(0)


  const increaseGood = () => {
    setAll(allClicks.concat(1))
    setValue(allValue + 1)
    setGood(good + 1)
  }
  const increaseNeutral = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setAll(allClicks.concat(-1))
    setValue(allValue - 1)
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>Give feedback!</h1>
      <Button handleClick={increaseGood} text='Good 💚' />
      <Button handleClick={increaseNeutral} text='Neutral 🟨' />
      <Button handleClick={increaseBad} text='Bad 🔴' />

      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={allClicks.length}
        average={allValue / allClicks.length}
        positive={(good / allClicks.length * 100) + ' %'} />
    </div>
  )
}

export default App