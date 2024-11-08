import React, { useState } from "react";
import style from "../questions/questions.module.scss";
import img from "../../assets/img/Rectangle 1186.png";
import OpenIcon from "../../sharedComponents/svg/X";
import Minus from "../../sharedComponents/svg/Minus"
import { questionsData } from "../../questions.js";
const Questions = () => {

  const [data , setData] = useState(questionsData)

  const toggleOpen = (id) => {
    setData((prev) => {
      return prev.map((el) => {
        return el.id === id ? { ...el, open: !el.open } : el;
      });
    });
  };
  return (
    <section className={style.question}>
      <div className={style.question__container}>
        <div className={style.title}>
          <h2>Часто Задаваемые Вопросы</h2>
        </div>
        <div className={style.content}>
          <div className={style.questions}>
            {data.map((el) => {
              return (
                <div
                  className={style.item}
                  key={el.id}
                  onClick={() => toggleOpen(el.id)}
                  style={{
                    maxHeight: el.open ? "300px" : "76px",
                    overflow:"hidden",
                    transition: "maxHeight 400ms ease",
                  }}
                >
                  <div className={style.question}>
                    <p>{el.question}</p>
                    {el.open ? <Minus/> : <OpenIcon/>}
                    
                  </div>
                  <div
                    className={style.answer_hidden}
                    style={{
                      maxHeight: el.open ? "200px" : "0",
                      // overflow: "hidden",
                      transition: "max-height 0.4s ease, opacity 0.4s ease",
                      opacity: el.open ? 1 : 0,
                    }}
                  >
                    <p>{el.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={style.right}>
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

export default Questions;
