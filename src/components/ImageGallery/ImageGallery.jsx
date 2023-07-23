import Container from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ gallery }) {
  return (
    <Container>
      {gallery.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
        />
      ))}
    </Container>
  );
}

export default ImageGallery;
