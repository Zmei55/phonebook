import styled from '@emotion/styled';

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

export const Button = styled.button`
  border-radius: ${props => props.theme.borderRadius};
  border-color: transparent;
  cursor: pointer;

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.activeBorder};
    background-color: ${props => props.theme.colors.activeButton};
  }
`;
