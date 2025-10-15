const Person = ({ person, removePerson }) => {
  return <div>{person.name} {person.number} <button onClick={() => removePerson(person.id)}>Delete</button></div>
}

export default Person
