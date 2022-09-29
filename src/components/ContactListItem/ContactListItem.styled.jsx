import styled from '@emotion/styled';
import { MdOutlineDeleteOutline } from 'react-icons/md';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover,
  :focus {
    border-bottom: 1px solid ${props => props.theme.colors.first};
  }

  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(1)};
  }
`;

export const ContactsContainer = styled.div`
  display: flex;

  flex-direction: column;

  margin-right: ${props => props.theme.spacing(2)};
`;

export const Name = styled.div`
  display: block;
`;

export const Number = styled.div`
  display: block;
  margin-left: auto;
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
