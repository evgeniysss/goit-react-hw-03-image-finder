/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import stylesModal from './Modal.module.css';

const Modal = ({ largeImage, closeModalWindow }) => {
  return (
    <div className={stylesModal.Overlay} onClick={closeModalWindow}>
      <div className={stylesModal.Modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  closeModalWindow: PropTypes.func.isRequired,
};
