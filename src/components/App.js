import React, { Component } from "react";



const App = ()=>(<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = { count: 0 }
    // 初期化時以外で上記方法で値を入れない　必ず set.state を使用する
  }
  handlePlusButton = ()=>{
    
    this.setState({count: this.state.count +1})
    // set state を実行することでレンダーされる
  }
  handleminusButton = ()=>{
    this.setState({count: this.state.count -1})
  }
  render(){
    return (
      <React.Fragment>
        <div>Count : {this.state.count}</div>
        <button onClick={this.handlePlusButton}>
          +1
        </button>
        <button onClick={this.handleminusButton}>
          -1
        </button>
      </React.Fragment>
    
    );
  }

}


export default App;
