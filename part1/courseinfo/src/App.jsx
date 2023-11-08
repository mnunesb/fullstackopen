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

const Content =({parts}) => {
  return(
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  );
}

const All = ({parts}) =>{
  const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return(
    <div>
      <p>Number of exercises: {totalExercises}</p>
    </div>
  );
}


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <All parts={course.parts} />
    </div>
  )
}

export default App