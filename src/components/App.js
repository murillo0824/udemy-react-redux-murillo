import React from "react";

// アクションクリエイターを読み込んでいる
import NewComp from "./newComp.js";
// コンポーネントは必ずPascalCase でなければいけない

import CounterApp from "./CounterApp"
const NewC = () => <NewComp></NewComp>;
const App = () => {
  return(
    <React.Fragment>
      <CounterApp></CounterApp>
      <NewC></NewC>
    </React.Fragment>
    
  );
};
export default App




