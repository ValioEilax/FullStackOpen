// osa 1 - 1.5: kurssitiedot step5

const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      <Part part1={parts[0].name} exercises1={parts[0].exercises} />
      <Part part2={parts[1].name} exercises2={parts[1].exercises} />
      <Part part3={parts[2].name} exercises3={parts[2].exercises} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <>
      <p>Number of exercises: {
        parts[0].exercises +
        parts[1].exercises +
        parts[2].exercises
      }</p>
    </>
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
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App