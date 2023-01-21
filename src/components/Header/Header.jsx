import Icon from '../Icon/Icon';

import {
  HeaderBox,
  HeaderContainer,
  Nav,
  NavList,
  NavItem,
  NavLink,
  Logo,
  Box,
  SearchBtn,
  SearchIcon,
  BasketBtn,
  BasketIcon,
  RegisterBtn,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBox>
      <HeaderContainer>
        <Nav>
          <NavList>
            <NavItem>
              <NavLink href="/">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Service</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <Logo href="/">
          <Icon size="56px" icon="planet" />
        </Logo>
        <Box>
          <SearchBtn type="button">
            <SearchIcon size="24px" />
          </SearchBtn>
          <BasketBtn type="button">
            <BasketIcon size="24px" />
          </BasketBtn>
          <RegisterBtn type="button">Register now</RegisterBtn>
        </Box>
      </HeaderContainer>
    </HeaderBox>
  );
};
export default Header;
