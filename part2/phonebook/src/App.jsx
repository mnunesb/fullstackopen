import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: 2498771125},
    {name: 'Barto Hellas', number: 12498771125},
    {name: 'Marcello Nunes', number: 2498776125},
    {name: 'Darcy Ribeiro', number: 998771125},
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addName = (event) =>{
    event.preventDefault();
    if(find(newName) === true || (newName) === ''){
      alert("name is empty or is already included")
      setNewName('')
      return(0);}
    if(find(newNumber) === true || (newNumber) === ''){
      alert("Number is empty or is already included")
      setNewNumber('')
      return(0);
      } else{
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }
  
  const handleSearch = (event) =>{
    setNewSearch(event.target.value)
    console.log({newSearch});
  }

  const displayName = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase())).map((person, index) => <li key={index}>{person.name} {person.number}</li>);

  
  return (
    <div>
      <h1>Phonebook</h1>
      <label htmlFor="search">Search: </label>
      <input value={newSearch} onChange={handleSearch}></input>
      <form onSubmit={addName}>
        <h2>Add new contact</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input value={newName} onChange={handleNameChange}></input>
        </div>
        <div>
          <label htmlFor="name">Number: </label>
          <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul> {displayName} </ul>

    </div>
  )
}

export default App