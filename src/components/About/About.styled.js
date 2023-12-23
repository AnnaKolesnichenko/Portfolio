import styled from 'styled-components';
import back from '../../images/backgrounds/back.avif';

export const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: #0f1933;
  max-width: 1024px;
  border-top: 2px solid #182544;

  background-image: linear-gradient(
      to right,
      rgba(46, 47, 66, 0.5),
      rgba(46, 47, 66, 0.5)
    ),
    url(${back});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
`;

export const AboutPartsStyled = styled.div`
  width: calc((100% - 90px) / 2);
`;

export const AboutMainTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #e2e8f0;
  margin-top: 0;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
`;

export const MainTitle = styled.h1`
  margin: 0;
  margin-top: 10px;
  color: #e2e8f0;
  font-size: 48px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1;
`;

export const SecondaryTitle = styled.h2`
  color: #e2e8f0;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1;
`;

export const DescriptionStyled = styled.p`
  color: #94a3b8;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
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
    background-color: #94a3b8;
  }
`;

export const AboutMeMainStyled = styled.p`
  margin-top: 20px;
  color: #94a3b8;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1;
`;
