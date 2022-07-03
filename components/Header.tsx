import { Tab, TabList, TabPanel, TabPanels, Tabs, useMediaQuery } from '@chakra-ui/react';
import React, { Children, useState } from 'react';

import Card from './Card';

interface HeaderProps {
  data: any[];
}

const Header = (props: HeaderProps) => {
  const { data } = props;

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

    rounded: '12px',
    _active: {
      bg: 'var(--main-bg)',
    },
    _selected: {
      textColor: 'var(--text)',
      bg: 'var(--primary)',
      borderBottom: 'var(--primary)',
    },
    _hover: {
      textColor: 'var(--text)',
    },
    w: isLowerThan415 ? '80%' : '100%',
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
          {data.map((tab, index) => (
            <Tab key={index} sx={tabStyle}>
              {isLowerThan415 ? tab.daySimple : tab.day}
            </Tab>
          ))}
        </TabList>

        <TabPanels bg='var(--secondary-bg)' textColor='var(--text)' w='90%' mt='100px'>
          {data.map((a, index) => (
            <TabPanel key={index} sx={cardStyle}>
              {a.animes.map((anime: any) => (
                <Card anime={anime} key={anime.id} />
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </header>
  );
};

export default Header;
