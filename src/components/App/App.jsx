import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './App.styled';
import onSearch from '../../services/api';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Searchbar from '../Searchbar/Searchbar';

class App extends Component {
  state = {
    search: '',
    data: [],
    loading: false,
    modal: false,
    selected: null,
    page: 1,
    total: 0
  };

  componentDidUpdate(_, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ loading: true, page: 1 });
      this.fetchData(search, 1);
    }
  }

  handleSearchSubmit = search => {
    const { search: currentSearch } = this.state;
    if (currentSearch !== search) {
      this.setState({ search });
    }
  };

  selectItem = selected => {
    this.setState({ selected, modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  handleLoadMore = () => {
    const { search, page } = this.state;
    this.fetchData(search, page + 1);
  };

  fetchData = (search, page) => {
    this.setState({ loading: true, page });

    onSearch(search, page)
      .then(newData => {
        this.setState(prevState => ({
          data:
            page === 1 ? newData.hits : [...prevState.data, ...newData.hits],
          total: newData.totalHits,
          loading: false
        }));
      })
      .catch(error => {
        toast.error(`Error fetching data: ${error.message}`);
        this.setState({ loading: false });
      });
  };

  render() {
    const { data, loading, modal, selected, total } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery data={data} onClick={this.selectItem} />
        {loading && <Loader />}
        {modal && selected && (
          <Modal
            onClose={this.closeModal}
            src={selected.largeImageURL}
            alt={selected.tags}
          />
        )}
        {!loading && data.length < total && (
          <Button onClick={this.handleLoadMore} />
        )}
        <ToastContainer hideProgressBar />
      </Container>
    );
  }
}

export default App;
