import { DocuAllPlatforms } from "../../../components/Contents/docucharleepage/DocuAllPlatforms"
import { DocuDashboard } from "../../../components/Contents/docucharleepage/DocuDashboard"
import { DocuGrid } from "../../../components/Contents/docucharleepage/DocuGrid"
import { DocuNumbers } from "../../../components/Contents/docucharleepage/DocuNumbers"
import { Footer } from "../../../components/footers/Footer"
import { FooterBanner } from "../../../components/footers/FooterBanner"
import { HomeHeader } from "../../../components/headers/HomeHeader"
import { DocuCharleeHero } from "../../../components/heros/DocuCharleeHero"

export const DocuCharlee = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div className="docuCharlee-page">
        <DocuCharleeHero />
        <DocuDashboard />
        <DocuGrid />
        <DocuNumbers />
        <DocuAllPlatforms />
      </div>
      <FooterBanner />
      <Footer />
    </div> 
  )
}