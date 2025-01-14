import { Box, Container } from "@mui/material"
import charleeFlag from "../../../assets/imgs/Dashboards/charlee_flagRobot.png"
import blog7 from "../../../assets/imgs/news/blog7.png"
import { ImgLeftContent } from "../solutionpage/ImgLeftContent"
export const FindCharleeBenefits = () => {
  return (
    <>
    <Box className="w-full">
      <Container maxWidth="lg" sx={{paddingX: 0}}>
        <Box data-aos="fade-left" className="w-full px-8 md:px-0" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"start"} alignItems={"center"}>
          <img src={charleeFlag} alt="flag-bot" className="mr-0 md:mr-5" />
          <Box className="w-full text-start">
            <h5 className="text-[29px] leading-[40px] font-medium">
              FindCharlee Benefits
            </h5>
            <h4 className="text-[32px] md:text-[42px] leading-[41px] md:leading-[54px] font-medium mt-4">
              I make it easy for insurers to spot suspicious claims automatically, saving time and money while focusing investigations where they’re needed most.
            </h4>
          </Box>
        </Box>
        <Box data-aos="fade-up" paddingY={4} width={'100%'} display={"flex"} flexDirection={{xs: "column",  md: "row", lg: "row", xl: "row"}} justifyContent={"center"} alignItems={{xs: "center", md:"flex-start"}} paddingBottom={{md: '117px', lg: '117px', xl: '117px'}}>
          <Box maxWidth={'250px'} marginX={3} marginY={3}>
            <h1 className="font-bold text-[#0099B0] text-[84px] leading-[95.76px]">55M</h1>
            <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
            <Box className="text-[16px] leading-[31px]" width={'100%'} padding={'19px'}>
              Total claims analyzed <br /> by Charlee.ai
            </Box>
          </Box>
          <Box maxWidth={'250px'} marginX={3} marginY={3}>
            <h1 className="font-bold text-[#0099B0] text-[84px] leading-[95.76px]">50K</h1>
            <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
            <Box className="text-[16px] leading-[31px]" width={'100%'}  padding={'19px'}>
              Pre-built and pre-trained insights in a predictive analytics solution
            </Box>
          </Box>
          <Box maxWidth={'250px'} marginX={3} marginY={3}>
            <h1 className="font-bold text-[#0099B0] text-[84px] leading-[95.76px]">24/7</h1>
            <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
            <Box className="text-[16px] leading-[31px]" width={'100%'}  padding={'19px'}>
              Our virtual claims assistant is available around the clock
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
    <Box className="w-full bg-[#021744] text-white">
      <Container maxWidth="lg">
      <ImgLeftContent 
          preTitle={''}
          title={'Red Flags/Quality Control Alerts for Potential Fraud'}
          detail={'The power of Charlee® for litigation prediction allows the Claims Examiner and Manager to identify the claims at risk for possible litigation, allowing the claim handler to take action to resolve the claim efficiently and promptly. The Charlee® Insurance Insights Engine (patent pending) will alert the user weeks before the claim falls into litigation. Artificial Intelligence and natural language processing, coupled with Charlee.ai proprietary insights, brings these predictions with over 80 percent accuracy.'}
          cases={[
            {
              name: 'Case Study 1',
              path: '/usecase/findcharlee1'
            },
            {
              name: 'Case Study 2',
              path: '/usecase/findcharlee2'
            },
            {
              name: 'Case Study 3',
              path: '/usecase/findcharlee3'
            },
          ]}
          bgImg={blog7}
          btnBg={'#021744'}
          imgCols={6}
          contentCols={6}
          isDark={true}
          isVideoButton={true}
          videolink={'/medias/CharleeAI_Overview_2024.mp4'}
        />  
      </Container>
    </Box>
    </>
  )
}