import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding-top: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(3)};
  border: ${props => props.theme.borderForm};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const Input = styled.input`
  width: 250px;
  border-color: transparent;
  outline: none;
  padding-top: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(1)};
  border-radius: ${props => props.theme.borderRadius};

  :focus {
    border-color: ${props => props.theme.colors.activeBorder};
  }
`;

export const Button = styled.button`
  width: 100px;
  border-color: transparent;
  padding-top: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.activeBorder};
    background-color: ${props => props.theme.colors.activeButton};
  }
`;
