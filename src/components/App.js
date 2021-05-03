import React, { Component } from "react";
import {connect} from 'react-redux';
import {increment,decrement} from '../actions';



// const App = ()=>(<Counter></Counter>)

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = { count: 0 }
  //   // 初期化時以外で上記方法で値を入れない　必ず set.state を使用する
  // }


  /*
  handlePlusButton = ()=>{
    
    this.setState({count: this.state.count +1})
    // set state を実行することでレンダーされる
  }
  handleminusButton = ()=>{
    this.setState({count: this.state.count -1})
  }
  */
  render(){
    const props = this.props;

    return ( 
      <React.Fragment>
        <div>value : {props.value}</div>
        <button onClick={props.increment}>
          +1
        </button>
        <button onClick={props.decrement}>
          -1
        </button>
      </React.Fragment>
    
    );
  }

}

const mapStateToProps = state =>({value:state.count.value})
const mapDispathToProps = dispatch => ({
  increment:()=> dispatch(increment()),
  decrement:()=> dispatch(decrement()),


})

export default connect(mapStateToProps, mapDispathToProps)(App)

