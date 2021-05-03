// reducer  の　index.js ではアプリケーションないのReducer を結合している


import { combineReducers } from 'redux'
// 結合を行うためのモジュールをインポートしている

import count from './count'
// カウントアプリの状態

export default combineReducers({ count })
// export default combineReducers({ foo,  bar, baz })
//　複数の場合は上記