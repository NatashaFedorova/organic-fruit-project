import styled from 'styled-components';
import { CgArrowLongDown } from 'react-icons/cg';
import line from '../../allImages/images/line-bg-min.png';
import { Container } from 'components/constants/Container.styled';
import {
  Button,
  DefaultSectionTitle,
  TextDefault,
} from 'components/constants/DefaultStyle.styled';

export const ServiceSection = styled.section``;

export const ServiceContainer = styled(Container)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url(${line});
  background-repeat: no-repeat;
  background-position: 450px -92px;
`;

export const Box = styled.div``;

export const SectionTitle = styled(DefaultSectionTitle)``;

export const Text = styled(TextDefault)`
  width: 637px;
`;

export const List = styled.ul`
  width: 500px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  padding-left: 60px;
  padding-right: 60px;

  &:nth-child(even) {
    background-color: ${props => props.theme.colors.backgroudAccent};
  }
`;

export const BoxForIcon = styled.div`
  margin-right: 24px;
  padding: 20px;
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

export const Btn = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: transparent;
  color: ${props => props.theme.colors.accent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.backgroudMain};
  }
`;

export const BtnIcon = styled(CgArrowLongDown)`
  color: inherit;
`;

export const BoxForImg = styled.div`
  width: 600px;
  height: 600px;
`;

export const Img = styled.img``;
