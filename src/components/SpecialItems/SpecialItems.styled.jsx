import { Container } from 'components/constants/Container.styled';
import {
  Button,
  DefaultSectionTitle,
  TextDefault,
} from 'components/constants/DefaultStyle.styled';
import ImgBg from '../../allImages/images/fresh-melientha-min.png';
import styled from 'styled-components';
import { CgArrowLongRight } from 'react-icons/cg';

export const SpecialItemsSection = styled.section`
  background-color: ${props => props.theme.colors.backgroudAccent};
`;

export const SpecialItemsContainer = styled(Container)`
  display: flex;
  padding-top: 90px;
  padding-bottom: 140px;
  background-image: url(${ImgBg});
  background-position: right -50px bottom 0px;
  background-repeat: no-repeat, no-repeat;
`;

export const Box = styled.div`
  margin-top: 30px;
`;

export const Img = styled.img`
  margin-right: 50px;
`;

export const Title = styled(DefaultSectionTitle)`
  width: 560px;
`;

export const Text = styled(TextDefault)`
  width: 575px;
  margin-bottom: 50px;
  text-align: justify;
`;

export const BoxForBtn = styled.div`
  display: flex;
  align-items: center;
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
