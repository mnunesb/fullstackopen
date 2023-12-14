const Course = ({course})=> {
    const Header = ({ course }) => <h1>{course.name}</h1>
    
    const Part = ({ part }) => 
      <p>
        {part.name} {part.exercises}
      </p>
    
    const Content = ({ parts }) => 
    <>
      {parts.map((part, index) => 
        <Part
          key={index}
          part={part} 
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