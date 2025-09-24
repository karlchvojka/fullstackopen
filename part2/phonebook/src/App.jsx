// Framework imports
import { useState } from 'react'

// Component imports
import Person from './components/Person'

const App = () => {
  // State Declarations
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [filtered, setFiltered] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Helper Functions
  
  const cleaned = (str) => { return str.split(' ').join('') };
  const cleanedNames = persons.map(person => {return cleaned(person.number)})

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNum,
      id: String(persons.length + 1)
    }
   
    const existingNumb = persons.map(person => {return cleaned(person.number)})
    const existing = [...cleanedNames, ...existingNumb];
   
    if(!cleanedNames.includes(cleaned(newName)) && !existing.includes(cleaned(newNum))) {
      const newPersons = persons.concat(personObject)
      setPersons(newPersons)
      setNewName('')
      setNewNum('')
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleSearchChange = (event) => {
    const theTerm = event.target.value.toLowerCase();
    setSearchTerm(theTerm)
    const newData = persons.filter(person => (person.name.toLowerCase()).includes(cleaned(theTerm)));
    setFiltered(newData);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with<input onChange={handleSearchChange} /></p>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePhoneChange} /><br/>
          number: <input value={newNum} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        { searchTerm.length >= 1 ? ( 
            filtered.map(person => <Person key={person.id} person={person} />)
          ) : (
            persons.map(person => <Person key={person.id} person={person} />)
          )
        }
      </div>
    </div>
  )
}

export default App
