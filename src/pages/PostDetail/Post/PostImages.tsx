import React from 'react';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IImage } from '../../../interfaces/post';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

interface Props {
  images: Array<IImage>;
}

const PostImages: React.FC<Props> = ({ images }) => {
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
        {images &&
          images.map((image, i) => (
            <SwiperSlide key={i}>
              <img src={image.src} alt={image.alt} key={i} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default PostImages;
