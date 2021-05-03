// アクションのTypeに応じてどのような状態遷移（State）を行うかを書いている
// 実際のアプリで使用するカウンターという状態

import { INCREMENT, DECREMENT, DOUBLE } from "../actions";
// アクションで定義したアクションを読み込んでいる

const initialState = {
  value: 0,
};
// 　状態の初期値を定義している（カウンターの初期値を０にしている）

const counterAction = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    case DOUBLE:
        return { value: state.value * 2 };
    default:
      return state;
  }
};
// アクションを受け取り、実際にStateを変更するReducer
// 受け取ったアクションに応じてStateを変更している
// アクションのタイプはaction.typeで拾っている
// default は初期読み込み時やリロード時の初期値


export default counterAction;
// 関数とエクスポートデフォルトを同時に定義するのがよくない