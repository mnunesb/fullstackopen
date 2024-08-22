import axios from 'axios';
import React from 'react';


const Form = ({newName, handleNameChange, newNumber, handleNumberChange, setNewName, setNewNumber,persons, setPersons })=>{

    const addName = (event) => {
        event.preventDefault();
        if (find(newName) === true || newName === '') {
          alert('Name is empty or is already included');
          setNewName('');
          return 0;
        }
        if (find(newNumber) === true || newNumber === '') {
          alert('Number is empty or is already included');
          setNewNumber('');
          return 0;
        } else {
          const personObject = {
            name: newName,
            number: newNumber,
          };
          axios
            .post('http://localhost:3001/persons', {...personObject, id : persons.length+1})
            .then(()=>{
              setPersons(persons.concat(personObject));
              setNewName('');
              setNewNumber('');
            }
            )
            }
        };

    return(
        <form onSubmit={addName}>
        <h2>Add new contact</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="number">Number: </label>
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form;