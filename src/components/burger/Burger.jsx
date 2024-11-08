import React, { useEffect } from "react";
import style from "../burger/burger.module.scss";
import { useState } from "react";
import BurgerMenuItems from "../burgerMenuItems/BurgerMenuItems";
import Close from "../../sharedComponents/svg/Close"
const Burger = () => {
  const [open, setOpen] = useState(false);
  const [windowWidht , setWindowWidth] = useState(window.innerWidth)
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    
    setOpen(!open);
  };
  
  useEffect(() => { 
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
        if(window.innerWidth > 768) {
          setOpen(false)
        }
      }
      window.addEventListener("resize" , handleResize)

      return () => window.removeEventListener("resize" , handleResize)

  },[])
    

  return (
    <div className={style.burger}>
      <div className={style.burger__container}>
        <button onClick={toggleDrawer}>
          {open ? (
            <Close/>
          ) : (
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="34" height="34" fill="#EEEEEE" />
              <path
                d="M28.3333 25.4998C28.6944 25.5002 29.0417 25.6385 29.3043 25.8864C29.5668 26.1342 29.7248 26.473 29.746 26.8335C29.7672 27.1939 29.6499 27.5489 29.4181 27.8258C29.1864 28.1027 28.8576 28.2806 28.4991 28.3233L28.3333 28.3332H5.66667C5.30559 28.3328 4.95829 28.1945 4.69573 27.9466C4.43317 27.6988 4.27517 27.36 4.25401 26.9995C4.23285 26.6391 4.35012 26.2841 4.58188 26.0072C4.81363 25.7303 5.14236 25.5524 5.50092 25.5098L5.66667 25.4998H28.3333ZM28.3333 15.5832C28.7091 15.5832 29.0694 15.7324 29.3351 15.9981C29.6007 16.2638 29.75 16.6241 29.75 16.9998C29.75 17.3756 29.6007 17.7359 29.3351 18.0016C29.0694 18.2672 28.7091 18.4165 28.3333 18.4165H5.66667C5.29094 18.4165 4.93061 18.2672 4.66493 18.0016C4.39926 17.7359 4.25 17.3756 4.25 16.9998C4.25 16.6241 4.39926 16.2638 4.66493 15.9981C4.93061 15.7324 5.29094 15.5832 5.66667 15.5832H28.3333ZM28.3333 5.6665C28.7091 5.6665 29.0694 5.81576 29.3351 6.08144C29.6007 6.34711 29.75 6.70745 29.75 7.08317C29.75 7.45889 29.6007 7.81923 29.3351 8.0849C29.0694 8.35058 28.7091 8.49984 28.3333 8.49984H5.66667C5.29094 8.49984 4.93061 8.35058 4.66493 8.0849C4.39926 7.81923 4.25 7.45889 4.25 7.08317C4.25 6.70745 4.39926 6.34711 4.66493 6.08144C4.93061 5.81576 5.29094 5.6665 5.66667 5.6665H28.3333Z"
                fill="#654922"
              />
            </svg>
          )}
        </button>
        <BurgerMenuItems
          toggleDrawer={toggleDrawer}
          open={open}
        ></BurgerMenuItems>
      </div>
    </div>
  );
};

export default Burger;
