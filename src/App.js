/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import SearchBar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import { fetchItems } from './services/api';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
    isLoading: false,
    isModalWindowOpen: false,
    largeImage: '',
  };

  componentDidMount() {
    const { query, page } = this.state;
    this.getItemsFromServer(query, page);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, query, items } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.getItemsFromServer(query, page);
    }
    if (prevState.items !== items && items.length > 12) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 800);
      // window.scrollTo({
      //   top: document.documentElement.scrollHeight,
      //   behavior: 'smooth',
      // });
    }
  }

  getItemsFromServer = (query, page) => {
    this.setState({ isLoading: true });
    fetchItems(query, page)
      .then(resData =>
        this.setState(prevState => ({
          items: [...prevState.items, ...resData.data.hits],
        })),
      )
      // .then(() => this.setState({ isLoading: false }))
      .then(() =>
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 700),
      )
      .catch(err => console.log('Hey! Error:', err));
  };

  nextPage = () => {
    const { items } = this.state;
    if (items.length > 0) {
      this.setState(prevState => ({
        page: prevState.page + 1,
      }));
    }
  };

  onSubmit = queryOnSubmit => {
    this.setState({ query: queryOnSubmit, items: [], page: 1 });
  };

  openModalWindow = largeImage => {
    this.setState({ isModalWindowOpen: true, largeImage });
    window.addEventListener('keydown', this.closeModalWindow);
  };

  closeModalWindow = evt => {
    if (evt.target === evt.currentTarget || evt.keyCode === 27)
      this.setState({ isModalWindowOpen: false });
    window.removeEventListener('keydown', this.closeModalWindow);
  };

  render() {
    const { items, isLoading, isModalWindowOpen, largeImage } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery items={items} onOpenModalWindow={this.openModalWindow} />
        {isLoading && <Loader />}
        <Button onNextPage={this.nextPage} />
        {isModalWindowOpen && (
          <Modal
            largeImage={largeImage}
            closeModalWindow={this.closeModalWindow}
          />
        )}
      </>
    );
  }
}
