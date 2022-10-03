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
`;

export const Name = styled.div`
  display: block;
  font-weight: 700;
`;

export const Number = styled.div`
  display: block;
  margin-left: auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 25px;
  height: 25px;
  padding: 2px;
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

export const CallLink = styled.a`
  display: block;

  width: 19px;
  height: 19px;
`;

export const CallIcon = styled(MdPhoneForwarded)`
  fill: ${props => props.theme.colors.black};
  width: 19px;
  height: 19px;

  :hover,
  :focus {
    fill: ${props => props.theme.colors.first};
  }
`;

export const UpdateIcon = styled(MdEditNote)`
  width: 19px;
  height: 19px;

  :hover,
  :focus {
    fill: ${props => props.theme.colors.first};
  }
`;

export const DeleteIcon = styled(MdOutlineDeleteOutline)`
  width: 19px;
  height: 19px;

  :hover,
  :focus {
    fill: ${props => props.theme.colors.first};
  }
`;
