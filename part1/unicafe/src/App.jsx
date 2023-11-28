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


const calculatePositive = ()=>{
  return ((good/total)*100)
}

const calculateAverage = ()=>{
  return ((good - bad)/total)
}

const StatisticsLine = (props)=>{
  return(
    <div>
      {props.name} = {props.value}
    </div>
  )
}

 const Statistics = ()=>{
  if(total == 0){
    return(
      <p>No feedback given</p>
    );
  }
    else{
 return(
    <div>
      <h1>Statistics</h1>
      <StatisticsLine name = "Good" value = {good}></StatisticsLine>
      <StatisticsLine name = "Neutral" value = {neutral}></StatisticsLine>
      <StatisticsLine name = "Bad" value = {bad}></StatisticsLine>
      <StatisticsLine name = "Total" value = {total}></StatisticsLine>
      <StatisticsLine name = "Average" value = {calculateAverage()}></StatisticsLine>
      <StatisticsLine name = "Positive" value = {calculatePositive() + "%"}></StatisticsLine>
    </div>
  );
 }
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