import React from "react";
import style from "../theraphyEffects/theraphyEffects.module.scss";
import img1 from "../../assets/img/Rectangle1199.png";
import img2 from "../../assets/img/Rectangle1200.png";
import img3 from "../../assets/img/Rectangle1201.png";
import { useState } from "react";

const TherapyEffects = () => {
  const [show, setShow] = useState(false);

  return (
    <section className={style.theraphyEffects}>
      <div className={style.theraphyEffects__container}>
        <div className={style.theraphyEffects__title}>
          <h2>Что дарят терапия?</h2>
        </div>
        <div className={style.theraphyEffects__content}>
          <div className={style.content_left}>
            <div className={style.left_txt}>
              <p>
                «После терапии вы почувствуете больше внутренней ясности и
                спокойствия, а также лучшее понимание себя и своих эмоций.»
                «Терапия помогает обрести баланс и научиться справляться с
                трудностями, не теряя внутреннего равновесия.»
              </p>
              <p>
                «Вы начнете замечать, как постепенно уходят тревога и
                напряжение, а на их место приходят уверенность и способность
                контролировать свою жизнь.»
              </p>
              <p>
                «После регулярных сессий многие чувствуют себя более уверенными,
                способными принимать решения и лучше понимающими свои
                потребности.»
              </p>
              <p>
                «Терапия откроет для вас новые способы решения сложных ситуаций,
                научит справляться со стрессом и работать с эмоциями.»
              </p>
              {show && (
                <p>
                  «Вы сможете обрести чувство внутренней силы и уверенности в
                  том, что способны справиться с любыми жизненными трудностями.»
                </p>
              )}

              <div className={style.showinfo}>
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? " Посмотреть меньше" : "Посмотреть больше"}
                </button>
                <div className={style.line}></div>
              </div>
            </div>
          </div>
          <div className={style.content_right}>
            <div className={style.right_images}>
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <img src={img2} alt="" />
              </div>

              <div className={style.line1}></div>
              <div className={style.line2}></div>
            </div>
            <div className={style.right_bottom}>
              <div className={style.right_text}>
                <div>
                  <h4>Я помогу вам</h4>
                  <p>
                    «После терапии многие отмечают рост самооценки и улучшение
                    качества жизни, становясь более открытыми к новым
                    возможностям и переменам.»
                  </p>
                </div>
              </div>
              <div className={style.image}>
                <div className={style.box}>
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapyEffects;
