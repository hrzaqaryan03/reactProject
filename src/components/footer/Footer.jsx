import React from "react";
import {Link} from 'react-router-dom'
import style from './footer.module.scss'
import Viber from "../../sharedComponents/svg/Viber"
import Instagram from "../../sharedComponents/svg/Instagram"
import Telegram from "../../sharedComponents/svg/Telegram";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__left}>
          <p>© 2024 «Сайт психологов Psypargue.ru»</p>
          <p>
            Я предлагаю как очные встречи в Праге, так и онлайн-консультации,
            что делает мою помощь доступной независимо от вашего местоположения.
          </p>
        </div>
        <div className={style.footer__middle}>
          <div className={style.middle__left}>
            <Link to={'/about'}>
              <span> Оба мне</span>
            </Link>
            <Link to={'/services'}>
              <span>Услуги</span>
            </Link>
            <Link to={'contact'}>
              <span>Контакты</span>
            </Link>
          </div>
          <div className={style.middle__right}>
            <Link>Конфиденциальность</Link>
            <Link>Сообщить об ошибке</Link>
            <Link>Рекомендую смотреть</Link>
          </div>
        </div>
        <div className={style.footer__right}>
          <div className={style.right__icons}>
            <a href="https://www.viber.com/en/"  target="blank">
              <Viber/>
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en"  target="blank">
              <Instagram/>
            </a>
            <a href="https://web.telegram.org/a/"  target="blank">
              <Telegram/>
            </a>
          </div>
          <div>
          <a href="tel:+3748889102050"  target="blank">
              <span>+374 88 89 10 20 50</span>
            </a>
            
          </div>
          <div>
          <a href="mailto:psypargue@gmail.com"  target="blank">
              <span>psypargue@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
