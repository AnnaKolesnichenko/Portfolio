import {
  AboutStyled,
  DescriptionStyled,
  MainTitle,
  SecondaryTitle,
  AboutPartsStyled,
  AboutMeMainStyled,
} from './About.styled';

const About = () => {
  return (
    <AboutStyled>
      <AboutPartsStyled style={{ alignContent: 'flex-start' }}>
        <MainTitle>Hello, I am Anna!</MainTitle>
        <SecondaryTitle>Junior Front-End Developer</SecondaryTitle>
        <DescriptionStyled>
          I build exceptional and accessible digital experiences for the web.
          And I love what I do.
        </DescriptionStyled>
      </AboutPartsStyled>
      <AboutPartsStyled>
        <AboutMeMainStyled>
          Fully committed to the philosophy of life-long learning, I’m a
          Front-End developer with a deep passion for JavaScript, React and all
          things about web development. The unique combination of creativity,
          logic, technology and never running out of new things to discover,
          drives my excitement and passion for web development.
        </AboutMeMainStyled>
      </AboutPartsStyled>
    </AboutStyled>
  );
};

export default About;
