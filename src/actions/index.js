//action  Javaスクリプトのオブジェクト
//活動
//アプリケーションの中で、何が起きたかを表す。
//type というキーをもつオブジェクト、また、そのValueはユニークでなければいけない



// Reducer でも使用するため、ここで定義することで再利用している
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const DOUBLE = 'DOUBLE'

// アクションを返す関数をアクションクリエーターという
// type increment を返すアクションクリエイターが下記
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
