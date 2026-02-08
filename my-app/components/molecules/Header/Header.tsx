import Image from 'next/image'
import Link from 'next/link'
import siteLogo from '../../../public/photosnap-black.svg'
import MobileMenu from './MobileMenu'
import NavButtons from '@/components/atoms/NavButtons/NavButtons'
import Login from '@/components/molecules/Login/Login'

function Header() {
  return (
    <>
      <div className="hidden md:block fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="w-full h-18 flex justify-around items-center">
          <Link href="/">
            <div className="cursor-pointer p-1 transition-opacity duration-300 hover:opacity-70">
              <Image src={siteLogo} alt="Website Logo" />
            </div>
          </Link>

          <div className="flex gap-9.25">
            <Link href="/stories">
              <NavButtons text="Stories" textColor="black" />
            </Link>
            <Link href="/features">
              <NavButtons text="FEATURES" textColor="black" />
            </Link>
            <Link href="/pricing">
              <NavButtons text="PRICING" textColor="black" />
            </Link>
          </div>

          <Login
            buttonClassName="font-bold text-xs tracking-[2px] px-6 py-3 bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out"
          />
        </div>
      </div>

      <MobileMenu />
    </>
  )
}

export default Header