import React, { useState } from 'react'
import Modal from './Modal'

// 汎用的なモーダルコンポーネントを作ってみよう
// 第1問
// モーダルの下記要素を親から指定できるようにせよ
// モーダルタイトル
// キャンセルボタンラベル
// 登録ボタンラベル

// 第2問
// モーダルの中身を親から指定できるようにせよ

// 第3問
// モーダルの登録ボタンの動作を親からできるようんせよ

// 第4問
// モーダルの開閉を外から操作できるようにせよ

function A() {

  return (
    <div>
      <Modal />
    </div>
  );
}

export default A;