import React, { useState } from 'react'

// 第3問
// isActiveがtrueなら「あたり」、falseなら「はずれ」とpタグで表示する処理を完成させよ
// v-ifでもv-showでもどっちのパターンでもおｋ
function C() {
  const [isActive, setActive] = useState(true);

  return (
    <div>
      <p>あたり</p>
    </div>
  );
}

export default C;