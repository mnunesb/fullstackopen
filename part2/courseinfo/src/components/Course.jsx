const Course = ({course})=> {
    const Header = ({ course }) => <h1>{course.name}</h1>
    
    const Part = ({ parts }) => 
      <p>
        {parts.name} {parts.exercises}
      </p>
    
    const Content = ({ parts }) => 
    <>
      {parts.map((parts, id) => 
        <Part
          key={id}
          parts={parts} 
        />
      )}              
    </>
  

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((accumulator, currentPart) => accumulator + currentPart.exercises, 0);
  
    return (
      <div>
        Total of {totalExercises} exercises
      </div>
    );
  };
  
return (
    <div>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
)
}

export default Course