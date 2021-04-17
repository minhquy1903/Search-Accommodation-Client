import React from 'react';

import Filter from '../../components/Filter/Filter';
import HotPostSection from '../../components/HotPostSection/HotPostSection';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <main className='main'>
      <div className='container'>
        <Filter />
        <HotPostSection />
      </div>
    </main>
  );
};

export default Home;
