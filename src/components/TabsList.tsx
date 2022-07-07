import { Tab, TabList, TabPanel, TabPanels, Tabs, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';

import { DateAnime } from '../model/anime';
import Card from './Card';

interface TabsListProps {
  tabContent: DateAnime[];
}

const TabsList = ({ tabContent }: TabsListProps) => {
  const [tabIndex, setTabIndex] = useState(new Date().getDay());
  const [isLowerThan420] = useMediaQuery('(max-width: 420px)');

  const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '20px',
  };

  const tabListStyle = {
    position: 'fixed',
    top: 0,
    w: '100%',
    p: isLowerThan420 ? '50px 0px 0px 0px' : '50px 25px 0px 25px',
    pb: '5px',
    bg: 'var(--main-bg)',
    borderColor: 'var(--main-bg)',
    textColor: 'gray.400',
    zIndex: 1,
    justifyContent: 'center',
  };

  const tabStyle = {
    fontSize: isLowerThan420 ? 'sm' : 'lg',
    ml: '2%',
    mr: '2%',
    w: isLowerThan420 ? '40px' : '100%',

    _active: {
      bg: 'var(--main-bg)',
    },
    _selected: {
      textColor: 'var(--text)',
      borderBottom: '2px solid var(--primary)',
    },
    _hover: {
      textColor: 'var(--text)',
      borderBottom: '2px solid var(--primary)',
    },
  };

  const tabPanelStyle = {
    bg: 'var(--secondary-bg)',
    textColor: 'var(--text)',
    w: '90%',
    mt: isLowerThan420 ? '90px' : '100px',
  };

  return (
    <header>
      <Tabs
        defaultIndex={tabIndex}
        onChange={(index) => setTabIndex(index)}
        flexDirection='column'
        sx={center}>
        <TabList sx={tabListStyle}>
          {tabContent.map((tab, index) => (
            <Tab key={index} sx={tabStyle}>
              {isLowerThan420 ? tab.daySimple : tab.day}
            </Tab>
          ))}
        </TabList>

        <TabPanels sx={tabPanelStyle}>
          {tabContent.map((tab, index) => (
            <TabPanel key={index} sx={cardStyle}>
              {tab.animes.map((anime) => (
                <Card anime={anime} key={anime._id} />
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </header>
  );
};

export default TabsList;
