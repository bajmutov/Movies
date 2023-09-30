import {
  InputNameMovie,
  SearchForm,
  SearchFormButton,
} from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <InputNameMovie
        type="text"
        name="movieName"
        autoFocus
        placeholder="example: Batman"
      />
      <SearchFormButton type="submit">Search</SearchFormButton>
    </SearchForm>
  );
};

export default SearchBox;
