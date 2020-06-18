import React, { useState, useEffect } from 'react'

// 第3問
// 第2問をuseMemoを使用してで書き直せ
function C() {
  const [books, setBooks] = useState([
    { title: '銀河鉄道の夜', author: '宮沢賢治' },
    { title: '坊ちゃん', author: '宮沢賢治' },
    { title: 'ノルウェイの森', author: '村上春樹' },
    { title: '海辺のカフカ', author: '村上春樹' },
    { title: '容疑者Xの献身', author: '東野圭吾' },
    { title: 'マスカレード・ホテル', author: '東野圭吾' }]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchAuthor, setSearchAuthor] = useState('');

  useEffect(() => {
    setSearchedBooks(books.filter(book => {
      return book.title.indexOf(searchTitle) >= 0 && book.author.indexOf(searchAuthor) >= 0
    }));
  }, [searchTitle, searchAuthor])

  return (
    <div>
      タイトル：<input value={searchTitle} onChange={e => setSearchTitle(e.target.value)}></input>
      作者：<input value={searchAuthor} onChange={e => setSearchAuthor(e.target.value)}></input>
      <ul>
        {searchedBooks.map((b, i) => (
          <li key={i}><span>{b.title}</span><span style={{ marginLeft: '1.5rem' }}>{b.author}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default C;