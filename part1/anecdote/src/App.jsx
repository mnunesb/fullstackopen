import { useState, useEffect } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [voteArray, setVoteArray] = useState([]);

  useEffect(() => {
    newArrayZero();
  }, []);


  const newAnecdote = () => {
    const rand = Math.floor(Math.random() * anecdotes.length);
    setSelected(rand);
  }

  const newArrayZero = () => {
    const newArray = []
    for (let i = 0; i < anecdotes.length; i++) {
      newArray.push(0);
    }
    setVoteArray(newArray);
  }

  useEffect(() => {
 
  }, [voteArray]);


  const newVote = () => {
    setVoteArray(prevState => {
      const auxArray = [...prevState];
      auxArray[selected] += 1;
      console.log(auxArray); // Log the updated array
      return auxArray; // Return the updated array
    });
  };
  

  return (
    <div>
      {anecdotes[selected]}
      <div>It has {voteArray[selected]} votes</div>
      <button onClick={newAnecdote}>New Anecdote</button>
      <button onClick={newVote}>vote</button>
    </div>
  );
};

export default App;
