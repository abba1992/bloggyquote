import React from 'react';
import classes from './Modal.module.css'

const Modal = (props) => {
    return (
        <div className={classes.Modal}
            style={{
                opacity: props.modalShow ? '1' : '0',
                transform: props.modalShow ? 'translateY(0)' : 'translateY(-100vh)'
            }}>
            {props.children}
            <button className={classes.Close} onClick={props.modalClose}>Close</button>
        </div>
    )
}


export default Modal;