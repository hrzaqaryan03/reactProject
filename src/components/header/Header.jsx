import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "../../components/header/header.module.scss";
import Telegram from "../../sharedComponents/svg/Telegram";
import Whatsapp from "../../sharedComponents/svg/Whatsapp";
import { useState } from "react";
import Burger from "../../components/burger/Burger";
const Header = () => {
  const [active, setActive] = useState("/");
  const [showBurger, setShowBurger] = useState(false);

  const handleClick = (path) => {
    setActive(path);
  };
  const {pathname} = useLocation();
  
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__right}>
          <div className={style.header__logo}>
            <ul>
              <li>
                <Link to={"/"}>Logo</Link>
                </li>
            </ul>
          </div>
          <div className={style.header__menu}>
            <ul>
              <li>
                <Link
                  to={"/about"}
                  className={`${style.link} ${
                    pathname === "/about" ? style.active : ""
                  }`}
                  onClick={() => handleClick("/about")}
                >
                  <span>Оба мне</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className={`${style.link} ${
                    pathname === "/services" ? style.active : ""
                  }`}
                  onClick={() => handleClick("/services")}
                >
                  <span>Услуги</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className={`${style.link} ${
                    pathname === "/contact" ? style.active : ""
                  }`}
                  onClick={() => handleClick("/contact")}
                >
                  <span>Контакты</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.header__contacts}>
          <ul>
            <li className={style.shadow}>
            <a href="tel:+37477889910"  target="blank">+374 77 88 99 10</a>
            </li>
            <li>
              <a href={"https://web.telegram.org/a/"} target="blank">
                <Telegram />
              </a>
            </li>
            <li>
              <a href={"https://web.whatsapp.com/"}  target="blank">
                <Whatsapp />
              </a>
            </li>
          </ul>
        </div>
        <div className={style.burger}>
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
