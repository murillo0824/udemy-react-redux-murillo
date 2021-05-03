import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
// ストアを作成するための関数をインポートしている
import { Provider } from 'react-redux'
// 全コンポーネントへストアを渡すための関数
// これを使用することで、ステートをバケツリレーしなくてすむ
import './index.css';
import reducer from './reducers'

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer)
// ストアを作成して　reducer を引数として持たせる、
// 全てのステートをこの唯一のReducerへ入れる


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
