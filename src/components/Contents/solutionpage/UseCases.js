import { Box, Container, Grid2, Typography } from "@mui/material"
import usecaseImg1 from "../../../assets/imgs/banners/useCase1.png"
import usecaseImg2 from "../../../assets/imgs/banners/useCase2.png"
import { ImgLeftContent } from "./ImgLeftContent"
import { ImgRightContent } from "./ImgRightContent"
export const UseCases = () => {
  return (
    <Box className="w-full bg-[#021744] text-white py-20">
      <Container maxWidth="lg">
        <Box className="w-full ">
          {/* <Grid2 container spacing={1}>
            <Grid2 size={4}></Grid2>
            <Grid2 size={8} className="text-start pt-20">
            <h4 data-aos="fade-up" className="text-[42px] leading-[54.6px] font-medium uppercase">Use Cases</h4>
            <h6 data-aos="fade-up" className="text-[24px] leading-[32px] font-normal py-5" >
              Charlee® Insights are applicable for Claims, Underwriting and IT<br /> (Analytics/Data Science) teams.
            </h6>    
            </Grid2>
          </Grid2> */}
        </Box>
        <Box className="w-full text-center ">
          <h4 data-aos="fade-up" className="text-[42px] leading-[54.6px] font-medium">Use Cases</h4>
          <h6 data-aos="fade-up" className="text-[24px] leading-[32px] font-normal py-5" >
            Charlee® Insights are applicable for Claims, Underwriting and IT<br /> (Analytics/Data Science) teams.
          </h6>
        </Box>
        <ImgLeftContent 
          preTitle={'Claims'}
          title={'Claim Severity Management'}
          detail={'Charlee® gives claims teams a full view of data to manage claim severity with precision. by identifying patterns, Charlee® helps reduce risks and enables faster, fairer resolutions'}
          cases={[
            {
              name: 'Case Study 1',
              path: '/usecase/AskCharleeClamInsight1'
            },
            {
              name: 'Case Study 2',
              path: '/usecase/AskCharleeClamInsight2'
            },
            {
              name: 'Case Study 3',
              path: '/usecase/AskCharleeClamInsight3'
            },
          ]}
          bgImg={usecaseImg1}
          btnBg={'#021744'}
          imgCols={6}
          contentCols={6}
          isDark={true}
        />  

        <ImgRightContent 
          preTitle={'Underwriting'}
          title={'Key Risk Factors and Emerging Risks '}
          detail={'The Charlee Insurance Insights Engine (patent pending) provides a great resource for Underwriting Management Risk Analysis in evaluating and managing portfolios. Previous years of claims data can be leveraged for powerful Artificial Intelligence generated insights for a good understanding of prior losses. These Insights can help an Underwriting Manager develop and monitor an efficient and effective Underwriting strategy, including risk selection and endorsements'}
          cases={['Case Study 1', 'Case Study 2', 'Case Study 3', 'Case Study 4']}
          bgImg={usecaseImg2}
          btnBg={'#021744'}
          imgCols={6}
          contentCols={6}
          isDark={true}
        />

      </Container>
    </Box>
  )
}