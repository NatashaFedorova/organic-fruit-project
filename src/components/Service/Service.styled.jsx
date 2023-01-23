import { Container } from 'components/constants/Container.styled';
import { TextDefault } from 'components/constants/DefaultStyle.styled';
import styled from 'styled-components';

export const ServiceSection = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const ServiceContainer = styled(Container)``;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-family: 'Rosario', sans-serif;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSizes.large};
  line-height: 1.29;
  color: ${props => props.theme.colors.title};
`;

export const Text = styled(TextDefault)`
  width: 637px;
  margin-bottom: 56px;
`;

export const List = styled.ul`
  width: 500px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 60px;

  &:nth-child(even) {
    background-color: ${props => props.theme.colors.backgroudAccent};
  }
`;

export const BoxForIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.backgroudMain};

  li:nth-child(odd) & {
    background-color: ${props => props.theme.colors.backgroudAccent};
  }
`;

export const Info = styled.div``;

export const Title = styled.h3`
  margin-bottom: 8px;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSizes.mediumPlus};
  line-height: 1.5;
  color: ${props => props.theme.colors.title};
`;

export const AboutServise = styled.p`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1.43;
`;
