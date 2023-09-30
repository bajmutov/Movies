const SearchBox = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="movieName" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
