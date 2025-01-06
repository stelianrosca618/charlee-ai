import { Box, Container, Grid2 } from "@mui/material"
import blog5 from "../../../assets/imgs/news/blog5.png"
import blog4 from "../../../assets/imgs/news/blog4.png"
import blog2 from "../../../assets/imgs/news/blog2.png"
import { ImgLeftContent } from "./ImgLeftContent"
import { ImgRightContent } from "./ImgRightContent"
export const LineBusiness = () => {
  return (
    <Box className="w-full bg-[#F9F9F9] py-20">
      <Container maxWidth="lg">
        <Box className="w-full">
          <h4 data-aos="fade-up" className="text-[42px] leading-[54.6px] font-medium mb-6">Line of Business</h4>
          <h6 data-aos="fade-up" className="text-[24px] leading-[32px] font-normal">
            Charlee® ’ insights are applicable for Claims, Underwriting, and insurer’s <br />IT/internal analytics/data science teams. They are available for all<br /> personal, commercial, work comp and specialty/excess lines of business.
          </h6>
        </Box>
        <ImgLeftContent 
          preTitle={'Claims Risk Management'}
          title={'Workflow Summary with AI Insights'}
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
          bgImg={blog5}
          btnBg={'#F9F9F9'}
          imgCols={5}
          contentCols={7}
          isDark={false}
        />  
        <ImgRightContent 
          preTitle={'Litigation and Claims Handling Efficiency'}
          title={'Open Claims Predicted for Litigation '}
          detail={'The power of Charlee® for litigation prediction allows the Claims Examiner and Manager to identify the claims at risk for possible litigation, allowing the claim handler to take action to resolve the claim efficiently and promptly. The Charlee® Insurance Insights Engine (patent pending) will alert the user weeks before the claim falls into litigation. Artificial Intelligence and natural language processing, coupled with Charlee.ai proprietary insights, brings these predictions with over 80 percent accuracy.'}
          cases={['Case Study 1', 'Case Study 2', 'Case Study 3', 'Case Study 4']}
          bgImg={blog4}
          btnBg={'#F9F9F9'}
          imgCols={5}
          contentCols={7}
          isDark={false}
        />
       <ImgLeftContent 
          preTitle={'Compliance and Performance Monitering'}
          title={'Quality Control Alerts for Potential Fraud'}
          detail={'Insurance fraud affects everyone, and Charlee® helps Claims, Underwriting, and Special Investigation Units (SIU) tackle it head-on. Using AI-driven insights, Charlee® identifies QC Alerts and Red Flags, uncovering patterns in claims and policies that could signal fraud. With intelligent data delivery, Charlee® empowers your anti-fraud team to spot schemes faster and make informed decisions, turning unstructured text into actionable insights to prevent and reduce fraud.'}
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
          bgImg={blog2}
          btnBg={'#F9F9F9'}
          imgCols={5}
          contentCols={7}
          isDark={false}
        />  
        
        
      </Container>
    </Box>
  )
}