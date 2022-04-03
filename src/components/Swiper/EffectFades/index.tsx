import * as React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from './index.module.scss';

const { memo, useState, useRef } = React;


const Index = memo((): any => {
      const [ swiperRef, setSwiperRef ] = useState<any>(null);
      const [ activeIndex, setActiveIndex ] = useState(0);

      const paginationBtns = () => {
        return (
          <div className='innerPaginations'>
            <div className='btns'>
              <a className='btnSerPrevPage' onClick={handleSerPrevPage} style={{opacity: activeIndex === 0  ? 0.2 : 1, visibility: activeIndex === 0 ? 'hidden': 'visible'}}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="31" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.7082 38.7079C27.6153 38.801 27.5049 38.8749 27.3834 38.9253C27.2619 38.9758 27.1317 39.0017 27.0002 39.0017C26.8686 39.0017 26.7384 38.9758 26.6169 38.9253C26.4954 38.8749 26.3851 38.801 26.2922 38.7079L20.2922 32.7079C20.199 32.615 20.1252 32.5047 20.0747 32.3832C20.0243 32.2617 19.9984 32.1315 19.9984 31.9999C19.9984 31.8684 20.0243 31.7381 20.0747 31.6167C20.1252 31.4952 20.199 31.3848 20.2922 31.2919L26.2922 25.2919C26.4799 25.1041 26.7346 24.9987 27.0002 24.9987C27.2657 24.9987 27.5204 25.1041 27.7082 25.2919C27.8959 25.4797 28.0014 25.7344 28.0014 25.9999C28.0014 26.2655 27.8959 26.5201 27.7082 26.7079L22.4142 31.9999L27.7082 37.2919C27.8013 37.3848 27.8752 37.4952 27.9256 37.6167C27.976 37.7381 28.002 37.8684 28.002 37.9999C28.002 38.1315 27.976 38.2617 27.9256 38.3832C27.8752 38.5047 27.8013 38.615 27.7082 38.7079V38.7079Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M44 32C44 32.2652 43.8946 32.5196 43.7071 32.7071C43.5196 32.8946 43.2652 33 43 33L22 33C21.7348 33 21.4804 32.8946 21.2929 32.7071C21.1054 32.5196 21 32.2652 21 32C21 31.7348 21.1054 31.4804 21.2929 31.2929C21.4804 31.1054 21.7348 31 22 31L43 31C43.2652 31 43.5196 31.1054 43.7071 31.2929C43.8946 31.4804 44 31.7348 44 32Z" fill="white"/>
                </svg>
              </a>
              <a className='btnSerNextPage' onClick={handleSerNextPage} style={{opacity: activeIndex === 2 ? 0.2 : 1, visibility: activeIndex === 2 ? 'hidden': 'visible'}}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="31" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M36.2918 25.2921C36.3847 25.199 36.4951 25.1251 36.6166 25.0747C36.7381 25.0242 36.8683 24.9983 36.9998 24.9983C37.1314 24.9983 37.2616 25.0242 37.3831 25.0747C37.5046 25.1251 37.6149 25.199 37.7078 25.2921L43.7078 31.2921C43.801 31.385 43.8748 31.4953 43.9253 31.6168C43.9757 31.7383 44.0016 31.8685 44.0016 32.0001C44.0016 32.1316 43.9757 32.2619 43.9253 32.3833C43.8748 32.5048 43.801 32.6152 43.7078 32.7081L37.7078 38.7081C37.5201 38.8959 37.2654 39.0013 36.9998 39.0013C36.7343 39.0013 36.4796 38.8959 36.2918 38.7081C36.1041 38.5203 35.9986 38.2656 35.9986 38.0001C35.9986 37.7345 36.1041 37.4799 36.2918 37.2921L41.5858 32.0001L36.2918 26.7081C36.1987 26.6152 36.1248 26.5048 36.0744 26.3833C36.024 26.2619 35.998 26.1316 35.998 26.0001C35.998 25.8685 36.024 25.7383 36.0744 25.6168C36.1248 25.4953 36.1987 25.385 36.2918 25.2921Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 32C20 31.7348 20.1054 31.4804 20.2929 31.2929C20.4804 31.1054 20.7348 31 21 31L42 31C42.2652 31 42.5196 31.1054 42.7071 31.2929C42.8946 31.4804 43 31.7348 43 32C43 32.2652 42.8946 32.5196 42.7071 32.7071C42.5196 32.8946 42.2652 33 42 33H21C20.7348 33 20.4804 32.8946 20.2929 32.7071C20.1054 32.5196 20 32.2652 20 32Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        );
      }

      const handleSerPrevPage = () => {
        if(activeIndex > 0){
          swiperRef.slideTo(activeIndex - 1); 
        }
      }
      const handleSerNextPage = () => {
        if(activeIndex < 3){
          swiperRef.slideTo(activeIndex+1); 
        }
      }

      return (
        <div className={styles.normal}>
            <Swiper
              initialSlide={activeIndex}
              className="mySwiper"
              modules={[Autoplay, Pagination, EffectFade, Navigation]}
              navigation={true}
              pagination={{
                // type: "fraction", // 打开这个可以进行自定义事件
                clickable: true,
              }}
              effect="cube"
              speed={1000}
              aria-grabbed
              watchSlidesProgress
              mousewheel
              keyboard
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              onInit={(swiper: any) => {
                setSwiperRef(swiper);
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
              onTouchStart={(swiper: any) => {
                for (let i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].style.transition = '';
                }
              }}
              onSetTransition={(swiper: any, speed: number) => {
                for (let i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].style.transition = speed + 'ms';
                }
              }}
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
            </Swiper>

        </div>
      );
});

export default Index;
