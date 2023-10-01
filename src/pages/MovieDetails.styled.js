import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBackLink = styled(Link)`
  display: block;
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 65px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  display: flex;
`;

export const DescrWrap = styled.div`
  padding-top: 40px;
  margin-left: 25px;
`;

export const GenresWrap = styled.div`
  display: flex;
  gap: 10px;
`;
