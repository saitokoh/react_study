import React, { useState } from 'react'

// 第3問
// inputからフォーカスアウトしたら下記をチェックし、エラーメッセージを表示せよ
// 必須
// 10文字以内
function C() {
  const [message, setMessage] = useState('');

  const validate = e => {
    const value = e.target.value
    if (value === '') {
      setMessage('ニックネームを入力してください')
    } else if (value.length > 10) {
      setMessage('ニックネームは10文字以内で入力してください')
    } else {
      setMessage()
    }
  }
  
  return (
    <div>
      <p>ニックネーム：<input type='text' onBlur={validate}/></p>
      <p>{message}</p>
    </div>
  );
}

export default C;