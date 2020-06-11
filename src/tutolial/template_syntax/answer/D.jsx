import React, { useState } from 'react'

// 第4問
// ghiblisをtableタグで全て表示せよ
function D() {
  const [ghiblis, setGhiblis] = useState([
    {year: 1984, month: 3, name: '風の谷のナウシカ'},
    {year: 1986, month: 8, name: '天空の城ラピュタ'},
    {year: 1988, month: 4, name: 'となりのトトロ'},
    {year: 1989, month: 7, name: '魔女の宅急便'},
    {year: 1992, month: 7, name: '紅の豚'},
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>公開年</th>
          <th>公開月</th>
          <th>作品名</th>
        </tr>
      </thead>
      <tbody>
        {ghiblis.map(ghibli => (
          <tr key={ghibli.name}>
            <td>{ghibli.year}</td>
            <td>{ghibli.month}</td>
            <td>{ghibli.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default D;