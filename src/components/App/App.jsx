import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './App.styled';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ModalWindow from '../Modal/Modal';
import Search from '../Searchbar/Searchbar';

class App extends Component {
  state = {
    search: ''
  };

  handleSearchSubmit = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <Container>
        <Search onSubmit={this.handleSearchSubmit} />
        <ImageGallery search={search} />
        <Button />
        <Loader />
        <ModalWindow />
        <ToastContainer hideProgressBar />
      </Container>
    );
  }
}

export default App;
