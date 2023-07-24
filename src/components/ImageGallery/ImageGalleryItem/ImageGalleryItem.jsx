/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';

import Gallery from './ImageGalleryItem.styled';

function ImageGalleryItem({ id, src, alt, onClick }) {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <Gallery>
      <img src={src} alt={alt} onClick={handleClick} />
    </Gallery>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ImageGalleryItem;
