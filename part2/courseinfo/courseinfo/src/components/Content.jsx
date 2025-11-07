import Part from "./Part"

const Content = ( {content} ) => {
  const total = content.reduce((sum, item) =>
    sum + item.exercises, 0)

  return (
    <div>
    {content.map(part => 
      <Part key={part.id} part={part}/>
    )}
    <p><b>total of {total} exercises</b></p>
    </div>
  )
}

export default Content