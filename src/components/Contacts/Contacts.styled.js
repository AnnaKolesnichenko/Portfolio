import styled from 'styled-components';

export const ContactsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: #0f1933;
  max-width: 1024px;
  border-top: 2px solid #182544;
`;

export const MainTitleStyled = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #e2e8f0;
  margin-top: 0;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
`;

export const ContactsListStyled = styled.ul`
  list-style: none;
  margin: 0;
  max-width: 974px;
  align-items: center;
  justify-content: center;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const ContactsItemStyled = styled.a`
  width: 100px;
  height: auto;
`;
