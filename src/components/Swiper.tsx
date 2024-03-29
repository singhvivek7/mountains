import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';

import 'swiper/css';
import 'swiper/css/pagination';

export const SwiperComponent = () => {
  return (
    <div className="w-11/12 md:w-7/12 mx-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}>
        <SwiperSlide>
          <img className="w-60" src={slide1} alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60" src={slide2} alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60" src={slide1} alt="slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60" src={slide2} alt="slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60" src={slide1} alt="slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60" src={slide2} alt="slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60" src={slide1} alt="slide 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60" src={slide2} alt="slide 8" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
