import React from 'react'
import MyEducation from '../../myEducation/MyEducation'
import WorkFormat from '../../workFormat/WorkFormat'
import Associations from '../../associations/Associations'
import Certificates from '../../certificates/Certificates'
import ContactMe from '../../contactMe/ContactMe'
import AboutMain from '../../aboutMain/AboutMain'
const About = () => {
  return (
    <>
      <AboutMain/>
      <MyEducation/>
      <WorkFormat/>
      <Associations/>
      <Certificates/>
      <ContactMe/>
    </>
  )
}

export default About