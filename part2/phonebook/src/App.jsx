import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: 2498771125}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  const displayName = persons.map((person, index) => <li key={index}>{person.name} {person.number}</li> )
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
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
      <ul>
        {displayName}
      </ul>
    </div>
  )
}

export default App