import React from "react";
import style from "../workFormat/workFormat.module.scss";
import img from "../../assets/img/Rectangle 45 (1).png";
const WorkFormat = () => {
  return (
    <section className={style.workFormat}>
      <div className={style.workFormat__container}>
        <div className={style.title}>
          <h2>Формат работы</h2>
        </div>
        <div className={style.content}>
          <div className={style.info}>
            <div className={style.text1}>
              <p>
                Я работаю как очно в Праге, так и онлайн, что позволяет мне
                сотрудничать с клиентами из разных стран и культур. Это дает вам
                возможность выбрать наиболее удобный способ взаимодействия, не
                ограничиваясь географическими рамками. Онлайн-сессии так же
                эффективны, как и очные встречи, и предоставляют гибкость в
                выборе времени.
              </p>
            </div>
            <div className={style.text2}>
              <h2>Как я могу вам помочь</h2>
              <p>
                Если вы чувствуете, что застряли на месте, сталкиваетесь с
                постоянным стрессом, переживаете трудные периоды в отношениях
                или просто хотите лучше узнать себя, я готова поддержать вас.
                Вместе мы будем работать над тем, чтобы понять причины ваших
                переживаний, найти ресурсы для их преодоления и двигаться к
                более осознанной и гармоничной жизни.
              </p>
            </div>
          </div>
          <div className={style.table}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <h6>Решение личных кризисов:</h6>
                      <p>
                        Вы получите профессиональную поддержку, которая поможет
                        найти выход из сложных жизненных ситуаций, преодолеть
                        кризисы и двигаться вперед.
                      </p>
                    </div>
                  </td>
                  <td className={style.imageBox}>
                    <div>
                      <img src={img} alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <h6>Новые стратегии для улучшения качества жизни:</h6>
                      <p>
                        Вы научитесь справляться со стрессом, находить радость в
                        повседневной жизни и использовать внутренние ресурсы для
                        достижения своих целей.
                      </p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h6>
                        Эмоциональную поддержку и развитие уверенности в себе:
                      </h6>
                      <p>
                        Я помогу вам справиться с тревогами и внутренними
                        конфликтами, чтобы вы почувствовали себя более уверенно
                        и стабильно в любой жизненной ситуации.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFormat;
