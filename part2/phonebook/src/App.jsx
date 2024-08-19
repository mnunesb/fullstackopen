import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Form from './components/Form'
import DisplayInfo from './components/DisplayInfo'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

useEffect(()=>{
  axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      setPersons(response.data)
    })
},[]);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
    console.log({ newSearch });
  };



  return (
    <div>
      <h1>Phonebook</h1>
      <Search 
        searchValue={newSearch}
        handleSearch={handleSearch} />
      <Form 
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <DisplayInfo persons={persons} newSearch={newSearch}/>
    </div>
  );
};

export default App;
