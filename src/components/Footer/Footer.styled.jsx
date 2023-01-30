import { Container } from 'components/constants/Container.styled';
import { TextDefault } from 'components/constants/DefaultStyle.styled';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

export const FooterBox = styled.footer`
  padding-top: 66px;
  padding-bottom: 118px;
  background-color: ${props => props.theme.colors.backgroudAccent};
`;

export const FooterContainer = styled(Container)`
  display: flex;
`;

export const BoxAbout = styled.div``;

export const Logo = styled.a`
  display: inline-block;
  margin-bottom: 30px;
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.25);
  }
`;

export const Text = styled(TextDefault)`
  text-align: justify;
  width: 345px;
  margin-right: 157px;
`;

export const Box = styled.div``;

export const Title = styled.h3`
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: 24px;
  line-height: 1.29;
  color: ${props => props.theme.colors.title};
`;

export const List = styled.ul`
  margin-right: 143px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Link = styled.a`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.28;
  color: ${props => props.theme.colors.text};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const ContactsBox = styled.div``;

export const ContactsText = styled.p`
  margin-bottom: 25px;

  & a {
    line-height: 1.27;
    border-bottom: 1px solid ${props => props.theme.colors.text};
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & a:hover,
  & a:focus {
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }
`;

export const SocialMediaList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const SocialMediaItem = styled.li``;

export const SocialMediaLink = styled.a`
  color: ${props => props.theme.colors.title};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const FacebookIcon = styled(FaFacebookF)`
  color: inherit;
`;

export const TwitterIcon = styled(BsTwitter)`
  color: inherit;
`;

export const InstagramIcon = styled(BsInstagram)`
  color: inherit;
`;
