import React from "react";
import style from "../aboutMain/aboutMain.module.scss";
import img from "../../assets/img/Rectangle 37 (1).png";
import LeaveRequestBtn from "../../sharedComponents/buttons/LiverequestBtn";
const AboutMain = () => {
  return (
    <section className={style.aboutMain}>
      <div className={style.aboutMain__container}>
        <div className={style.text}>
          <p>
            Меня зовут Екатерина, я психолог с [количество лет] опытом работы в
            области психотерапии и психологического консультирования. Моя цель –
            помогать людям преодолевать жизненные трудности и находить
            внутренний баланс.
          </p>
          <LeaveRequestBtn />
        </div>
        <div className={style.imageBox}>
          <img src={img} alt="" />
          <div className={style.box}>
            <h1>
              <div>
                <span>Екатерин</span>
                <span>а</span>
              </div>
              <div>
                <span className={style.second}>Гридас</span>
                <span>ова</span>
              </div>
            </h1>
          </div>
          <div className={style.box2}>
            <h2>
              <div>
                <span>Ек</span>
                <span>атерина</span>
              </div>
            </h2>
          </div>
          <div className={style.box3}>
            <div>
              <span>Гридасо</span>
              <span>ва</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
