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

const Total = ( {parts} ) => {
  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises }</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App