// Library Imports
import axios from 'axios'

// Framework imports
import { useState, useEffect } from 'react'

// Component imports
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  // State Declarations
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [newValue, setNewValue] = useState({ name: '', number: ''});
  const [searchTerm, setSearchTerm] = useState('');

  // On first render
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  // Helper Functions
  const cleaned = (str) => { return str.split(' ').join('') };
  const cleanedNames = persons.map(person => {return cleaned(person.number)})

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newValue.name,
      number: newValue.number,
      id: String(persons.length + 1)
    }
   
    const existingNumb = persons.map(person => {return cleaned(person.number)})
    const existing = [...cleanedNames, ...existingNumb];
   
    if(!cleanedNames.includes(cleaned(newValue.name)) && !existing.includes(cleaned(newValue.number))) {
      const newPersons = persons.concat(personObject)
      setPersons(newPersons)
    } else {
      alert(`${newValue.name} is already added to phonebook`);
    }
  }

  const handleValueChange = (event) => {
    setNewValue({ ...newValue, [event.target.name]: event.target.value })
  }
  
  const handleSearchChange = (event) => {
    const theTerm = cleaned(event.target.value.toLowerCase());
    setSearchTerm(theTerm)
    const newData = persons.filter(person => (cleaned(person.name.toLowerCase()).includes(theTerm)));
    setFiltered(newData);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm onSubmit={addPerson} handleChange={handleValueChange} values={newValue} />
      <h2>Numbers</h2>
      <Persons filtered={filtered} persons={persons} searchTerm={searchTerm} />
    </div>
  )
}

export default App
