import { Component } from 'react';

import Container from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import onSearch from '../../services/api';

class ImageGallery extends Component {
  state = {
    gallery: []
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.props;
    if (prevProps.search !== search) {
      onSearch(search).then(data => {
        this.setState({ gallery: data.hits });
      });
    }
  }

  render() {
    const { gallery } = this.state;
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
}

export default ImageGallery;
