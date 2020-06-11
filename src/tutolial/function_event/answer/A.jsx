import React from 'react'

// 第1問
// ボタンをクリックしたらalertで「くりっく！」と表示せよ
function A() {
  const showAlert = () => {
    alert('くりっく！')
  }
  
  return (
    <div>
      <button onClick={showAlert}>ボタン</button>
    </div>
  );
}

export default A;