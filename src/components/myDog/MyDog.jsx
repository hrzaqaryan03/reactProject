import React from "react";
import style from "../myDog/myDog.module.scss";
import img1 from '../../assets/img/Rectangle 1204.png'
import img2 from '../../assets/img/Rectangle 1203 (2).png'
const MyDog = () => {
  return (
    <section className={style.myDog}>
      <div className={style.myDog__contaiener}>
        <div className={style.title}>
          <h2>Мой код терапии</h2>
        </div>
        <div className={style.myDog__content}>
          <div className={style.text}>
            <p>
              "Моя собака — это не просто мой компаньон, но и важная часть моего
              терапевтического пути. Когда я начала проходить терапию, я не
              ожидала, что моя собака станет таким важным участником этого
              процесса. Она всегда рядом, поддерживает меня своим присутствием,
              и в её глазах я нахожу утешение.
            </p>
            <p>
              Каждое наше взаимодействие напоминает мне о важности простого,
              честного контакта. Её спокойствие помогает мне оставаться в
              моменте, чувствовать себя более расслабленной и сосредоточенной на
              том, что действительно важно.
            </p>
          </div>
          <div className={style.images}>
            <div className={style.imageBox}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <div className={style.lines}>
                <span className={style.line1}></span>
                <span className={style.line2}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDog;
