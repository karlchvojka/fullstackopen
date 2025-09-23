// Framework imports
import { useState } from 'react'

// Component imports
import Person from './components/Person'

const App = () => {
  // State Declarations
  const [persons, setPersons] = useState([
    { name: 'Arto hellas', id: 1 },
    { name: 'Test this', id: 2}
  ])

  const [newName, setNewName] = useState('');

  // Helper Functions
  
  const cleaned = (str) => { return str.split(' ').join('') };

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: String(persons.length + 1)
    }
   
    const existing = persons.map(person => {return cleaned(person.name)});
   
    if(!existing.includes(cleaned(newName))) {
      const newPersons = persons.concat(personObject)
      setPersons(newPersons)
      setNewName('')
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handlePhoneChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}

export default App
