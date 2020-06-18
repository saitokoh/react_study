import React, { useState, useEffect } from 'react'
import '../style.scss'

// 子コンポーネント
function Modal(props) {
  const closeModal = () => {
    props.setOpen(false)
  }

  return (
    <>
      <div className={["modal-background", props.isOpen && 'open'].join(' ')} onClick={closeModal}></div>
      <div className={['modal', props.isOpen && 'open'].join(' ')}>
        <div className="modal-title">{props.title}<span onClick={closeModal}>×</span></div>
        <div className="modal-content">
          {props.children}
        </div>
        <div className="button-area">
          <button className="cancel-button" onClick={closeModal}>{props.cancelButtonLabel}</button>
          <button onClick={props.exec}>{props.execButtonLabel}</button>
        </div>
      </div>
    </>
  );
}

export default Modal;