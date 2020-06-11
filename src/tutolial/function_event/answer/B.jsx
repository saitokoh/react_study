import React, { useState } from 'react'

// 第2問
// ボタンをクリックしたら、カウントアップせよ
function B() {
  const [count, setCount] = useState(0);
  
  const countUp = () => {
    setCount(count+1);
  }
  
  return (
    <div>
      <p>カウント：{count}</p>
      <button onClick={countUp}>ボタン</button>
    </div>
  );
}

export default B;