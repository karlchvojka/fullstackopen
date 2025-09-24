// Framework imports
import { useState } from 'react'

// Component imports
import Person from './components/Person'

const App = () => {
  // State Declarations
  const [persons, setPersons] = useState([
    { 
      name: 'Arto hellas',
      number: '777-222-3449',
      id: '1' 
    },
    { 
      name: 'Test this', 
      number: '202-200-1304',
      id: '2'
    }
  ])

  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');

  // Helper Functions
  
  const cleaned = (str) => { return str.split(' ').join('') };

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNum,
      id: String(persons.length + 1)
    }
   
    const existingName = persons.map(person => {return cleaned(person.name)})
    const existingNumb = persons.map(person => {return cleaned(person.number)})
    const existing = [...existingName, ...existingNumb];
   
    console.log(existing);
    console.log('existing name: ', !existing.includes(cleaned(newName)));
    console.log('existing numb: ', !existing.includes(cleaned(newNum)));

    if(!existing.includes(cleaned(newName)) && !existing.includes(cleaned(newNum))) {
      const newPersons = persons.concat(personObject)
      setPersons(newPersons)
      setNewName('')
      setNewNum('')
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handlePhoneChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}

export default App
