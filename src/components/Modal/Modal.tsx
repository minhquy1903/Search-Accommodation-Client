import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

interface Props {
  show: boolean;
  hide: () => void;
}

const Modal: React.FC<Props> = ({ children, hide, show }) =>
  show
    ? ReactDOM.createPortal(
        <div className='modal'>
          <div className='modal-overlay' onClick={hide} />
          <div className='modal-body'>{children}</div>
        </div>,
        document.body,
      )
    : null;

export default Modal;
