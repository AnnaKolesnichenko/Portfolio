import {
  HeaderStyled,
  NavItemStyled,
  NavStyled,
  NavLinkStyled,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled id="nav">
      <NavStyled>
        <NavItemStyled>
          <NavLinkStyled href="/">Home</NavLinkStyled>
        </NavItemStyled>
        <NavItemStyled>
          <NavLinkStyled href="#about">About</NavLinkStyled>
        </NavItemStyled>
        <NavItemStyled>
          <NavLinkStyled href="#projects">Projects</NavLinkStyled>
        </NavItemStyled>
        <NavItemStyled>
          <NavLinkStyled href="#certificates">Certificates</NavLinkStyled>
        </NavItemStyled>
        <NavItemStyled>
          <NavLinkStyled href="#skills">Skills</NavLinkStyled>
        </NavItemStyled>
        <NavItemStyled>
          <NavLinkStyled href="#contacts">Contacts</NavLinkStyled>
        </NavItemStyled>
      </NavStyled>
    </HeaderStyled>
  );
};
export default Header;
