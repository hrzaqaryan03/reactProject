import React from "react";
import style from "../contactMain/contactMain.module.scss";
const ContactMain = () => {
  return (
    <section className={style.contactMain}>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Контакты</h1>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
