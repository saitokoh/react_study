import React, { useState, useEffect } from 'react'

// 第1問
// くじゲームの実装
// mount時にboolsに一つだけ"あたり"で、あとは"はずれ"の文字列が入った長さ5の配列をランダムでセットせよ
// ヒント：1～5の数字をランダムで出力する処理
// Math.floor(Math.random() * 5) + 1
function A() {
  const [bools, setBools] = useState([]);
  const check = e => {
    alert(e.target.dataset.bool)
  }

  return (
    <div>
      {bools.map((bool, i) => (
        <button key={i} data-bool={bool} onClick={check}>ボタン{i}</button>
      ))}
    </div>
  );
}

export default A;