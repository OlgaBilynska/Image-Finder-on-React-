import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';
import SearchForm from 'components/SearchForm/SearchForm';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return toast.error('Choose a category');
    }

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <SearchForm
          onChange={this.handleNameChange}
          onFormSubmit={this.handleSubmit}
          value={this.state.query}
        />
      </header>
    );
  }
}
