import {Fragment} from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverLay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
}

const portalElemnt = document.getElementById('overlays')

const Modal = (props) => {
  return (
  <Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>, portalElemnt)}
    {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElemnt)}
  </Fragment>
  )
}

export default Modal