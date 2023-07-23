import { Component } from 'react';

import Button from './Button/Button';
import Container from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import ModalWindow from './Modal/Modal';
import onSearch from '../../services/api';

class ImageGallery extends Component {
  state = {
    gallery: null,
    loading: false
  };

  componentDidUpdate(prevProps) {
    const { search } = this.props;
    if (prevProps.search !== search) {
      this.setState({ loading: true });
      onSearch(search).then(data => {
        this.setState({ gallery: data.hits, loading: false });
      });
    }
  }

  render() {
    const { gallery, loading } = this.state;
    return (
      <>
        {loading && <Loader />}
        {gallery ? (
          <>
            <Container>
              {gallery.map(image => (
                <ImageGalleryItem
                  key={image.id}
                  src={image.webformatURL}
                  alt={image.tags}
                />
              ))}
            </Container>
            <Button />
            <ModalWindow />
          </>
        ) : null}
      </>
    );
  }
}

export default ImageGallery;
