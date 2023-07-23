import { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './App.styled';
import onSearch from '../../services/api';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ModalWindow from '../Modal/Modal';
import Search from '../Searchbar/Searchbar';

class App extends Component {
  state = {
    gallery: []
  };

  handleSearchSubmit = async search => {
    try {
      const galleryData = await onSearch(search);
      this.setState({ gallery: galleryData.hits });
    } catch (error) {
      toast.error('Error fetching data:', { hideProgressBar: true });
    }
  };

  render() {
    const { gallery } = this.state;
    return (
      <Container>
        <Search onSubmit={this.handleSearchSubmit} />
        <ImageGallery gallery={gallery} />
        <Button />
        <Loader />
        <ModalWindow />
        <ToastContainer />
      </Container>
    );
  }
}

export default App;
