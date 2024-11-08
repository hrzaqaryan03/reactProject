import React, { useEffect } from "react";
import style from "../leaveRequest/leaveRequest.module.scss";
import img from "../../../assets/img/Rectangle 1203 (1).png"
import RequestForm from "../../requestForm/RequestForm";
import { useLocation } from "react-router-dom";
const LeaveRequest = () => {
 
  const location = useLocation()
  
  const title = location.state || {}
  
  return (
    
    <section className={style.leaveRequest}>
      <div className={style.leaveRequest__container}>
        <div className={style.leaveRequest__box}>
          <div className={style.leaveRequest__left}>
            <div className={style.left_title}>
              <h4>Оставьте заявку на консультацию</h4>
            </div>
            <div className={style.left_info}>
              <p>Что мы обсудим?</p>
              <ul>
                <li>
                  <span>
                    Обсудим ваши переживания и найдём пути их решения.
                  </span>
                </li>
                <li>
                  <span>
                    Поговорим о том, что вас беспокоит, и как это преодолеть.
                  </span>
                </li>
                <li>
                  <span>
                    Разберём ваши цели и способы преодоления трудностей.
                  </span>
                </li>
                <li>
                  <span>
                    Исследуем ваши чувства и поведение для большей ясности.
                  </span>
                </li>
              </ul>
            </div>
            <div className={style.left_imageBox}>
            <img src={img} alt="" />
            </div>
          </div>
          <div className={style.leaveRequest__right}>
            <RequestForm title={title}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaveRequest;
