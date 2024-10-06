import React, { useState } from 'react';
import WorkExample from './WorkExample';
import {
  AppsListStyled,
  AppsStyled,
  ProjectsTitleStyled,
} from './Works.styled';

import { CreatedApps } from './apps';
import MyProjectTabsMUI from './CentertedTabs';

const Works = () => {
  const [selectedTag, setSelectedTag] = useState('all');

  const handleTagChange = tag => {
    setSelectedTag(tag);
  };

  const filteredApps = CreatedApps.filter(app =>
    selectedTag === 'all' ? true : app.tag === selectedTag
  );

  return (
    <AppsStyled id="projects">
      <ProjectsTitleStyled>Projects</ProjectsTitleStyled>
      <MyProjectTabsMUI onTagChange={handleTagChange} />
      <AppsListStyled>
        {filteredApps.map(work => (
          <WorkExample key={work.id} work={work} />
        ))}
      </AppsListStyled>
    </AppsStyled>
  );
};

export default Works;
