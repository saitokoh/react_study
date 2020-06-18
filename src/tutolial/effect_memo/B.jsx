import React, { useState, useEffect } from 'react'

// 第2問
// タイトルと作者で本のリストから部分一致検索をして画面に表示せよ
// 検索のタイミングは、各文字列が変更されたとき
// 作者の検索窓は別途作成してください
// useEffectを使って実装すること
function B() {
  // 本のマスタ
  const [books, setBooks] = useState([
    { title: '銀河鉄道の夜', author: '宮沢賢治' },
    { title: '坊ちゃん', author: '宮沢賢治' },
    { title: 'ノルウェイの森', author: '村上春樹' },
    { title: '海辺のカフカ', author: '村上春樹' },
    { title: '容疑者Xの献身', author: '東野圭吾' },
    { title: 'マスカレード・ホテル', author: '東野圭吾' }]);
  // 検索後の本のリスト
  const [searchedBooks, setSearchedBooks] = useState([]);
  // タイトル検索文字列
  const [searchTitle, setSearchTitle] = useState('');

  return (
    <div>
      タイトル：<input value={searchTitle} onChange={e => setSearchTitle(e.target.value)}></input>
      <ul>
        {searchedBooks.map((b, i) => (
          <li key={i}><span>{b.title}</span><span style={{ marginLeft: '1.5rem' }}>{b.author}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default B;