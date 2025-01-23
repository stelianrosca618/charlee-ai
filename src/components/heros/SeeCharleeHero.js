import { Box, Container, Grid2 } from "@mui/material"
import securityCover from "../../assets/imgs/icons/security-cover.png"
import rechardAvata from "../../assets/imgs/avatars/rechard.png"
import MariesAvata from "../../assets/imgs/avatars/Maries.png";
import seeCharleeMagicDashboard from "../../assets/imgs/Dashboards/seeCharleeMagicDashboard.png";

import eyeSymbol from "../../assets/imgs/icons/eye.png";
import speakerSymbol from "../../assets/imgs/icons/speaker.svg";
import watchSymbol from "../../assets/imgs/icons/watch.svg";

import patterns from "../../assets/imgs/pattens/Path.png"
import { useState } from "react";
import { BookPopup } from "../modals/BookPopup";

const features = [
  {
    icon: speakerSymbol,
    title: 'Severity Management',
    detail: 'Starting at FNOL, 4SeeCharlee provides reserving recommendations based on available data within the claim file, including documents and correspondence. Throughout the life of the claim, 4SeeCharlee reviews and analyzes every new note and document and will alert the claims professional if Charlee’s reserving recommendation has changed.'
  },
  {
    icon: eyeSymbol,
    title: 'Litigation Prediction',
    detail: '4SeeCharlee predicts the likelihood of claims leading to litigation. This early detection helps claims handlers to intervene proactively, assess the situation, and develop strategies to mitigate the risk of litigation. The platform also detects hidden patterns by analyzing historical claims data, helping claims handlers avoid surprises and manage reserves efficiently.'
  },
  {
    icon: watchSymbol,
    title: 'Attorney Involvement',
    detail: '4SeeCharlee monitors attorney involvement by identifying patterns in claims with legal representation. 4SeeCharlee can predict attorney engagement up to six weeks before the official notice of representation, giving insurance carriers critical lead time to develop their strategy and prepare for potential legal actions.'
  }
]

export const SeeCharleeHero = () => {

  const [isOpenBook, setIsOpenBook] = useState(false);

  const handleCloseBook = () => {
    setIsOpenBook(false)
  }

  const handleOpenBook = () => {
    setIsOpenBook(true)
  }

  return (
    <>
      <Box className="w-full pt-24 pb-10" >
        <Container maxWidth="lg">
          <Box className="w-full py-10">
            <Grid2 container spacing={1}>
              <Grid2 size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}}>
                <Box paddingY={2} display={"flex"} justifyContent={{xs: "center", sm: "center", md: "flex-start", lg: "flex-start", xl:"flex-start"}} alignItems={"center"}>
                  <img src={securityCover} alt="seecharlee-ico" className="seecharlee-logo"/>
                  <h5 className="askcharlee-logoText text-[29px] leading-[40px] font-medium mx-2">4SeeCharlee</h5>
                </Box>
                <Box className="w-full text-center md:text-start">
                  <h2 className="askCharlee-head overflow-y-hidden text-[36px] md:text-[65px] leading-[39.5px] md:leading-[71.5px] font-medium">
                    Stay ahead with predictive insights
                  </h2>
                  <p className="askCharlee-text mt-8">
                    4SeeCharlee aids claims handlers by providing advanced insights through its severity management, litigation prediction, and **attorney involvement tracking, streamlining decision-making and improving outcomes.
                  </p>
                  <button onClick={() => handleOpenBook()} className="askCharlee-book mt-6 w-full md:w-auto rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                    Book a demo
                  </button>
                </Box>
                <Box className="w-full text-start mt-8">
                  <p className="askCharlee-reveiwTxt py-6">
                  “We were in production within 30 days.  Charlee is helping make a difference and the staff at Charlee are responsive and knowledgeable.”
                  </p>
                  <Box className="askCharlee-reviewer" display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                    <img src={MariesAvata} alt="avata" className="h-6 w-6 rounded-full"/>
                    <span className="mx-2 ">Brian Maries AVP, Claims Olympus Insurance </span>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}} className="relative">
              <img src={seeCharleeMagicDashboard} alt="dashboard" className="seeCharlee-bashboardImg relative md:absolute top-0 md:top-[-130px] left-[-6vw] w-[200vw] md:w-[90vw] max-w-screen-2xl"/>
                {/* <img src={seeCharleeDashboard} alt="dashboard" className="absolute top-[-130px] left-[-6vw] w-[90vw] max-w-screen-2xl"/>
                <img src={seeCharleeRobot} alt="seecharlee-robot" className="absolute bottom-0 left-0 h-[379px]" style={{transform: 'translate(-10%, 50%)'}} />
                <Box className="p-4 rounded-xl shadow-lg bg-white absolute bottom-0 right-0"
                  sx={{transform: 'translate(100%, 50%)'}}
                >
                  <img src={mapImg} alt="map-img" className="h-[140px]"/>
                </Box>
                <Box className="p-4 rounded-xl shadow-lg bg-white absolute left-0 top-[50%]"
                  sx={{transform: 'translate(50%, -100%)'}}
                >
                  <img src={chatImg} alt="chat-img" className="h-[120px]"/>
                </Box> */}
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
            <h4 data-aos="fade-right" className="text-[42px] leading-[54.6px] font-medium py-10">
              4SeeCharlee Features
            </h4>
            <Box className="w-full">
              <Grid2 container spacing={3}>
                {features.map((featureItem, key) => (
                  <Grid2 data-aos="fade-up" className="rounded-xl bg-white shadow-xl p-10" size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}>
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