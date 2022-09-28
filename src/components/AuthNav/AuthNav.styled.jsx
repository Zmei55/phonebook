import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div``;

export const Navlink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding-top: ${props => props.theme.spacing(1)};
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(3)};
  font-weight: 700;
  color: ${props => props.theme.colors.first};
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.first};
  border-radius: 28px;

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.first};
  }

  :not(:last-child) {
    margin-right: 20px;
  }
`;
