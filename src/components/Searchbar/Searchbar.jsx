import { Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';

import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel
} from './Searchbar.styled';

function Search({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit(values.search);
    actions.resetForm();
  };

  return (
    <Searchbar>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchFormButton type="submit" value="submit">
            <AiOutlineSearch />
          </SearchFormButton>
          <SearchFormLabel htmlFor="search" />
          <SearchFormInput
            type="text"
            id="search"
            name="search"
            placeholder="Search"
          />
        </SearchForm>
      </Formik>
    </Searchbar>
  );
}

export default Search;
