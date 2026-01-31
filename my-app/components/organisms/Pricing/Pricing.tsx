import Footer from '@/components/molecules/Footer/Footer'
import Footer2 from '@/components/molecules/Footer2/Footer2'
import Header from '@/components/molecules/Header/Header'
import Header2 from '@/components/molecules/Header2/Header2'
import Subscription from '@/components/molecules/Pricing/Subscription/Subscription'
import mobileCameraman2 from '../../../public/features&pricing/cameraman2.webp'
import tabletCameraman2 from '../../../public/features&pricing/tablet-cameraman2.webp'
import cameraman2 from '../../../public/features&pricing/cameraman2.webp'

function Pricing() {
  return (
    <div>
        <Header/>
        <Header2
          h1='PRICING'
          h2='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
          images={{
            mobile: mobileCameraman2,
            tablet: tabletCameraman2,
            desktop: cameraman2 
          }}
        />
        <Subscription/>
        <Footer2/>
        <Footer/>
    </div>
  )
}

export default Pricing