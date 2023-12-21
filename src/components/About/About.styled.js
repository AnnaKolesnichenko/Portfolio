import styled from 'styled-components';

export const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 25px;
  box-sizing: border-box;
  background-color: #0f1933;
  max-width: 95%;
  border-top: 2px solid #182544;
`;

export const AboutPartsStyled = styled.div`
  width: calc((100% - 90px) / 2);
  /* position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 10px;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: #1a294f;
  } */
`;

export const MainTitle = styled.h1`
  margin: 0;
  margin-top: 10px;
  color: #e2e8f0;
  font-size: 48px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 1;
`;

export const SecondaryTitle = styled.h2`
  color: #e2e8f0;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 1;
`;

export const DescriptionStyled = styled.p`
  color: #94a3b8;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 1;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: calc(100% + 15px);
    right: 0;
    bottom: 0;
    left: 0;
    width: 70%;
    height: 1px;
    background-color: #1a294f;
  }
`;

export const AboutMeMainStyled = styled.p`
  margin-top: 20px;
  color: #94a3b8;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 1;
`;
