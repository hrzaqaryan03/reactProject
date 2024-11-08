import React from 'react'
import style from "../therapyItems/therapyItems.module.scss"
import LiverequestBtn from "../../sharedComponents/buttons/LiverequestBtn"
import SeeMore from "../../sharedComponents/buttons/SeeMore"

const TherapyItems = ({id , title , price , desc}) => {

    
  
  
  return (
    <div className={style.therapyItems}>
        <div className={style.therapyItems_left}>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
        <div className={style.therapyItems_middle}>
            <p>{price}</p>
        </div>
        <div className={style.therapyItems_right}>
             <SeeMore name={title}/>
            <LiverequestBtn id={id} title={title}/>
        </div>
    </div>
  )
}

export default TherapyItems