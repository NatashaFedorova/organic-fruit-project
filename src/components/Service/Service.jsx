import Icon from 'components/Icon/Icon';
import {
  ServiceSection,
  ServiceContainer,
  SectionTitle,
  Text,
  List,
  Item,
  BoxForIcon,
  Title,
  AboutServise,
  Info,
} from './Service.styled';

const Service = () => {
  return (
    <ServiceSection>
      <ServiceContainer>
        <SectionTitle>Why we are the best?</SectionTitle>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley...
        </Text>
        <List>
          <Item>
            <BoxForIcon>
              <Icon size="40px" icon="courier" />
            </BoxForIcon>
            <Info>
              <Title>Fasted delivery service</Title>
              <AboutServise>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </AboutServise>
            </Info>
          </Item>
          <Item>
            <BoxForIcon>
              <Icon size="40px" icon="shopping" />
            </BoxForIcon>
            <Info>
              <Title>Online order service</Title>
              <AboutServise>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </AboutServise>
            </Info>
          </Item>
          <Item>
            <BoxForIcon>
              <Icon size="40px" icon="fast-time" />
            </BoxForIcon>
            <Info>
              <Title>24 / 8 Service</Title>
              <AboutServise>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </AboutServise>
            </Info>
          </Item>
        </List>
      </ServiceContainer>
    </ServiceSection>
  );
};

export default Service;
