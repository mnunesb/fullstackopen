import React, { useState } from 'react';
import Search from './components/Search';
import Form from './components/Form'
import DisplayInfo from './components/DisplayInfo'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 2498771125 },
    { name: 'Barto Hellas', number: 12498771125 },
    { name: 'Marcello Nunes', number: 2498776125 },
    { name: 'Darcy Ribeiro', number: 998771125 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

 

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
