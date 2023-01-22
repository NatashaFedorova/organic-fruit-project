import styled from 'styled-components';
import { CgArrowLongRight } from 'react-icons/cg';
import { Container } from '../constants/Container.styled';
import { Button, TextDefault } from 'components/constants/DefaultStyle.styled';

import ImgFirstSrc from '../../allImages/images/vegetables-fruits-fix-min.png';
import ImgSecondSrc from '../../allImages/images/fresh-melientha-min.png';

export const HeroSection = styled.section`
  background-color: ${props => props.theme.colors.backgroudAccent};
`;

export const HeroContainer = styled(Container)`
  padding: 51px 0;
  background-image: url(${ImgFirstSrc}), url(${ImgSecondSrc});
  background-position: 120px 321px, 5px 0px;
  background-repeat: no-repeat, no-repeat;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Rosario', sans-serif;
  font-size: ${props => props.theme.fontSizes.large};
  line-height: 1.29;
  color: ${props => props.theme.colors.title};
`;

export const Text = styled(TextDefault)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  width: 637px;
  text-align: center;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const TextForBtn = styled.p`
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.67;
  color: ${props => props.theme.colors.title};
`;

export const OrderBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.backgroudMain};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${props => props.theme.colors.accent};
  }
`;

export const OrderBtnIcon = styled(CgArrowLongRight)`
  color: inherit;
`;

export const List = styled.ul``;

export const Item = styled.li`
  margin-left: auto;
  display: flex;
  align-items: center;
  width: 250px;
  height: 116px;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 33px;

  background-color: ${props => props.theme.colors.backgroudMain};

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const BoxForIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.backgroudAccent};
`;

export const Info = styled.div``;

export const Value = styled.p`
  margin-bottom: 4px;
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: 48px;
  line-height: 1;
  text-align: center;
  color: ${props => props.theme.colors.dark};
`;

export const Indicator = styled(TextDefault)`
  font-weight: ${props => props.theme.fontWeight.normal};
  text-align: center;
  color: ${props => props.theme.colors.dark};
`;
