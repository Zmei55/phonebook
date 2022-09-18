import styled from '@emotion/styled';

export const Section = styled.section`
  width: 400px;
  padding-top: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(3)};
`;

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.spacing(2)};
`;
