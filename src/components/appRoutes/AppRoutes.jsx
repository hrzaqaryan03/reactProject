  import React from 'react'
  import Home from "../pages/home/Home"
  import About from "../pages/about/About"
  import Services from "../pages/services/Services"
  import Contact from "../pages/contact/Contact"
  import LeaveRequest from '../pages/leaveRequest/LeaveRequest'
  import {Routes , Route} from "react-router-dom"
import TherapyInfo from '../theraphyInfo/TherapyInfo'
  import ScrollToTop from '../scrollToTop/ScrollToTop'
  const AppRoutes = () => {


    
    return (
      <>
      <ScrollToTop/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}/><Route/>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/services/:name' element={<TherapyInfo/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/leaveRequest' element={<LeaveRequest/>}></Route>
      </Routes>
      
      </>
    )
  }

  export default AppRoutes