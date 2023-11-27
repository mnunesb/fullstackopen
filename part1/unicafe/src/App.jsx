import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const updateGood = () =>{
  setGood(good +1);
}

const updateNeutral = () =>{
  setNeutral(neutral +1);
}

const updateBad = () =>{
  setBad(bad +1);
}

const Button = (props)=>{
  return(
  <button onClick={props.onSmash}>{props.text}</button>
  );
}

  return (  
    <div>
      <h1>Give Feedback</h1>
      <Button onSmash={updateGood} text='Good'/>
      <Button onSmash={updateNeutral} text='Neutral'/>
      <Button onSmash={updateBad} text='Bad'/>
      <h1>Statistics</h1>
      <div>Good = {good}</div>
      <div>Neutral = {neutral}</div>
      <div>Bad = {bad}</div>
    </div>
  )
}

export default App