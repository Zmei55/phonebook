import styled from '@emotion/styled';
import { MdOutlineDeleteOutline } from 'react-icons/md';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  :hover,
  :focus {
    border-bottom: 1px solid ${props => props.theme.colors.activeBorder};
  }

  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(1)};
  }
`;

export const DeleteBtn = styled.button`
  border-radius: ${props => props.theme.borderRadius};
  border-color: transparent;
  cursor: pointer;

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.activeBorder};
    background-color: ${props => props.theme.colors.activeButton};
  }
`;

export const DeleteIcon = styled(MdOutlineDeleteOutline)``;
