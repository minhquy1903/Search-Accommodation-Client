import React from 'react';

import Filter from '../../components/Filter/Filter';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <main className='main'>
      <div className='container'>
        <Filter />
      </div>
    </main>
  );
};

export default Home;
