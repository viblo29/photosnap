import Footer from '@/components/molecules/Footer/Footer'
import Header from '@/components/molecules/Header/Header'
import HeroStory from '@/components/molecules/Stories/HeroStory/HeroStory'
import StoriesSection from '@/components/molecules/Stories/StoriesSection/StoriesSection'
import React from 'react'

function StoriesPage() {
  return (
    <div>
        <Header/>
        <HeroStory/>
        <StoriesSection/>
        <Footer/>
    </div>
  )
}

export default StoriesPage