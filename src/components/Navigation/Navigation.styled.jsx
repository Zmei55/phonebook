import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navlink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: ${props => props.theme.spacing(3)};
  font-weight: 700;
  color: rgb(59, 59, 59);

  &.active {
    color: ${props => props.theme.colors.first};
  }
`;
