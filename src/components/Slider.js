import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ items, onSlideChange }) => {
  return (
    <SliderStyle>
      <Swiper onSlideChange={onSlideChange} navigation={{ clickable: true }}
      pagination={{ clickable: true, dynamicBullets: true }} modules={[Pagination, Navigation]} >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </SliderStyle>
  );
};

export default Slider;

const SliderStyle = styled.div`
  height: 100%;
  .swiper {
    height: 100%;
  }

  .swiper-pagination {
    .swiper-pagination-bullet {
      background-color: white;
      height: 10px;
      width: 10px;
    }
  }
  .swiper-button-next, .swiper-button-prev {
    color: white;
  }

  .swiper-button-next{
    right: var(--space-lg);
  }

  .swiper-button-prev{
    left: var(--space-lg);
  }
`;
