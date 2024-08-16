import React from 'react';


const DisplayInfo = ({persons, newSearch})=>{
    const displayName = persons.filter((person) =>
  person.name.toLowerCase().includes(newSearch.toLowerCase())
)
.map((person, index) => (
  <li key={index}>
    {person.name} {person.number}
  </li>
));

    
    return(
        <ul>{displayName}</ul>
    )
}

export default DisplayInfo