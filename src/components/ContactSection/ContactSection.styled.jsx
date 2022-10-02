import styled from '@emotion/styled';
import { MdAddCircle } from 'react-icons/md';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const AddContactIcon = styled(MdAddCircle)`
  width: 36px;
  height: 36px;
`;
