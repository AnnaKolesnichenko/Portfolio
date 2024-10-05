import React, { useState } from 'react';
import { Tabs, Input } from 'antd';
const { TabPane } = Tabs;

const MyProjectTabs = () => {
  const projects = {
    учебные: ['Project 1', 'Project 2', 'Project 3'],
    тестовые: ['Test 1', 'Test 2'],
    рабочие: ['Work 1', 'Work 2', 'Work 3'],
  };

  const [filter, setFilter] = useState('');

  const filteredProjects = list =>
    list.filter(project =>
      project.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      {/* <Input
        placeholder="Поиск по проектам"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      /> */}
      <Tabs defaultActiveKey="1">
        <TabPane tab="Учебные проекты" key="1">
          <ul>
            {filteredProjects(projects.учебные).map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </TabPane>
        <TabPane tab="Тестовые проекты" key="2">
          <ul>
            {filteredProjects(projects.тестовые).map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </TabPane>
        <TabPane tab="Рабочие проекты" key="3">
          <ul>
            {filteredProjects(projects.рабочие).map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MyProjectTabs;
