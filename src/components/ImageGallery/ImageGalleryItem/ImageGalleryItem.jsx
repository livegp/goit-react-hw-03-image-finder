import PropTypes from 'prop-types';

import Gallery from './ImageGalleryItem.styled';

function ImageGalleryItem({ id, src, alt, onClick }) {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <Gallery>
      <img src={src} alt={alt} onClick={handleClick} role="presentation" />
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
