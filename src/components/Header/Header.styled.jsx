import styled from 'styled-components';
import 'animate.css';
import { FiSearch } from 'react-icons/fi';
import { SlBasket } from 'react-icons/sl';
import { Container } from '../constants/Container.styled';
import { Button } from 'components/constants/DefaultStyle.styled';

export const HeaderBox = styled.header`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  animation: fadeInLeft;
  animation-duration: 1s;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.33;
  color: ${props => props.theme.colors.title};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const Logo = styled.a`
  animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  animation: fadeInRight;
  animation-duration: 1s;
`;

export const SearchBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 28px;
  border-radius: 50%;
  border: 2px solid transparent;
  color: ${props => props.theme.colors.title};
  background-color: ${props => props.theme.colors.backgroudAccent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${props => props.theme.colors.accent};
    border: 2px solid ${props => props.theme.colors.accent};
  }
`;

export const SearchIcon = styled(FiSearch)`
  color: inherit;
`;

export const BasketBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 40px;
  border-radius: 50%;
  border: 2px solid transparent;
  color: ${props => props.theme.colors.title};
  background-color: ${props => props.theme.colors.backgroudAccent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${props => props.theme.colors.accent};
    border: 2px solid ${props => props.theme.colors.accent};
  }
`;

export const BasketIcon = styled(SlBasket)`
  color: inherit;
`;

export const RegisterBtn = styled(Button)`
  width: 160px;
  height: 40px;
  padding: 10px 23px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.11;
  color: ${props => props.theme.colors.backgroudMain};
  background-color: ${props => props.theme.colors.accent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.backgroudMain};
    border: 1px solid ${props => props.theme.colors.accent};
  }
`;
