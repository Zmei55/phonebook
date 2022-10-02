// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onClose }) {
  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyDown);
  // }, [handleKeyDown]);

  // useEffect(() => {
  //   window.removeEventListener('keydown', handleKeyDown);
  // }, [handleKeyDown]);

  // const handleKeyDown = event => {
  //   if (event.code === 'Escape') {
  //     onClose();
  //   }
  // };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Backdrop>,
    modalRoot
  );
}
