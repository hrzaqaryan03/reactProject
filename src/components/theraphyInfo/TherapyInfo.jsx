import React from "react";
import { useParams } from "react-router-dom";
import { singleTherapyData } from "../../services";
import style from "../theraphyInfo/therapyInfo.module.scss";
import img1 from "../../assets/img/unsplash_2s9aHF4eCjI.png";
import img2 from "../../assets/img/unsplash_K0FidtcDQik.png";
import bottomRightImg from "../../assets/img/unsplash_K0FidtcDQik (1).png";
import bottomLeftImg from "../../assets/img/unsplash_K0FidtcDQik (2).png";
import LeaverequestBtn from "../../sharedComponents/buttons/LiverequestBtn";
const TherapyInfo = () => {
  const { name } = useParams();

  const therapy = singleTherapyData.find(
    (therapy) => therapy.title.split(" ").join("") == name
  );
  if (!therapy) {
    return <h1>Unknown Therapy</h1>;
  }

  return (
    <section className={style.therapy}>
      <div className={style.therapy__container}>
        <div className={style.top}>
          <div className={style.right}>
            <div className={style.theraphy__title}>
              <h3>{therapy.title}</h3>
              <p>{therapy.description}</p>
            </div>
            <div className={style.therapy_about}>
              <h3 style={{ maxWidth: "384px" }}>{therapy.processTitle}</h3>
              {therapy.processDetails.map((detail, index) => (
                <p key={index}>
                  <span>{detail.stepTitle}</span> {detail.stepDescription}
                </p>
              ))}
            </div>
          </div>
          <div className={style.left}>
            <div className={style.images}>
              <div className={style.imagebox}>
                <img src={img1} alt="" />
              </div>
              <div className={style.imagebox}>
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className={style.therapy__list}>
          <h3>{therapy.helpTitle}</h3>
          <ol>
          {therapy.helpList.map((elem , index) => {
            return <li key={index}>
                {elem}
            </li>
          })}
          </ol>
        </div>
        <div className={style.therapy__question}>
          <h3>{therapy.bookingTitle}</h3>
          <p>
          {therapy.bookingInfo}
          </p>
        </div>
        <div className={style.bottom}>
          <h3>{therapy.pricingTitle}</h3>
          {therapy.pricingDetails.map((elem , index) => {
            return <p key={index}>{elem}</p>
          })}
          <LeaverequestBtn/>
        </div>
      </div>
      <div className={style.bgImgRight}>
        <img src={bottomRightImg} alt="" />
      </div>
      <div className={style.bgImgLeft}>
        <img src={bottomLeftImg} alt="" />
      </div>
    </section>

  );
};

export default TherapyInfo;
