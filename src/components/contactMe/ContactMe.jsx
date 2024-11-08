import React from "react";
import style from "../contactMe/contactme.module.scss";
import LiverequestBtn from "../../sharedComponents/buttons/LiverequestBtn";
import img from "../../assets/img/Rectangle 1079.png";
const ContactMe = () => {
  return (
    <section className={style.contactMe}>
      <div className={style.contactMe__container}>
        <div className={style.contactMe__title}>
          <h2>Свяжитесь со мной</h2>
        </div>
        <div className={style.contactMe__content}>
          <div className={style.text}>
            <p>
              Я буду рада помочь вам и обсудить любые вопросы. Вы можете
              связаться со мной удобным для вас способом:
            </p>
            <ul>
                <li>
                    <span>Телефон: [номер телефона] — для записи на консультацию или консультации по вопросам.</span>
                </li>
                <li>
                    <span>Электронная почта: [электронная почта] — отправьте письмо, и я отвечу в течение 24 часов.</span>
                </li>
                <li>
                    <span>отправьте письмо, и я отвечу в течение 24 часов.
                    Форма на сайте: Заполните форму для быстрой записи на консультацию.</span>
                </li>
                <li>
                    <span>Онлайн-консультации: Доступны для клиентов из других городов через Zoom или Skype.</span>
                </li>
                <li>
                    <span>Социальные сети: Напишите мне через [название социальных сетей].</span>
                </li>
            </ul>
            <div className={style.btn}>
                <LiverequestBtn/>
            </div>
          </div>
          <div className={style.image}>
            <div className={style.imageBox}>
                <img src={img} alt="" />
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
