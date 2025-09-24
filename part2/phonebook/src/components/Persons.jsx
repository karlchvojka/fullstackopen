// Component Imports
import Person from './Person'

const Persons = ({ filtered, persons, searchTerm }) => {
  return (
    <div>
      {
        searchTerm.length >= 1 ? (
          filtered.map(person => <Person key={person.id} person={person} />)
        ) : (
          persons.map(person => <Person key={person.id} person={person} />)
        )
      }
    </div>
  )
}

export default Persons
