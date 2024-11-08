import React from 'react'
import style from '../ourPartnersItems/ourPartnersItems.module.scss'
const OurPartnersItems = ({data}) => {

  

  return (
    <div className={style.slide}>
      <img src={data.pic} alt="" />
      <p>{data.name}</p>
    </div>
  )
}

export default OurPartnersItems