const Header = ( {course} ) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content} {props.exercise}</p>
    </div>
  )
}

const Content = ( {parts} ) => {
  return (
    <div>
      <Part content={parts[0].content} exercise={parts[0].exercise} />
      <Part content={parts[1].content} exercise={parts[1].exercise} />
      <Part content={parts[2].content} exercise={parts[2].exercise} />
    </div>
  )
}

const Total = ( {total} ) => {
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const info = [
    {content: 'Fundamentals of React', exercise: 10},
    {content: 'Using props to pass data', exercise: 7},
    {content: 'State of a component', exercise: 14} 
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={info} />
      <Total total={info[0].exercise + info[1].exercise + info[2].exercise} />
    </>
  )
}

export default App