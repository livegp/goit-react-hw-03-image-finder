/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Gallery from './ImageGalleryItem.styled';

function ImageGalleryItem({ src, alt, onClick }) {
  const handleClick = () => {
    onClick(alt);
  };
  return (
    <Gallery>
      <img src={src} alt={alt} onClick={handleClick} />
    </Gallery>
  );
}

export default ImageGalleryItem;
