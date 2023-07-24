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
