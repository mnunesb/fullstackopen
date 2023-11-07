const Header = ({course}) =>{
  return(
    <div>
      <h1>{course}</h1>
    </div>
  );
}
const Part = ({name, exercises}) => {
  return(
    <div>
      <p>
        {name}: {exercises}
      </p>
    </div>
  );
}
const Content =(props) => {
  return(
    <div>
      <Part name={props.part1name} exercises={props.part1exercises}/>
      <Part name={props.part2name} exercises={props.part2exercises}/>
      <Part name={props.part3name} exercises={props.part3exercises}/>
    </div>
  );
}
/* const Content =({parts}) => {
  return(
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  );
} */

const All = ({exercises}) =>{
  return(
    <div>
      <p>Number of exercises: {exercises}</p>
    </div>
  );
} 


const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const totalExercises = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header course={course}/>
      <Content part1name={part1.name} part1exercises={part1.exercises} part2name={part2.name} part2exercises={part2.exercises} part3name={part3.name} part3exercises={part3.exercises}/>
      <All exercises={totalExercises} />
    </div>
  )
}

export default App