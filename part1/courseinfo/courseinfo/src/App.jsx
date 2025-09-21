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
      <Part content={parts[0].name} exercise={parts[0].exercises} />
      <Part content={parts[1].name} exercise={parts[1].exercises} />
      <Part content={parts[2].name} exercise={parts[2].exercises} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App