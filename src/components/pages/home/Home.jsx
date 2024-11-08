import React from 'react';
import Main from '../../main/Main'
import PersonInfo from "../../personInfo/PersonInfo"
import TrustUs from '../../trustUs/TrustUs';
import TherapyEffects from '../../theraphyEffects/TherapyEffects';
import ServiceTypes from '../../serviceTypes/ServiceTypes';
import Result from '../../result/Result';
import Ourpartners from '../../ourPartners/Ourpartners';
import Table from '../../table/Table';
import Questions from '../../questions/Questions';
import MyDog from '../../myDog/MyDog';
const Home = () => {
  return (
    <>
      <Main/>
      <PersonInfo/>
      <TrustUs/>
      <TherapyEffects/>
      <ServiceTypes/>
      <Result/>
      <Ourpartners/>
      <Table/>
      <Questions/>
      <MyDog/>
    </>
  );
};

export default Home;
