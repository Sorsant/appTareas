import React from 'react'
import ReactDOM from 'react-dom'
import style from './modalStyle.module.css'
const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className={style.ModalBackground}>
            {children}
        </div>,
        document.getElementById("modal")
    )
}

export default Modal
