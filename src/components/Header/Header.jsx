import { HeaderStyled, NavItemStyled, NavStyled } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <NavItemStyled>Home</NavItemStyled>
        <NavItemStyled>About</NavItemStyled>
        <NavItemStyled>Projects</NavItemStyled>
        <NavItemStyled>Contacts</NavItemStyled>
      </NavStyled>
    </HeaderStyled>
  );
};
export default Header;
