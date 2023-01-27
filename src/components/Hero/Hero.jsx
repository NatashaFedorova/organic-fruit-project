import {
  HeroSection,
  HeroContainer,
  Title,
  Text,
  Box,
  TextForBtn,
  OrderBtn,
  OrderBtnIcon,
  List,
  Item,
  BoxForIcon,
  Info,
  Value,
  Indicator,
} from './Hero.styled';
import Icon from '../Icon/Icon';

const Hero = () => {
  return (
    <HeroSection id="about">
      <HeroContainer>
        <Title>Organic Fruit & Vegetables</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley...
        </Text>
        <Box>
          <TextForBtn>Order now</TextForBtn>
          <OrderBtn type="button">
            <OrderBtnIcon size={32} />
          </OrderBtn>
        </Box>
        <List>
          <Item>
            <BoxForIcon>
              <Icon size="32" icon="user" />
            </BoxForIcon>
            <Info>
              <Value>30K</Value>
              <Indicator>User order</Indicator>
            </Info>
          </Item>
          <Item>
            <BoxForIcon>
              <Icon size="32" icon="twoColoredStar" />
            </BoxForIcon>
            <Info>
              <Value>20K</Value>
              <Indicator>Reviews(4.8)</Indicator>
            </Info>
          </Item>
          <Item>
            <BoxForIcon>
              <Icon size="32" icon="harvest" />
            </BoxForIcon>
            <Info>
              <Value>300</Value>
              <Indicator>Items</Indicator>
            </Info>
          </Item>
        </List>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
