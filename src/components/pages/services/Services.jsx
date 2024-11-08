import React from "react";
import style from "../services/services.module.scss";
import { therapyData } from "../../../services";
import TherapyItems from "../../therapyItems/TherapyItems";
const Services = () => {
  return (
    <section className={style.services}>
      <div className={style.services__container}>
        <div className={style.services__title}>
          <h2>Услуги и стоимость</h2>
          <p>
            Добро пожаловать в раздел, где вы можете узнать о моих услугах и
            тарифах. Я предлагаю различные виды психотерапевтической помощи,
            каждое из которых направлено на улучшение вашего самочувствия и
            внутреннего равновесия.
          </p>
          <p className={style.hidden_title}>
            Добро пожаловать в раздел, где вы можете узнать о моих услугах и
            тарифах.
          </p>
        </div>
        <div className={style.itemBox}>
          {therapyData.map((el) => {
            return (
              <TherapyItems
                key={el.id}
                title={el.title}
                desc={el.desc}
                price={el.price}
                id={el.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
