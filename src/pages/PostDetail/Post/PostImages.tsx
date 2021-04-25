import React from 'react';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const PostImages: React.FC = () => {
  return (
    <div className='section images-post'>
      <div className='title'>Hình ảnh</div>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true, type: 'fraction' }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <img
            src='https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/08/07/img-20200807-163316_1596793218.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/08/07/img-20200807-163316_1596793218.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/08/07/img-20200807-163316_1596793218.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/08/07/img-20200807-163316_1596793218.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/08/07/img-20200807-163316_1596793218.jpg'
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PostImages;
