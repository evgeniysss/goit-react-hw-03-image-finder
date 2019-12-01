/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import stylesImageGallery from './ImageGallery.module.css';

const ImageGallery = ({ items, onOpenModalWindow }) => {
  return (
    <ul className={stylesImageGallery.ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem
          onOpenModalWindow={onOpenModalWindow}
          key={item.id}
          imageItem={item}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onOpenModalWindow: PropTypes.func.isRequired,
};
