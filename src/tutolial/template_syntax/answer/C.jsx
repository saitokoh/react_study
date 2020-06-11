import React, { useState } from 'react'

// 第3問
// isActiveがtrueなら「あたり」、falseなら「はずれ」とpタグで表示する処理を完成させよ
// v-ifでもv-showでもどっちのパターンでもおｋ
function C() {
  const [isActive, setActive] = useState(true);

  return (
    <div>
      {/* v-ifの書き方その１ */}
      <p>{isActive ? 'あたり' : 'はずれ'}</p>
      {/* v-ifの書き方その２ */}
      {isActive ? <p>あたり</p> : <p>はずれ</p>}
      {/* v-showの書き方 */}
      <p style={{ display: isActive ? 'initial' : 'none' }}>あたり</p>
      <p style={{ display: !isActive ? 'initial' : 'none' }}>はずれ</p>
    </div>
  );
}

export default C;