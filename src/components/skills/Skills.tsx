import React from "react";
import "./Skills.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Data from "./Data";
import ML from "./ML";
import { Slide } from "react-awesome-reveal";
const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Skills</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">My technical level</span>
      </Slide>
      <div className="skills__container container grid">
        <Slide direction="left" triggerOnce>
          <Swiper
            className="skills__container"
            loop={false}
            grabCursor={true}
            spaceBetween={24}
            pagination={{ clickable: true }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 48,
              },
            }}
            modules={[Pagination]}
          >
            <SwiperSlide >
              <FrontEnd />
            </SwiperSlide>
            <SwiperSlide >  
              <BackEnd />
            </SwiperSlide>
            <SwiperSlide >  
              <ML/>
            </SwiperSlide>
            <SwiperSlide >  
              <Data/>
            </SwiperSlide>
          </Swiper>
          
       
        </Slide>
        
      </div>
    </section>
  );
};

export default Skills;
