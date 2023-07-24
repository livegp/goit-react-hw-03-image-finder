import { Component } from 'react';
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
      onSearch(search, 1).then(data => {
        this.setState({
          data: data.hits,
          total: data.totalHits,
          loading: false
        });
      });
    }
  }

  handleSearchSubmit = search => {
    this.setState({ search });
  };

  selectItem = selected => {
    this.setState({ selected, modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  handleLoadMore = () => {
    const { search, page } = this.state;
    const nextPage = page + 1;

    this.setState({ loading: true, page: nextPage });
    onSearch(search, nextPage)
      .then(newData => {
        this.setState(prevState => ({
          data: [...prevState.data, ...newData.hits],
          loading: false
        }));
      })
      .catch(error => {
        toast.error('Error fetching data. Please try again later.');
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
