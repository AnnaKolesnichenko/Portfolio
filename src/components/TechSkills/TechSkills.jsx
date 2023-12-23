import {
  TechStyled,
  TechListStyled,
  TechImgStyled,
  TechItemStyled,
  MainTitleStyled,
  TechNameStyled,
} from './TechSkills.styled';
import { Tech } from './tech_data';

const TechSkills = () => {
  return (
    <TechStyled id="skills">
      <div>
        <MainTitleStyled>SKILLS</MainTitleStyled>
      </div>
      <TechListStyled>
        {Tech.map(item => (
          <TechItemStyled>
            <TechImgStyled src={item.image} alt={item.title} />
            <TechNameStyled>{item.title}</TechNameStyled>
          </TechItemStyled>
        ))}
      </TechListStyled>
    </TechStyled>
  );
};

export default TechSkills;
