import React, { useEffect, useState } from "react";
import style from "../ourPartners/ourPartners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import OurPartnersItems from "../ourPartnersItems/OurPartnersItems";
import { partners } from "../../partners";
const Ourpartners = () => {
  const [isSwiperActive, setIsSwiperActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSwiperActive(window.innerWidth <=1024);
      
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={style.ourPartners}>
      <div className={style.ourPartners__container}>
        <div className={style.ourPartners__title}>
          <h2>Мои партнёры</h2>
          <p>
            В моей профессиональной среде работают замечательные психологи,
            каждый из которых приносит уникальный опыт и знания.
          </p>
        </div>
        {isSwiperActive ? (
          <div className={style.mobileVersion}>
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
           

              modules={[Pagination]}
              className={style.mySwiper}
            >
              {partners.map((el) => {
                return (
                  <SwiperSlide style={{padding:"20px"}} className={style.swiperSlide} key={el.id}>
                    <OurPartnersItems data={el} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <div className={style.desktopVersion}>
            <div className={style.desktopVersion_container}>
              {partners.map((el) => {
                return <OurPartnersItems key={el.id} data={el} />;
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Ourpartners;
