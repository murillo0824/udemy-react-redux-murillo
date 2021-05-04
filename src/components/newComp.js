import React, { Component } from "react";


const nameList = [
  {
    name:"murlllo",
    age:"26",
    sex:"male"
  },
  {
    name:"shoko",
    age:"33",
    sex:"female"
  }
]

class NewComp extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>名前リスト</h1>
        {
          nameList.map((value, index)=>{
            return <NameList name={value.name} age={value.age} sex={value.sex} key={index} />
          })
        }
      </React.Fragment>
    );
  }
}


const NameList = (props)=>{
  return <div>name:{props.name} , age:{props.age}, sex:{props.age}</div>
}

export default NewComp;
