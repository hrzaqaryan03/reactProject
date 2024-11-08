import React from "react";
import style from "../serviceTypeItems/serviceTypeItems.module.scss";
import Button from "../../sharedComponents/buttons/LiverequestBtn";
import SeeMore from "../../sharedComponents/buttons/SeeMore";
const ServiceTypeItems = ({ title, desc, price, id , text }) => {

  return (
    <div
      className={style.item}
    >
      <div className={style.item__title}>
        <h4>{text}</h4>
      </div>
      <div className={style.item__info}>
        <p>{desc}</p>
        <span>{price}</span>
      </div>
      <div className={style.item__links}>
        <Button />
        <SeeMore name={title}/>
      </div>
    </div>
  );
};

export default ServiceTypeItems;
