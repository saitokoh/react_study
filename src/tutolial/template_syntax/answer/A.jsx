import React, { useState } from 'react'

// 第1問
// Hello,に続いて、自分の名前を出力せよ (例：Hello, Saikoh)
// 名前はuseStateを用いて、stateとして定義すること
function A() {
  const [name, setName] = useState('Saikoh');
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
}

export default A;