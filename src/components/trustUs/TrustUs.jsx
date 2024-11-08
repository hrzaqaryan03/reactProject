import React from "react";
import style from "../trustUs/trustUs.module.scss";
import { useState } from "react";
import { trustData } from "../../trust";
const TrustUs = () => {
  const [show, setShow] = useState(false);
  
  return (
    <section className={style.trustUs}>
      <div className={style.trustUs__container}>
        <div className={style.trustUs__title}>
          <h2>
            <span>Почему мне стоит </span>
            <span>
              д<div className={style.round}></div>
              верять?
            </span>
          </h2>
          <div className={style.line1}></div>
          <div className={style.line2}></div>
        </div>
        <div className={style.trustUs__content}>
          <ul>
            {trustData.map((el) => {
              return (
                <li key={el.id}>
                  <p>{el.text}</p>
                </li>
              );
            })}
            {show && (
              <li>
                <p>
                  Моя основная цель — создать для вас безопасное пространство,
                  где вы сможете открыто говорить о своих переживаниях и
                  находить решения.
                </p>
              </li>
            )}
          </ul>
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
    </section>
  );
};

export default TrustUs;
