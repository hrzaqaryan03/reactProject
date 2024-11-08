import React from "react";
import { Link } from "react-router-dom";
import style from "../burgerMenuItems/burgerMenuItems.module.scss";
import { Drawer } from "@mui/material";
import flower1 from '../../assets/img/flower1.png'
import flower2 from '../../assets/img/flower2.png'
const BurgerMenuItems = ({ toggleDrawer, open }) => {
  return (
    <Drawer className={style.drawer}
      PaperProps={{
        style: {
          marginTop: "78px",
        },
      }}
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      
    >
      <div
        className={style.burger__menu}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <ul>
          <li>
            <Link to={"/about"}>Оба мне</Link>
          </li>
          <li>
            <Link to={"/services"}>Услуги</Link>
          </li>
          <li>
            <Link to={"/contact"}>Контакты</Link>
          </li>
        </ul>
        
        <img className={style.flower1} src={flower1} alt="" />
        <img className={style.flower2} src={flower2} alt="" />
      </div>

    </Drawer>
  );
};

export default BurgerMenuItems;
