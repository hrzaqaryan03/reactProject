import React from 'react'
import { Link } from 'react-router-dom'
import TherapyInfo from '../../components/theraphyInfo/TherapyInfo'
const SeeMore = ({name}) => {

 
  
  const routePath = `/services/${name ? name.split(' ').join("") : ""}`

  return (
    <>
    <span> 
        <Link
         to={routePath}>Узнать больше</Link>
        <span></span>
    </span>
    </>
  )
}

export default SeeMore