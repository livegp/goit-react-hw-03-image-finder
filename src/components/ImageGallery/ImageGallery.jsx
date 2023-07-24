import PropTypes from 'prop-types';
import React from 'react';

import Container from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ data, onClick }) {
  const selectItem = id => {
    const selectedImage = data.find(image => image.id === id);
    if (selectedImage) {
      onClick(selectedImage);
    }
  };

  return (
    data && (
      <Container>
        {data.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.id}
            onClick={selectItem}
          />
        ))}
      </Container>
    )
  );
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ImageGallery;
