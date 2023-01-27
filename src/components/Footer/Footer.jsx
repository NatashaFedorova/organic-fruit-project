import Icon from '../Icon/Icon';
import {
  FooterBox,
  FooterContainer,
  BoxAbout,
  Logo,
  Text,
  Box,
  Title,
  List,
  Item,
  Link,
  ContactsBox,
  ContactsText,
  SocialMediaList,
  SocialMediaItem,
  SocialMediaLink,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterBox id="contacts">
      <FooterContainer>
        <BoxAbout>
          <Logo href="/">
            <Icon size="56px" icon="planet" />
          </Logo>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer...
          </Text>
        </BoxAbout>
        <Box>
          <Title>Navigation</Title>
          <List>
            <Item>
              <Link href="#about">About us</Link>
            </Item>
            <Item>
              <Link href="#service">Service</Link>
            </Item>
            <Item>
              <Link href="#menu">Menu</Link>
            </Item>
          </List>
        </Box>
        <Box>
          <Title>Resources</Title>
          <List>
            <Item>
              <Link href="#reviews">Reviews</Link>
            </Item>
            <Item>
              <Link href="#download">Download app</Link>
            </Item>
            <Item>
              <Link href="/">News</Link>
            </Item>
          </List>
        </Box>
        <ContactsBox>
          <Title>Contact us</Title>
          <ContactsText>
            Email: <Link href="mailto:oyasim@email.com">oyasim@email.com</Link>
          </ContactsText>
          <SocialMediaList>
            <SocialMediaItem>
              <SocialMediaLink
                href="https://uk-ua.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon size={24} />
              </SocialMediaLink>
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaLink
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon size={24} />
              </SocialMediaLink>
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaLink
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={24} />
              </SocialMediaLink>
            </SocialMediaItem>
          </SocialMediaList>
        </ContactsBox>
      </FooterContainer>
    </FooterBox>
  );
};

export default Footer;
