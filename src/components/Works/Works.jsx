import WorkExample from './WorkExample';
import {
  AppsListStyled,
  AppsStyled,
  ProjectsTitleStyled,
} from './Works.styled';

import { CreatedApps } from './apps';

const Works = () => {
  return (
    <AppsStyled>
      <ProjectsTitleStyled>Projects</ProjectsTitleStyled>
      <AppsListStyled>
        {CreatedApps.map(work => (
          <WorkExample work={work} />
        ))}
      </AppsListStyled>
    </AppsStyled>
  );
};

export default Works;
