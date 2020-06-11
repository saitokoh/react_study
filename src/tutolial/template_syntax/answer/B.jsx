import React, { useState } from 'react'

// 第2問
// inputに自分の名前が入力された状態で表示せよ
// 名前はuseStateを用いて、stateとして定義すること
function B() {
  const [name, setName] = useState('Saikoh')
  return (
    <div>
      <input type='text' defaultValue={name}/>
    </div>
  );
}

export default B;