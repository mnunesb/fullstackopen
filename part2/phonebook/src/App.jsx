import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault();
    if(find(newName) === true || (newName) === ''){
      alert("name is empty or is already included")
      setNewName('')
      return(0);
    } else{
      const personObject = {
        name: newName
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const displayName = persons.map((person, index) => <li key={index}>{person.name}</li>)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          <input value={newName} onChange={handleNameChange}/>
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