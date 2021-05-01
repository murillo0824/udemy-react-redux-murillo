import React from "react";



function App() {
  
  const profiles = [
    {userNmae:"shoiti",age:"25"},
    {userNmae:"shoko",age:"32"},
    {userNmae:"noName"},
  
  ];

  return (
    <React.Fragment>
      {
        profiles.map((profile,index)=>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </React.Fragment>
  );
}



const User =(props)=>{
  return <div> Hi, my name is {props.name}, and I'm {props.age} years old.</div>
}

User.defaultProps ={
  age:100
}
export default App;
