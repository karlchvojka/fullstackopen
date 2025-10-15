import Header from './Header'
import Part from './Part'
import Total from './Total'

const Course = ({ course }) => {

    const total = course.parts.reduce((acc, curr) => acc + curr.exercises, 0)
  return (
    <>
      <Header title={course.name} />
      {
        course.parts.map(part => 
          <p key={part.id}>{part.name} {part.exercises}</p>
        )}
      <Total total={total} />
    </>
  )
}

export default Course
