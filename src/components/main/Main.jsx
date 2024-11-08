import React, { useEffect, useRef, useState } from "react";
import style from "./main.module.scss";
import authorImg from "../../assets/img/author.jpeg";
import Btn from "../../sharedComponents/buttons/LiverequestBtn";

const Main = () => {
  const [letters] = useState(["Е", "к", "а", "т", "е", "р", "и", "н", "а"]);
  const [spanColors, setSpanColors] = useState(
    Array(letters.length).fill("#654922")
  );
  const img = useRef();
  const refs = useRef(letters.map(() => React.createRef()));

  useEffect(() => {
    const handleResize = () => {
      const imgLeft = img.current.getBoundingClientRect().left;
      const updatedColors = letters.map((_, index) => {
        const spanLeft =
          refs.current[index].current.getBoundingClientRect().left;
        return spanLeft + 7 > imgLeft ? "#fff" : "#654922";
      });
      setSpanColors(updatedColors);
    };
    setTimeout(() => handleResize() , 610 )
    
    window.addEventListener('load' , () => {
      setTimeout(handleResize , 300)
    })    
    window.addEventListener("resize", handleResize);

   
    return () => {
      
      window.removeEventListener("resize", handleResize);
    };
  }, [letters]);
 
  return (
    <section className={style.main}>
      <div className={style.container}>
        <div className={style.left}>
          <p>Психотерапия, очная в Праге и онлайн по всему миру.</p>
          <h1>
            <div className={style.title}>
              {letters.map((el, index) => (
                <span
                  key={index}
                  ref={refs.current[index]}
                  style={{ color: spanColors[index] }}
                >
                  {el}
                </span>
              ))}
            </div>
            <div className={style.lines}>
              <span className={style.line1}></span>
              <span className={style.line2}></span>
            </div>
          </h1>
        </div>
            
        <div className={style.imageBox}>
          <div className={style.media_title1}>
            <div className={style.box1}>
              <span>Е</span>
              <span>катерина </span>
            </div>
          </div>
          <img ref={img} src={authorImg} alt="Author" />
          <div className={style.media_title2}>
            <div className={style.box2}>
              <span>Гридасов</span>
              <span>а</span>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.right__content}>
            <p>Начни новую жизнь прямо сейчас!</p>
            <Btn />
          </div>
        </div>
      </div>
      <div className={style.out}>
        <h1>Гридасова</h1>
      </div>
    </section>
  );
};

export default Main;
