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
