const Content = (props) => {
  return (
    <>
      <Part partName={props.part1Title} partExer={props.part1Exer} />
      <Part partName={props.part2Title} partExer={props.part2Exer} />
      <Part partName={props.part3Title} partExer={props.part3Exer} />
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.partName} {props.partExer}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exer1 + props.exer2 + props.exer3}</p>
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
    <div>
      <Header title={course} />
      <Content
        part1Title={part1.name}
        part1Exer={part1.exercises}
        part2Title={part2.name}
        part2Exer={part2.exercises}
        part3Title={part3.name}
        part3Exer={part3.exercises}
      />
      <Total exer1={part1.exercises} exer2={part2.exercises} exer3={part3.exercises} />
    </div>
  )
}

export default App
