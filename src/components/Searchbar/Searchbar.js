/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylesSearchbar from './Searchbar.module.css';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleQueryChange = evt => {
    this.setState({ query: evt.target.value });
  };

  handleQuerySubmit = evt => {
    evt.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={stylesSearchbar.Searchbar}>
        <form
          onSubmit={this.handleQuerySubmit}
          className={stylesSearchbar.SearchForm}
        >
          <button type="submit" className={stylesSearchbar.SearchFormButton}>
            {/* <span className={stylesSearchbar.SearchFormButtonLabel} /> */}
          </button>
          <input
            className={stylesSearchbar.SearchFormInput}
            type="text"
            autoComplete="off"
            // autoFocus="on"
            placeholder="Enter some text"
            value={query}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
