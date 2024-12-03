import { Box, Container, Grid2, Typography } from "@mui/material"
import { PiGaugeThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsStars, BsListCheck } from "react-icons/bs";
import { PiTarget, PiMagicWand } from "react-icons/pi";
import { LuBellRing } from "react-icons/lu";
import { LuMousePointerClick } from "react-icons/lu";
import { SlDocs } from "react-icons/sl";

const featureItems = [
  {
    icon: <PiGaugeThin size={'24px'} className="mr-2"/>,
    title: 'Severity Management',
    detail: 'I provide reserving recommendations based on available data within the claim file',
  },
  {
    icon: <AiOutlineLineChart size={'24px'} className="mr-2"/>,
    title: 'Claims Efficiency',
    detail: 'Visual insights into your site’s performance.',
  },
  {
    icon: <BsStars size={'24px'} className="mr-2"/>,
    title: 'Underwriting Intelligence',
    detail: 'Equip underwriters with data-backed analytics to refine risk selection.',
  },
  {
    icon: <BsListCheck size={'24px'} className="mr-2"/>,
    title: 'Litigation Prediction',
    detail: 'I predict the likelihood of claims leading to litigation',
  },
  {
    icon: <PiTarget size={'24px'} className="mr-2"/>,
    title: 'Predictive Analytics',
    detail: 'Helps you set and achieve SEO goals with guided assistance.',
  },
  {
    icon: <LuBellRing size={'24px'} className="mr-2"/>,
    title: 'Fraud Detection',
    detail: 'Detect potential fraud early with advanced pattern recognition.',
  },
  {
    icon: <PiMagicWand size={'24px'} className="mr-2"/>,
    title: 'Attorney Involvement',
    detail: 'Guides you through the process of creating and managing links.',
  },
  {
    icon: <LuMousePointerClick size={'24px'} className="mr-2"/>,
    title: 'Claims Insights',
    detail: 'Drive faster, smarter claims resolutions with that reduce severity.',
  },
  {
    icon: <SlDocs size={'24px'} className="mr-2"/>,
    title: 'Instant Answers',
    detail: 'Instantly access insights through our analytical AI assistant.',
  },
  
]

export const Features = () => {
  return (
  <Box className="w-full bg-[#EDF3F8]">
    <Container  maxWidth="lg">
      <Box className="w-full rounded-xl gradient-border" >
        <Box className="w-full p-14 rounded-xl bg-[#EDF3F8]">
          <Box paddingBottom={5}>
            <h3 className="text-[32px] leading-[41px] md:text-[56px] md:leading-[65px] font-medium text-left">
              Where I bring value
            </h3>
          </Box>
          <Box>
            <Grid2 container spacing={1}>
              {featureItems.map((featuerItem, key) => (
                <Grid2 key={key} size={{xs: 12, md:4}}>
                  <Box>
                    <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                      {featuerItem.icon}
                      <h5 className="text-[24px] font-normal text-left">{featuerItem.title}</h5>
                    </Box>
                    <Box paddingY={2}>
                      <p className="text-left">
                      {featuerItem.detail}
                      </p>
                      
                    </Box>
                    <Box paddingY={2}>
                      <button className="font-semibold flex justify-start items-center group relative">
                        Learn more
                        <FaArrowRightLong className="mx-3"/>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#1f1f20] group-hover:w-full"></span>
                      </button>
                    </Box>
                  </Box>
                </Grid2>
              ))}
              
            </Grid2>
          </Box>
        </Box>
      </Box>
      
    </Container>    
  </Box>
  )
  
}