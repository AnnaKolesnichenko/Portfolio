import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';

const CustomTab = styled(Tab)(({ theme, isActive }) => ({
  color: isActive ? '#e2e8f0' : 'grey',
  '&.Mui-selected': {
    color: '#e2e8f0',
  },
}));

const MyProjectTabsStyled = ({ onTagChange }) => {
  const [activeTab, setActiveTab] = React.useState('all');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    onTagChange(newValue);
  };

  return (
    <Tabs
      value={activeTab}
      onChange={handleTabChange}
      centered
      TabIndicatorProps={{ style: { backgroundColor: '#e2e8f0' } }}
    >
      <CustomTab
        label="All Projects"
        value="all"
        isActive={activeTab === 'all'}
      />
      <CustomTab
        label="Study Projects"
        value="study"
        isActive={activeTab === 'study'}
      />
      <CustomTab
        label="Test Projects"
        value="test"
        isActive={activeTab === 'test'}
      />
      <CustomTab
        label="Work Projects"
        value="work"
        isActive={activeTab === 'work'}
      />
    </Tabs>
  );
};

export default MyProjectTabsStyled;
