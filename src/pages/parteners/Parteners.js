import { PartenerList } from "../../components/Contents/partenerpage/PartenerList"
import { Footer } from "../../components/footers/Footer"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { PartenerHero } from "../../components/heros/PartenerHero"

export const Parteners = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HomeHeader headerColor={'#0D131E'}/>
      <div className="parteners-page ">
        <PartenerHero />
        <PartenerList />
      </div>
      <Footer />
    </div>
  )
}