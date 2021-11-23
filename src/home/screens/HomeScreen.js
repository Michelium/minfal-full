import React, {useState} from 'react';

import {Container, Header} from '../../common';
import HomeFilterModal from '../components/HomeFilterModal';
import HomeMap from '../components/HomeMap';
import LocationDetailsCard from '../components/LocationDetailsCard/index';
import LocationSearchCard from '../components/LocationSearchCard';

/* =============================================================================
<HomeScreen />
============================================================================= */
const HomeScreen = () => {
  const [selected, setSelected] = useState('search');
  return (
    <Container>
      <Header />
      <HomeMap selected={selected} setSelected={setSelected} />
      {selected === 'info' ? (
        <LocationDetailsCard onClose={() => setSelected('search')} />
      ) : selected === 'search' ? (
        <LocationSearchCard />
      ) : selected === 'filter' ? (
        <HomeFilterModal setSelected={setSelected} />
      ) : null}
    </Container>
  );
};

/* Export
============================================================================= */
export default HomeScreen;
