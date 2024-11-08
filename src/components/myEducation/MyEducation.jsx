import React from "react";
import style from "../myEducation/myEducation.module.scss";
import img from "../../assets/img/Rectangle 1078.png";
const MyEducation = () => {
  return (
    <section className={style.myEducation}>
      <div className={style.myEducation__container}>
        <div className={style.title}>
          <h2>Мое образование и профессиональный путь</h2>
        </div>
        <div className={style.content}>
          <div className={style.text}>
            <p>
              Я окончила [название учебного заведения] со степенью в области
              психологии. В течение своей карьеры я регулярно повышала
              квалификацию, проходя специализированные курсы и тренинги, которые
              позволяют мне оставаться в курсе современных психотерапевтических
              методик. Среди них [указать значимые курсы, тренинги или
              сертификаты].
            </p>
            <p>
              Мой профессиональный путь включает разнообразный опыт работы с
              клиентами в индивидуальном и групповом формате, а также поддержку
              людей, находящихся в кризисных ситуациях или имеющих
              психиатрические диагнозы. Это дало мне глубокое понимание
              человеческой природы и процесса изменений, который может быть
              долгим, но всегда приносит значимые результаты.
            </p>
            <div className={style.text2}>
            <h2>Мои подходы в работе</h2>
            <p>
              Я придерживаюсь мнения, что каждый человек уникален, поэтому
              подход к каждому клиенту должен быть индивидуальным. В своей
              работе я использую методы, которые соответствуют вашему текущему
              состоянию и запросам. Среди них когнитивно-поведенческая терапия
              (КПТ), гештальт-терапия, экзистенциальная терапия и элементы
              арт-терапии. Эти методики позволяют мне гибко подходить к вашим
              нуждам, помогая вам находить новые способы решения проблем и
              улучшать качество жизни.
            </p>
          </div>
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
        <div className={style.content2}>
       
        </div>
      </div>
    </section>
  );
};

export default MyEducation;
