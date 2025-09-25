// Library Imports
import axios from 'axios'

// Framework Imports
import { useState, useEffect } from 'react'

// Services Imports
import personService from './services/persons'

// Component imports
import Filter from './components/Filter'
import Notification from './components/Notification'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  // State Declarations
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [newValue, setNewValue] = useState({ name: '', number: ''});
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('some error happened...');

  // On first render
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  // Helper Functions
  const cleaned = (str) => { return str.split(' ').join('') };
  const cleanedNames = persons.map(person => {return cleaned(person.name)})

  const addPerson = (event) => {
    event.preventDefault()
    
    const personObject = {
      name: newValue.name,
      number: newValue.number,
    }
  
    // Check if Number exists in DB
    const numbExists = persons.some((person) => person.number === personObject.number)
    const nameExists = persons.some((person) => person.name === personObject.name)
    const thePerson = persons.find((person) => person.name === personObject.name)

    // If number does not exist, and the name does not exist add entry to DB
    if(!numbExists && !nameExists ) {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewValue({ name: '', number: ''})
          setErrorMessage(`${response.data.name} has been added`);
          setTimeout(() => { setErrorMessage(null)}, 5000)
        })
    } 
    
    // Else If the Name DOES exist and the number DOES NOT, update the current entry
    else if(nameExists && !numbExists) {
        if (window.confirm(`${personObject.name} is already added to the phonebook, replace the old number with the new one?`)) {
          personService
            .update(thePerson.id, { ...thePerson, number: personObject.number })
            .then(response => {
              const newData = persons.map((person) => {
                if (person.name === personObject.name) {
                  return { ...person, number: personObject.number}
                }
                return person
              })
              
              setPersons(newData);
              setNewValue({ name: '', number: ''})
              setErrorMessage(`${response.data.name} has been updated`)
              setTimeout(() => { setErrorMessage(null) }, 5000)
            })
        }
    } 

    // Flagged when The name exists and the number exists (
    else {
      alert("Number is already in the phonebook.");
      setNewValue({ name: '', number: ''})
    }
  }

  // Remove Person
  const removePerson = (id) => {
    const thePerson = persons.find((person) => person.id === id)

    if (window.confirm(`Delete ${thePerson.name}?`)) {
      personService
        .remove(id)
        .then(response => {
          const newData = persons.filter(person => person.id !== id)
          setPersons(newData);
        })
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
      <Notification message={errorMessage} />
      <Filter onChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm onSubmit={addPerson} handleChange={handleValueChange} values={newValue} />
      <h2>Numbers</h2>
      <Persons filtered={filtered} persons={persons} searchTerm={searchTerm} deleteHandler={removePerson}/>
    </div>
  )
}

export default App
