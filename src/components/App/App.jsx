import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageInfo from '../ImageInfo/ImageInfo';
import css from './App.module.css';

export default class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageInfo query={this.state.query} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
