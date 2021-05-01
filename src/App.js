import React from "react";
import PropTypes from 'prop-types';


function App() {
  
  const profiles = [
    {userNmae:"shoiti",age:25},
    {userNmae:"123",age:32},
    {userNmae:"5",age:222},
  
  ];

  return (
    <React.Fragment>
      {
        profiles.map((profile,index)=>{
          return <User name={profile.userNmae} age={profile.age} key={index}/>
        })
      }
    </React.Fragment>
  );
}



const User =(props)=>{
  return <div> Hi, my name is {props.name}, and I'm {props.age} years old.</div>
}

User.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}
export default App;
