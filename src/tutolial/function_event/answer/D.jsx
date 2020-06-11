import React, { useState } from 'react'

// 第4問
// inputを入力しEnterキーが押されたら、下記validationを行う。OKならtodosに追加せよ
// todosはリストで表示せよ
// validationエラーはメッセージを表示せよ
// 必須
// 10文字以内
function D() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState('');
  const [message, setMessage] = useState();

  const handleEditingTodo = e => {
    setEditingTodo(e.target.value)
  }

  const addTodos = e => {
    if (e.key !== 'Enter') return
    
    const value = e.target.value
    if (value === '') {
      setMessage('Todoを入力してください')
    } else if (value.length > 10) {
      setMessage('Todoは10文字以内で入力してください')
    } else {
      setMessage('')
      setEditingTodo('')
      setTodos([...todos, value])
    }
  }
  
  return (
    <div>
      <p>
        Todo入力：
        <input type='text' id="inputTodo"
          onKeyUp={addTodos}
          value={editingTodo}
          onChange={handleEditingTodo}/>
      </p>
      <p>{message}</p>
      <ul>
        {todos.map((todo,i) => <li key={i}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default D;