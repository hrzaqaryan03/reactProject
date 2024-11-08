import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import style from "../serviceTypes/servicesTypes.module.scss";
import ServiceTypeItems from "../serviceTypeItems/ServiceTypeItems";
import { servicesData } from "../../services";

const ServiceTypes = () => {
  const [isSwiperActive, setIsSwiperActive] = useState(false);
  const [activeSlides, setActiveSlides] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setIsSwiperActive(window.innerWidth < 1365);
      if(window.innerWidth > 1024) setActiveSlides(3)
      if(window.innerWidth < 1024) setActiveSlides(2)
      if(window.innerWidth < 768) setActiveSlides(1)
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("load" , handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={style.serviceTypes}>
      <div className={style.serviceTypes__container}>
        <div className={style.serviceTypes__title}>
          <h2>Услуги, которые я предлагаю</h2>
        </div>
        {isSwiperActive ? (
          <div className={style.swiper_container}>
            <Swiper
              style={{height:window.innerWidth < 1025 ?"360px" : '480px'}}
              spaceBetween={20}
              slidesPerView={activeSlides}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                
              }}
              
              modules={[Pagination]}
              className={style.mySwiper}
            >
              {servicesData.map((el) => {
                return (
                  <SwiperSlide key={el.id}>
                    <ServiceTypeItems
                      className={style.item}
                      title={el.title}
                      desc={el.desc}
                      price={el.price}
                      id={el.id}
                      text={el.text}
                    ></ServiceTypeItems>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <div className={style.service_list}>
            {servicesData.map((el) => {
              return (
                <ServiceTypeItems
                  key={el.id}
                  title={el.title}
                  desc={el.desc}
                  price={el.price}
                  id={el.id}
                  text={el.text}
                ></ServiceTypeItems>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceTypes;
