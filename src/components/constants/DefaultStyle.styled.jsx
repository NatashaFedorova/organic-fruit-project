import styled from 'styled-components';

export const Main = styled.main``;

export const Footer = styled.footer``;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  background-color: transparent;
`;

export const TextDefault = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.67;
`;

export const DefaultSectionTitle = styled.h2`
  margin-bottom: 20px;
  font-family: 'Rosario', sans-serif;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSizes.large};
  line-height: 1.29;
  color: ${props => props.theme.colors.title};
`;
