import React from "react";
import style from "../contact/contact.module.scss";
import Telegram from "../../../sharedComponents/svg/Telegram";
import Whatsapp from "../../../sharedComponents/svg/Whatsapp";
import ContactMain from "../../contactMain/ContactMain";
import RequsestForm from "../../requestForm/RequestForm";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section className={style.contact}>
      <div className={style.contact__container}>
        <ContactMain />
        <div className={style.contact__middle}>
          <div className={style.contact__info}>
            <h3>Вы можете связаться со мной любым удобным способом</h3>
            <p>
              Вы можете связаться со мной через социальные сети. Буду рада
              продолжить наше общение!»
            </p>
            <div className={style.info_items}>
              <div className={style.items__right}>
                <p>Электронная почта:</p>
                <p>Номер телефона:</p>
                <div className={style.iconBox}>
                  <a href={"https://web.telegram.org/a/"}  target="blank">
                    <Telegram />
                  </a>
                  <a href={"https://web.whatsapp.com/"}  target="blank">
                    <Whatsapp />
                  </a>
                </div>
              </div>
              <div className={style.items__left}>
                <p>Номер телефона:</p>
                <a href="tel:+374888910"  target="blank">
                  <span>+374 88 89 10</span>
                </a>
              </div>
            </div>
          </div>
          <div className={style.form}>
            <RequsestForm />
          </div>
        </div>
        <div className={style.contact__bottom}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0203854168724!2d-122.41941568468163!3d37.77492967975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d3948c89%3A0xf3d0e516af5b1dd3!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1614709574298!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
