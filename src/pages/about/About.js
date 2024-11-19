import { LastNews } from "../../components/Contents/aboutpage/LastNews"
import { TeamMember } from "../../components/Contents/aboutpage/TeamMember"
import { Withus } from "../../components/Contents/aboutpage/Withus"
import { Footer } from "../../components/footers/Footer"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { AboutHero } from "../../components/heros/AboutHero"

export const About = () => {
    return (
      <div className="w-full overflow-x-hidden">
        <HomeHeader headerColor={'#0D131E'}/>
        <div className="about-page ">
          <AboutHero />
          <TeamMember />
          <Withus />
          <LastNews />
        </div>
        <Footer />
      </div>
    )
}