import React from 'react';
import PropTypes from 'prop-types';
import stylesButton from './Button.module.css';

const Button = ({ onNextPage }) => (
  <>
    <button type="button" className={stylesButton.Button} onClick={onNextPage}>
      Load more!
    </button>
  </>
);
export default Button;

Button.propTypes = {
  onNextPage: PropTypes.func.isRequired,
};
