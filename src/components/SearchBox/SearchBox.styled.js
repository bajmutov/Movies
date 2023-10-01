import styled from 'styled-components';

export const InputNameMovie = styled.input`
  display: inline-block;
  width: 50%;
  padding: 8px;
  font: inherit;
  font-size: 20px;
  border: 1px solid grey;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 70px;
  height: 40px;
  margin-left: 10px;
  border: 1px solid grey;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.3);
  border-radius: 3px;

  &:hover {
    opacity: 1;
    box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;
