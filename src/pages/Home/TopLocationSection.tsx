import React from 'react';

import { Link } from 'react-router-dom';

interface Props {
  setPosts: any;
}

const TopLocationSection: React.FC<Props> = () => {
  return (
    <section className='section-top-location'>
      <div className='section-title'>
        <span className='title'>Khu vực nổi bật</span>
      </div>
      <div className='location-city'>
        <Link to='/' className='location-item'>
          <img src='/resources/images/location_hcm.jpg' alt='khu-vuc-noi-bat' />
          <div className='location-cap'>
            <span>Phòng trọ Hồ Chí Minh</span>
          </div>
        </Link>
        <Link to='/' className='location-item'>
          <img src='/resources/images/location_hn.jpg' alt='khu-vuc-noi-bat' />
          <div className='location-cap'>
            <span>Phòng trọ Hà Nội</span>
          </div>
        </Link>
        <Link to='/' className='location-item'>
          <img src='/resources/images/location_dn.jpg' alt='khu-vuc-noi-bat' />
          <div className='location-cap'>
            <span>Phòng trọ Đà Nẵng</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TopLocationSection;
