import React, { Component } from "react";
import { connect } from "react-redux";
// コネクト関数をインポート
import { increment, decrement, double } from "../actions";

class Counter extends Component {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        
        <div>value : {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <button onClick={props.double}>*2</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ value: state.count.value });
// ステートの情報から、このコンポーネントに必要なものをマッピングする
// どういったオブジェクト
const mapDispathToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  double: () => dispatch(double()),
});
// ディスパッチ関数
// Reducer にタイプに応じた状態遷移させる

export default connect(mapStateToProps, mapDispathToProps)(Counter);
