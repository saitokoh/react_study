import React, { useState, useEffect } from 'react'
import './style.scss'

// 子コンポーネント
function Modal(props) {
  const [isOpen, setOpen] = useState(true)
  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      <div className={["modal-background", isOpen && 'open'].join(' ')} onClick={closeModal}></div>
      <div className={['modal', isOpen && 'open'].join(' ')}>
        <div className="modal-title">モーダルタイトル<span onClick={closeModal}>×</span></div>
        <div className="modal-content">
          <p>モーダルの内容</p>
        </div>
        <div className="button-area">
          <button className="cancel-button" onClick={closeModal}>キャンセル</button>
          <button>保存する</button>
        </div>
      </div>
    </>
  );
}

export default Modal;