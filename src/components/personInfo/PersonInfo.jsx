import React from "react";
import style from "./personInfo.module.scss";
import image from '../../assets/img/persInfo.png';
import { useState } from "react";
import Lines from "../../components/lines/Lines"


const PersonInfo = () => {
    const [show  ,setShow] = useState(false)

   
    

  return (
    <section className={style.personInfo}>
      <div className={style.personInfo__container}>
          <div className={style.title}>
            <h2 onClick={() => console.log("ok")
            }>Обо мне</h2>
          </div>
          <div className={style.personInfo__content}>
          <div className={style.personInfo__left}>
          <div className={style.left__text}>
            <p>
              Я — дипломированный психолог с многолетним опытом работы в области
              психотерапии. Моя профессиональная карьера охватывает
              разнообразные направления, включая индивидуальную и групповую
              терапию, терапию для пар, а также психологическую поддержку людей
              с психиатрическими диагнозами.
            </p>
            <p>
              Работа с людьми требует не только профессиональных знаний, но и
              искреннего стремления помочь. Это то, что движет мной на
              протяжении всей моей карьеры. Моя миссия — поддержать вас на пути
              к лучшему самочувствию и душевному равновесию, помочь раскрыть
              внутренние ресурсы и найти новые пути для самореализации.
            </p>
            {show && <p >
            Работа с людьми требует не только профессиональных знаний, но и
              искреннего стремления помочь. Это то, что движет мной на
              протяжении всей моей карьеры. Моя миссия — поддержать вас на пути
              к лучшему самочувствию и душевному равновесию, помочь раскрыть
              внутренние ресурсы и найти новые пути для самореализации.
            </p> }
            
          </div>
          <div className={style.left__showinfo}>
            <button onClick={() => {
                setShow(!show)
            }}>{show ? " Посмотреть меньше" :  "Посмотреть больше"}</button>
            <div className={style.line}></div>
          </div>  
        </div>
        <div className={style.personInfo__right}>
            <div className={style.right__img}>
                <img src={image} alt="" />
            <div className={style.line1}></div>
            <div className={style.line2}></div>
            </div>
        </div> 
          </div>


      </div>
    </section>
  );
};

export default PersonInfo;
