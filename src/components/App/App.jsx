import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './App.styled';
import ImageGallery from '../ImageGallery/ImageGallery';
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
        <ToastContainer hideProgressBar />
      </Container>
    );
  }
}

export default App;
