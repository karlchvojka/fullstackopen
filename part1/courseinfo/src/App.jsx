const Content = (props) => {
  return (
    <>
      <p>{props.part1Title} {props.part1Exer}</p>
      <p>{props.part2Title} {props.part2Exer}</p>
      <p>{props.part3Title} {props.part3Exer}</p>
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exer1 + props.exer2 + props.exer3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content
        part1Title={part1}
        part1Exer={exercises1}
        part2Title={part2}
        part2Exer={exercises2}
        part3Title={part3}
        part3Exer={exercises3}
      />
      <Total exer1={exercises1} exer2={exercises2} exer3={exercises3} />
    </div>
  )
}

export default App
