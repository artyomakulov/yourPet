import { React, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MdClear } from 'react-icons/md';
import { AuthNav } from '../AuthNav/AuthNav';
import css from './AttentionModal.module.css';

const modalRoot = document.querySelector('#modal-root');

const ModalWindow = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modalWindow}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal window"
          className={css.closeModalButton}
        >
          <MdClear className={css.icon} />
        </button>
        <div>
          <h2 className={css.title}>Attention</h2>
          <p className={css.text}>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
          <div className={css.authContainer}>
            <AuthNav />
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalWindow;
