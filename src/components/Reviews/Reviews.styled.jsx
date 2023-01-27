import { Container } from 'components/constants/Container.styled';
import {
  Button,
  DefaultSectionTitle,
  TextDefault,
} from 'components/constants/DefaultStyle.styled';
import styled from 'styled-components';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';

export const ReviewsSection = styled.section`
  padding-top: 100px;
`;

export const ReviewsContainer = styled(Container)`
  position: relative;
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Info = styled.div`
  padding-bottom: 32px;
`;

export const Title = styled(DefaultSectionTitle)`
  width: 640px;
`;

export const Text = styled(TextDefault)`
  width: 586px;
  margin-bottom: 40px;
  text-align: justify;
`;

export const Name = styled.h3`
  margin-bottom: 20px;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 30px;
  line-height: 1.2;
  color: ${props => props.theme.colors.title};
`;

export const BoxForButtons = styled.div`
  position: absolute;
  left: 427px;
  bottom: 20px;
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.accent};
  background-color: transparent;
  color: ${props => props.theme.colors.accent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.backgroudMain};
  }
`;

export const ArrowLeft = styled(RiArrowLeftSLine)`
  color: inherit;
`;

export const ArrowRight = styled(RiArrowRightSLine)`
  color: inherit;
`;

export const Img = styled.img`
  width: 447px;
  height: 445px;
`;

export const BoxForImg = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  min-width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.backgroudAccent}; ;
`;
