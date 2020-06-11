import React, { useState } from 'react'

// 第3問
// inputからフォーカスアウトしたら下記をチェックし、エラーメッセージを表示せよ
// 必須
// 10文字以内
function C() {
  
  return (
    <div>
      <p>ニックネーム：<input type='text'/></p>
      <p>エラーメッセージはここ</p>
    </div>
  );
}

export default C;