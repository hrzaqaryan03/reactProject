import React from "react";
import style from "../associations/associations.module.scss";
import img from "../../assets/img/Rectangle 1084.png";
const Associations = () => {
  return (
    <section className={style.associations}>
      <div className={style.associations__container}>
        <div className={style.associations__title}>
          <h2>Я в ассоциациях</h2>
        </div>
        <div className={style.associations__content}>
          <div className={style.text}>
            <p>
              "Я внимательно слежу за деятельностью профессиональных ассоциаций
              психологов и впечатлён тем, как они объединяют специалистов в
              области психотерапии. Эти сообщества активно способствуют обмену
              знаниями и опыту, что вдохновляет меня на развитие и
              совершенствование своих навыков.
            </p>
            <p>
              Ассоциации предлагают интересные мероприятия, семинары и
              конференции, где обсуждаются актуальные вопросы и последние
              исследования в области психологии.{" "}
            </p>
          </div>
          <div className={style.image}>
            <div className={style.imageBox}>
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

export default Associations;
