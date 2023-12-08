const Course = ({course})=> {

    const Header = ({ course }) => <h1>{course.name}</h1>
    
    const Part = ({ part }) => 
      <p>
        {part.name} {part.exercises}
      </p>
    
    const Content = ({ parts }) => 
      <>
        <Part
          part={parts[0]} 
        />
        <Part
          part={parts[1]} 
        />
        <Part
          part={parts[2]} 
        />      
      </>

const Total = ({ part }) => {
    const totalExercises = part.reduce((accumulator, currentPart) => accumulator + currentPart.exercises, 0);
  
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
        <Total part={course.parts}/>
    </div>
)
}

export default Course