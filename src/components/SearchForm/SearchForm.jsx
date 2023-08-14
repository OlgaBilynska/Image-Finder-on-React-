import css from './SearchForm.module.css';
import { ImSearch } from 'react-icons/im';

export default function SearchForm({ onChange, onFormSubmit, value }) {
  return (
    <form className={css.searchForm} onSubmit={onFormSubmit}>
      <button type="submit" className={css.searchFormButton}>
        <ImSearch style={{ marginRight: 8 }} />
        <span className={css.searchFormButtonLabel}>Search</span>
      </button>
      <input
        className={css.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="query"
        value={value}
        onChange={onChange}
      />
    </form>
  );
}
