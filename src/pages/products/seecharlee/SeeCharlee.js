import { AllPlatform } from "../../../components/Contents/seecharleepage/AllPlatform"
import { Footer } from "../../../components/footers/Footer"
import { FooterBanner } from "../../../components/footers/FooterBanner"
import { HomeHeader } from "../../../components/headers/HomeHeader"
import { SeeCharleeHero } from "../../../components/heros/SeeCharleeHero"

export const SeeCharlee = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div className="seeCharlee-page">
        <SeeCharleeHero />
        <AllPlatform />
      </div>
      <FooterBanner />
      <Footer />
    </div> 
  )
}