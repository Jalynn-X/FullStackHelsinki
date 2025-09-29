import { useState } from 'react'

// Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = () => good + neutral + bad
  const average = () => (good*1+ neutral*0 + bad*(-1))/(good + neutral + bad)
  const positive = () => good / (good + neutral + bad) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      good {good} <br />
      neutral {neutral} <br />
      bad {bad} <br />
      all {all()} <br />
      average {average()} <br />
      positivie {positive()} %
    </div>
  )
}

export default App