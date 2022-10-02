import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  padding: 0px;
  border: none;
  border-radius: 50%;
  color: ${props => props.theme.colors.first};
  background-color: inherit;
  cursor: pointer;
`;
