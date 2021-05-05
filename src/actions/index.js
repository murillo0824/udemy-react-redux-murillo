//action  Javaスクリプトのオブジェクト
//活動
//アプリケーションの中で、何が起きたかを表す。
//type というキーをもつオブジェクト、また、そのValueはユニークでなければいけない



// Reducer でも使用するため、ここで定義することで再利用している
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const DOUBLE = 'DOUBLE'


// Todo ようのアクション
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const addTodo = text =>({
  type:"ADD_TODO",
  payload: {
    text
  }
})
export const toggleTodo = index =>({
  type:"TOGGLE_TODO",
  payload: {
    index
  }
})

export const setVisibilityFilter = ()=>({
  type:"SET_VISIBILITY_FILTER",
})



// アクションを返す関数をアクションクリエーターという
// type increment を返すアクションクリエイターが下記s
// increment -> return type "INCREMENT"　のようにアクションを返している
export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const double = () => ({
    type: "DOUBLE"
});
