import React from 'react';
import formService from '../services/form'




const DisplayInfo = ({persons, newSearch, setPersons})=>{


const handleDelete = (id) => {
  if (window.confirm('Are you sure you want to delete this contact?')) {
    formService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
        console.log("delete called");
      })
      .catch(error => {
        console.error("Error deleting contact:", error);
      });
  }
};

const displayName = persons.filter((person) =>
  person.name.toLowerCase().includes(newSearch.toLowerCase())
)
.map((person, index) => (
  <li key={index}>
    {person.name} {person.number}
    <button onClick={()=>handleDelete(person.id)}>Delete Contact</button>
  </li>
));
    
    return(
        <ul>{displayName}</ul>
    )
}

export default DisplayInfo