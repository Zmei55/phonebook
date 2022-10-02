import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navlink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: rgb(59, 59, 59);

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(3)};
  }

  &.active {
    color: ${props => props.theme.colors.first};
  }
`;
