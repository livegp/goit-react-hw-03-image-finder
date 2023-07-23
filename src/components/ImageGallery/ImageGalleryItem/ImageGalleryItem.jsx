import Gallery from './ImageGalleryItem.styled';

function ImageGalleryItem({ src, alt }) {
  return (
    <Gallery>
      <img src={src} alt={alt} />
    </Gallery>
  );
}

export default ImageGalleryItem;
