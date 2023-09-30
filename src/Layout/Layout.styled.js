import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  padding: 15px;
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;

  &.active {
    color: orange;
    text-decoration: underline;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 60px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
