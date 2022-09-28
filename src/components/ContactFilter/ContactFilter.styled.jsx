import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
