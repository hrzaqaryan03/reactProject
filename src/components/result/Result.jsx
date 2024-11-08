import React from "react";
import style from "../result/result.module.scss";
import Arrow from "../../sharedComponents/svg/Arrow";
import img from "../../assets/img/Rectangle 39.png";
const Result = () => {
  return (
    <section className={style.result}>
      <div className={style.result__container}>
      <div className={style.result__title}>
              <h2>
                Регистрация на консультацию со мной принесет вам следующие
                результаты
              </h2>
            </div>
        <div className={style.result__content}>
          <div className={style.content_left}>
     
            <ul>
              <li>
                <span className={style.round}>1</span>
                <span className={style.arrow}>
                  <Arrow />
                </span>
                <p>Улучшение семейных отношений:</p>
              </li>
              <li>
                <span className={style.round}>2</span>
                <span className={style.arrow}>
                  <Arrow />
                </span>
                <p>Уверенность в себе </p>
              </li>
              <li>
                <span className={style.round}>3</span>
                <span className={style.arrow}>
                  <Arrow />
                </span>
                <p>Улучшение качества жизни:</p>
              </li>
              <li>
                <span className={style.round}>4</span>
                <span className={style.arrow}>
                  <Arrow />
                </span>
                <p>Улучшение отношений с партнером: </p>
              </li>
              <li>
                <span className={style.round}>5</span>
                <span className={style.arrow}>
                  <Arrow />
                </span>
                <p>Поддержка в трудные времена:</p>
              </li>
            </ul>
          </div>
          <div className={style.content_right}>
            <div className={style.right_imgBox}>
              <img src={img} alt="" />
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

export default Result;
