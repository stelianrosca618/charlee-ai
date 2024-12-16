import { Box, Container, Grid2 } from "@mui/material"
import findCharleeRobot from "../../assets/imgs/Dashboards/findCharlee_robot.png"
import findCover from "../../assets/imgs/icons/search-cover.png"
import findCharleeDashboard from "../../assets/imgs/Dashboards/findCharleeDashboard.png"
import patterns from "../../assets/imgs/pattens/Path.png"
import lightIco from "../../assets/imgs/icons/Lightbulb.png"
import useDoneIco from "../../assets/imgs/icons/User_done.png"
import bellIco from "../../assets/imgs/icons/Bell_ring.png";
import { useState } from "react"
import { BookPopup } from "../modals/BookPopup"

const features = [
  {
    icon: lightIco,
    title: 'Predictive Analytics',
    detail: 'Charlee identifies fraud risks early by using predictive models trained on historical fraud cases, allowing insurers to mitigate potential losses proactively.'
  },
  {
    icon: useDoneIco,
    title: 'Behavioral Analysis',
    detail: 'The system monitors claimants’ patterns and detects unusual activities, such as exaggerated claims or inconsistent statements.'
  },
  {
    icon: bellIco,
    title: 'Suspicious Activity Alerts',
    detail: 'Insurers receive notifications when a claim exhibits characteristics typical of fraud, enabling fast action to prevent payouts on suspicious claims.'
  }
]
export const FindCharleeHero = () => {

  const [isOpenBook, setIsOpenBook] = useState(false);

  const handleCloseBook = () => {
    setIsOpenBook(false)
  }

  const handleOpenBook = () => {
    setIsOpenBook(true)
  }


  return (
    <>
    <Box className="w-full pt-24 pb-10">
      <Container maxWidth="lg">
        <Box className="w-full">
          <Grid2 container spacing={1}>
            <Grid2 size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}}>
              <Box paddingY={2} display={"flex"} justifyContent={{xs: "center", sm: "center", md: "flex-start", lg: "flex-start", xl:"flex-start"}} alignItems={"center"}>
                <img src={findCover} className="findCharlee-logo" alt="findCover-ico"/>
                <h5 className="findCharlee-logoTxt text-[29px] leading-[40px] font-medium mx-2">FindCharlee</h5>
              </Box>
              <Box className="w-full text-center md:text-start">
                <h2 className="findCharlee-head text-[36px] md:text-[65px] leading-[39.5px] md:leading-[71.5px] font-medium">
                  Spot Suspicious Claims Fast with FindCharlee
                </h2>
                <p className="findCharlee-text mt-8">
                  FindCharlee is your trusted fraud detection tool, using powerful AI and machine learning to spot suspicious insurance claims. By analyzing patterns in claimant behavior, claim history, and other data, FindCharlee quickly flags high-risk claims for further review, helping you stay ahead of fraud with ease.
                </p>
                <button onClick={() => {handleOpenBook()}} className="findCharlee-book mt-6 w-full md:w-auto rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                  Book a demo
                </button>
              </Box>
            </Grid2>
            <Grid2 size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}} className="findCharlee-dashboard relative">
              <div className="hidden md:block p-4 gradient-background rounded-xl h-full absolute left-20">
                <img src={findCharleeDashboard} alt="findCharlee-dashboard" className="h-full " style={{maxWidth: '200vw'}} />
              </div>
              <div className="block md:hidden p-4 gradient-background rounded-xl w-[150vw] ">
                <img src={findCharleeDashboard} alt="findCharlee-dashboard" className="w-full" style={{maxWidth: '200vw'}} />
              </div>
              <img src={findCharleeRobot} alt="robot" className="absolute bottom-0 left-20 z-10" style={{transform: 'translate(-40%, 50%)'}}/>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
    <Box className="w-full relative py-16">
      <div className="absolute w-full top-0 left-0 h-[400px] z-0"
        style={{backgroundImage: `url(${patterns})`, backgroundRepeat: 'repeat no-repeat'}}
      ></div>
      <Container maxWidth="lg">
        <Box className="w-full relative text-start z-10">
          <h4 className="findCharlee-features text-[29px] md:text-[42px] leading-[40px] md:leading-[54.6px] font-medium py-10">
            FindCharlee Features
          </h4>
          <Box className="w-full">
            <Grid2 container spacing={3}>
              {features.map((featureItem, key) => (
                <Grid2 data-aos-delay={`${(key * 100)+100}`} data-aos="fade-up" key={key} className="rounded-xl bg-white shadow-xl p-10" size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}>
                  <img src={featureItem.icon} alt="feature-icon"/>
                  <h5 className="text-[29px] leading-[40px] font-medium py-6">{featureItem.title}</h5>
                  <p >{featureItem.detail}</p>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Box>
      </Container>
    </Box>
    <BookPopup open={isOpenBook} handleClose={handleCloseBook} />
    </>
    
  )
}