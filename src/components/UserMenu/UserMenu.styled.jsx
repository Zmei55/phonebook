import styled from '@emotion/styled';
import { MdLogout } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const IMG = styled.img`
  margin-right: ${props => props.theme.spacing(2)};
`;

export const UserName = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;

export const LogOutBtn = styled.button`
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.spacing(1)};

  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    border: 1px solid ${props => props.theme.colors.first};
    background-color: ${props => props.theme.colors.first};
    color: ${props => props.theme.colors.white};
  }
`;

export const LogOutIcon = styled(MdLogout)`
  fill: ${props => props.theme.colors.grey};
  width: 20px;
  height: 20px;

  :focus,
  :hover {
    fill: ${props => props.theme.colors.white};
  }
`;
