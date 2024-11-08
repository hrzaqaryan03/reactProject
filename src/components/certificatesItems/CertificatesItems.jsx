import React from "react";
import style from "../certificatesItems/certificatesItems.module.scss";
const Certificatesitems = ({ data }) => {
  return (
    <div className={style.box}>
      <img src={data.pic} alt="" />
    </div>
  );
};
export default Certificatesitems;
