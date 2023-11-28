import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] =useState(0)

const updateGood = () =>{
  const newGood = good + 1;
  setGood(newGood);
  const newTotal = total + 1;
  setTotal(newTotal);

}

const updateNeutral = () =>{
  const newNeutral = neutral + 1;
  setNeutral(newNeutral);
  const newTotal = total + 1;
  setTotal(newTotal);

}

const updateBad = () =>{
  const newBad = bad +1;
  setBad(newBad);
  const newTotal = total + 1;
  setTotal(newTotal);

}

const Button = (props)=>{
  return(
  <button onClick={props.onSmash}>{props.text}</button>
  );
}

const Average = () =>{
  if(total == 0){
    return(
      <div> Average = 0</div>
    );
  } else{
  return(
    <div>
      Average = {(good - bad)/total}
    </div>
  );
 }
}

const Positive = ()=>{
  if(total == 0){
    return(
      <div> Positive = 0</div>
    );
  } else{
    return(
      <div>
        Positive: {(good/total)*100}%
      </div>
  );
}
}

 const Statistics = ()=>{
  return(
    <div>
      <h1>Statistics</h1>
      <div>Good = {good}</div>
      <div>Neutral = {neutral}</div>
      <div>Bad = {bad}</div>
      <div>Total = {total}</div>
      <Average></Average>
      <Positive></Positive>
    </div>

  );
 }
  return (  
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button onSmash={updateGood} text='Good'/>
        <Button onSmash={updateNeutral} text='Neutral'/>
        <Button onSmash={updateBad} text='Bad'/>
        <Statistics></Statistics>
      </div>
    </div>
  )
}

export default App