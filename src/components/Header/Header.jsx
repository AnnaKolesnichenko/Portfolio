import { motion } from 'framer-motion';
import {
  HeaderStyled,
  NavItemStyled,
  NavStyled,
  NavLinkStyled,
} from './Header.styled';

const Links = [
  { href: '/', title: 'Home' },
  { href: '#about', title: 'About' },
  { href: '#projects', title: 'Projects' },
  { href: '#certificates', title: 'Certificates' },
  { href: '#skills', title: 'Skills' },
  { href: '#contacts', title: 'Contacts' },
];

const Header = () => {
  return (
    <HeaderStyled id="nav">
      <NavStyled>
        {Links.map(link => (
          <NavItemStyled
            as={motion.li}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.7 }}
          >
            <NavLinkStyled href={link.href}>{link.title}</NavLinkStyled>
          </NavItemStyled>
        ))}

        {/* <NavItemStyled>
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
        </NavItemStyled> */}
      </NavStyled>
    </HeaderStyled>
  );
};
export default Header;
