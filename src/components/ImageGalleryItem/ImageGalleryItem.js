/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import stylesImageGalleryItem from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageItem, onOpenModalWindow }) => (
  <li
    className={stylesImageGalleryItem.ImageGalleryItem}
    onClick={() => onOpenModalWindow(imageItem.largeImageURL)}
  >
    <img
      src={imageItem.webformatURL}
      alt=""
      className={stylesImageGalleryItem.ImageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  imageItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string,
  }).isRequired,
  onOpenModalWindow: PropTypes.func.isRequired,
};
