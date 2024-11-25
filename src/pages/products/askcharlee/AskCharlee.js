import { BenefitsSection } from "../../../components/Contents/askcharleepage/BenefitsSection"
import { QueriesSection } from "../../../components/Contents/askcharleepage/QueriesSection"
import { ReviewsSection } from "../../../components/Contents/askcharleepage/ReviewsSection"
import { Footer } from "../../../components/footers/Footer"
import { FooterBanner } from "../../../components/footers/FooterBanner"
import { HomeHeader } from "../../../components/headers/HomeHeader"
import { AskCharleeHero } from "../../../components/heros/AskCharleeHero"

export const AskCharlee = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div className="askCharlee-page">
        <AskCharleeHero />
        <QueriesSection />
        <ReviewsSection />
        <BenefitsSection />
      </div>
      <FooterBanner />
      <Footer />
    </div> 
  )
}