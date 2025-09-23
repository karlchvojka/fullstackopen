import Header from './Header'
import Part from './Part'

const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      {
        course.parts.map(part => 
          <p key={part.id}>{part.name} {part.exercises}</p>
        )}
    </>
  )
}

export default Course
