import styled from '@emotion/styled';
import {
  MdPhoneForwarded,
  MdEditNote,
  MdOutlineDeleteOutline,
} from 'react-icons/md';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover,
  :focus {
    border-bottom: 1px solid ${props => props.theme.colors.first};
  }

  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: ${props => props.theme.spacing(2)};
`;

export const Name = styled.div`
  display: block;
  font-weight: 700;
`;

export const Number = styled.div`
  display: block;
  margin-left: auto;
`;

export const ButtonsContainer = styled.div``;

export const Button = styled.button`
  border-radius: ${props => props.theme.borderRadius};
  border-color: transparent;
  cursor: pointer;

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.activeBorder};
    background-color: ${props => props.theme.colors.activeButton};
  }

  :not(:last-child) {
    margin-right: 12px;
  }
`;

export const CallIcon = styled(MdPhoneForwarded)``;
export const UpdateIcon = styled(MdEditNote)``;
export const DeleteIcon = styled(MdOutlineDeleteOutline)``;
