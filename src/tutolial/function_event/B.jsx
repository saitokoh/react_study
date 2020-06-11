import React, { useState } from 'react'

// 第2問
// ボタンをクリックしたら、カウントアップせよ
function B() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>カウント：{count}</p>
      <button>ボタン</button>
    </div>
  );
}

export default B;