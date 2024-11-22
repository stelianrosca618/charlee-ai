import { LineBusiness } from "../../components/Contents/solutionpage/LineBusiness"
import { UseCases } from "../../components/Contents/solutionpage/UseCases"
import { Footer } from "../../components/footers/Footer"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { SolutionHero } from "../../components/heros/SolutionHero"

export const Solutions = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div className="solutions-page">
        <SolutionHero />
        <UseCases />
        <LineBusiness /> 
      </div>
      <Footer />
    </div> 
  )
}