import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div``;

export const Navlink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 4px 12px;
  font-weight: 700;
  color: #2a363b;
  border: 1px solid #2a363b;
  border-radius: 28px;

  .active {
    color: #2015e8;
    background-color: #fff;
  }

  :not(:last-child) {
    margin-right: 20px;
  }
`;
