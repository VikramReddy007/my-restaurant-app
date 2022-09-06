import React, { useState } from 'react'
import Footer from '../../components/common/footer';
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Deserts from '../../components/deserts';
import MainCourse from '../../components/mainCourse';
import Starters from '../../components/starters';

const HomePage = () => {

  const [activeTab, setActiveTab] = useState("Starters"); 

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {/* Diff screen */}
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  )
}

const getCorrectScreen = (tab) => {
  switch(tab){
    case 'Starters':
      return <Starters />
    case 'MainCourse':
      return <MainCourse />
    case 'Deserts':
      return <Deserts />
    default: return <div>Starters!</div>
  }
}

export default HomePage;