import React from "react";
import style from "../certificates/certificates.module.scss";
import img1 from "../../assets/img/Rectangle 1085.png";
import img2 from "../../assets/img/Rectangle 1087.png";
import img3 from "../../assets/img/Rectangle 1086.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CertificatesItems from "../certificatesItems/CertificatesItems"
import {certificates}  from "../../certificates"
const Certificates = () => {


  
  
  return (
    <section className={style.certificates}>
      <div className={style.certificates__container}>
        <div className={style.certificates__title}>
          <h2>Сертификаты</h2>
        </div>

        <Swiper
           slidesPerView={"auto"}
           spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={style.mySwiper}
          
        >
          {certificates.map((el) => {
            return <SwiperSlide className={style.swiperSlide} key={el.id}>
                <CertificatesItems data={el}/>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
