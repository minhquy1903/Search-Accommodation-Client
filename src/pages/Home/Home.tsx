import React from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import TopLocationSection from './TopLocationSection';
import Filter from '../../components/Filter/Filter';
import HotPostSection from '../../components/HotPostSection/HotPostSection';
import ListPostSection from '../../components/ListPostSection/ListPostSection';
import NewPostSection from '../../components/NewPostSection/NewPostSection';
import SubLinkSection from '../../components/SubLinkSection/SubLinkSection';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <main id='main'>
      <div className='container'>
        <Filter />
        <PageHeader
          heading={'Phòng trọ, Nhà nguyên căn, Căn hộ, Ở ghép'}
          description='Kênh phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 70.000+ tin đăng và 2.000.000 lượt xem mỗi tháng.'
        />
        <TopLocationSection />
        <HotPostSection />
        <div className='container-wrapper'>
          <ListPostSection />
          <div className='aside'>
            <SubLinkSection />
            <NewPostSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
