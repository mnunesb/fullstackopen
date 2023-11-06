const Header = ({course}) =>{
  return(
    <div>
      <h1>{course}</h1>
    </div>
  );
}

const Part = ({parts, i}) => {
  return(
    <div>
      <p>
        {parts[i].name}: {parts[i].exercises}
      </p>
    </div>
  );
}

const Content =({parts}) => {
  return(
    <div>
      <Part parts={parts} i='0'/>
      <Part parts={parts} i='1'/>
      <Part parts={parts} i='2'/>
    </div>
  );
}

const All = ({exercises}) =>{
  return(
    <div>
      <p>Number of exercises: {exercises}</p>
    </div>
  );
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
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
  ];

  const totalExercises = parts.reduce((acumulator,part) => acumulator = acumulator + part.exercises, 0 );

  return (
    <div>
      <Header course={course}/>
      <Content parts= {parts} />
      <All exercises={totalExercises} />
    </div>
  )
}

export default App