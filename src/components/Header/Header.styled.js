import styled from 'styled-components';

export const HeaderStyled = styled.div`
  /* display: flex;
  flex-direction: row; */
  margin-left: auto;
  margin-right: auto;
  background-color: #0f1933;
  max-width: 1024px;
`;

export const NavStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 35px;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 30px 25px;
`;

export const NavItemStyled = styled.li`
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 1.3;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;

  //color: #2e6484;
  border-bottom: 2px solid transparent;
  padding-bottom: 8px;
  position: relative;
  z-index: 1;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #94a3b8;
    //background-color: #2e6484;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
    background-color: white;
  }
  &:hover a {
    color: white;
  }
`;

export const NavLinkStyled = styled.a`
  text-decoration: none;
  color: #94a3b8;

  /* &:hover {
    color: white;
  } */
`;
