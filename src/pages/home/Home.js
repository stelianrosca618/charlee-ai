import { Typography } from "@mui/material"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { HomeHero } from "../../components/heros/HomeHero"
import { HomeLeftSection } from "../../components/Contents/HomeLeftSection"

export const Home = () => {
    return (
      <div className="w-full">
        <HomeHeader />
        <div className="home-page ">
          <HomeHero />
          <HomeLeftSection />
        </div>
        
      </div>
    )
}