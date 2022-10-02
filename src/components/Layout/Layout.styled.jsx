import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing(4)};
`;
