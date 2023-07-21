import React, { useState } from 'react'
import Footer from '../../components/common/footer';
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import BiryaniAndRice from '../../components/biryaniandrice';
import MainCourse from '../../components/mainCourse';
import Starters from '../../components/starters';
import Beverages from '../../components/Beverages';

const HomePage = () => {

  const [activeTab, setActiveTab] = useState("Starters"); 

  return (
    <>
      <div>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        {/* <MenuDisplay tabName={activeTab} setActiveTab={setActiveTab}/> */}
        <Beverages />  
        <Footer />
      </div>
    </>
  )
}

const getCorrectScreen = (tab) => {
  // return <MenuDisplay tabName={tab} />
  switch(tab){
    case 'Starters':
      return <Starters />
    case 'MainCourse':
      return <MainCourse />
    case 'Biryani/Rice':
      return <BiryaniAndRice />
    default: return <div>Starters!</div>
  }
}

export default HomePage;