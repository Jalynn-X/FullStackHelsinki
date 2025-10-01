import { useState } from 'react'

// Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.
const Statistics = (props) => {
  const all = () => props.good + props.neutral + props.bad
  const average = () => (props.good * 1 + props.neutral * 0 + props.bad * -1) / all()
  const positive = () => props.good / (props.good + props.neutral + props.bad) * 100

  if (all() === 0) {
    return (
      <div>
      No feedback given
      </div>
    )
  }

  return (
    <div>
    good {props.good} <br />
    neutral {props.neutral} <br />
    bad {props.bad} <br />
    all {all()} <br />
    average {average()} <br />
    positivie {positive()} %
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App