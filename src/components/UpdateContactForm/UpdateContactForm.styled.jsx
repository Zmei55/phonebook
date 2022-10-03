import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2``;

export const Form = styled.form`
  width: 400px;
  padding-top: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(3)};
  margin-bottom: ${props => props.theme.spacing(3)};
  border: ${props => props.theme.borderForm};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const Input = styled.input`
  width: 250px;
  border: 1px solid ${props => props.theme.colors.grey};
  outline: none;
  padding-top: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(1)};
  border-radius: ${props => props.theme.borderRadius};

  :focus {
    border-color: ${props => props.theme.colors.first};
  }
`;

export const Button = styled.button`
  width: 100px;
  border-color: transparent;
  padding-top: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;

  :hover,
  :focus {
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.first};
    background-color: ${props => props.theme.colors.first};
  }
`;
