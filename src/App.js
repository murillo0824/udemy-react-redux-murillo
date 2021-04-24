import React from "react";

function App() {
  const greating = <div>Hi</div>
  const dom = <h1 className="bigtitle">{greating} will</h1>
  
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type ="text" onClick={()=>{console.log('clcked')}}/>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </React.Fragment>
  );
}

const Cat = ()=>{
  return(
    <div>
      <span>miau</span>
    </div>
  )
}
export default App;
