import AllBenefits from '@/components/molecules/Features/AllBenefits/AllBenefits'
import Footer2 from '@/components/molecules/Features/Footer2/Footer2'
import Header2 from '@/components/molecules/Features/Header2/Header2'
import Footer from '@/components/molecules/Home/Footer/Footer'
import Header from '@/components/molecules/Home/Header/Header'
import React from 'react'

function Features() {
  return (
    <div>
        <Header/>
        <Header2/>
        <AllBenefits/>
        <Footer2/>
        <Footer/>
    </div>
  )
}

export default Features