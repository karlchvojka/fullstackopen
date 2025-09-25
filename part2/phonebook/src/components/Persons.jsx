// Component Imports
import Person from './Person'

const Persons = ({ filtered, persons, searchTerm, deleteHandler }) => {
  return (
    <div>
      {
        searchTerm.length >= 1 ? (
          filtered.map(person => (
            <Person 
              key={person.id} 
              person={person}
              removePerson={deleteHandler}
            />
          ))
        ) : (
          persons.map(person => (
            <Person 
              key={person.id} 
              person={person}
              removePerson={deleteHandler}
            />
          ))
        )
      }
    </div>
  )
}

export default Persons
