import React, { useState } from 'react'

// 第4問
// inputを入力しEnterキーが押されたら、下記validationを行う。OKならtodosに追加せよ
// todosはリストで表示せよ
// 必須
// 10文字以内
function D() {
  const [todos, setTodos] = useState([]);
  
  return (
    <div>
      <p>Todo入力：<input type='text'/></p>
      <p>エラーメッセージはここ</p>
      <ul>
        <li>ここにTodoを出す</li>
      </ul>
    </div>
  );
}

export default D;