import { FindCharleeBenefits } from "../../../components/Contents/findcharleepage/FindCharleeBenefits"
import { Footer } from "../../../components/footers/Footer"
import { FooterBanner } from "../../../components/footers/FooterBanner"
import { HomeHeader } from "../../../components/headers/HomeHeader"
import { FindCharleeHero } from "../../../components/heros/FindCharleeHero"

export const FindCharlee = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div className="findCharlee-page">
        <FindCharleeHero /> 
        <FindCharleeBenefits />
      </div>
      <FooterBanner />
      <Footer />
    </div> 
  )
}