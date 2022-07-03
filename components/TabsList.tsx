import { Tab, TabList, TabPanel, TabPanels, Tabs, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';

import { DateAnime } from '../model/anime';
import Card from './Card';

interface TabsListProps {
  tabContent: DateAnime[];
}

const TabsList = ({ tabContent }: TabsListProps) => {
  const [tabIndex, setTabIndex] = useState(new Date().getDay());
  const [isLowerThan415] = useMediaQuery('(max-width: 415px)');

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
    w: '100vw',
    p: isLowerThan415 ? '50px 0px 0px 0px' : '50px 25px 0px 25px',
    pb: '5px',
    bg: 'var(--main-bg)',
    borderColor: 'var(--main-bg)',
    textColor: 'gray.400',
    zIndex: 1,
  };

  const tabStyle = {
    fontSize: isLowerThan415 ? 'sm' : 'lg',
    pl: '10px',
    w: isLowerThan415 ? '80%' : '100%',

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
    mt: isLowerThan415 ? '90px' : '100px',
  };

  return (
    <header>
      <Tabs
        onChange={(index) => setTabIndex(index)}
        defaultValue={tabIndex}
        flexDirection='column'
        sx={center}
        w='100%'>
        <TabList sx={tabListStyle}>
          {tabContent.map((tab, index) => (
            <Tab key={index} sx={tabStyle}>
              {isLowerThan415 ? tab.daySimple : tab.day}
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
