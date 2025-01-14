import { Box, Container } from "@mui/material"
import { ImgLeftContent } from "../solutionpage/ImgLeftContent"
import blog5 from "../../../assets/imgs/news/blog5.png"

const platformItems = [
  {
    title: 'Proactive Litigation Management',
    detail: 'By predicting litigation 90-120 days in advance, Charlee.ai helps claims handlers intervene early to reduce the risk of costly legal disputes. This allows for better preparation and resource allocation.'
  },
  {
    title: 'Enhanced Severity Management',
    detail: 'Charlee.ai helps claims handlers identify and prioritize high-severity claims early on, ensuring timely resolution of the most complex cases while optimizing the workflow for lower-severity ones.'
  },
  {
    title: 'Improved Claims Efficiency',
    detail: 'It prioritizes claims based on predicted severity and litigation likelihood, speeding up the handling of simpler cases and helping insurers reduce claims cycle times.'
  }
]

export const AllPlatform = () => { 
  return (
    <>
    <Box className="w-full py-40">
      <Container maxWidth="lg">
        <Box data-aos="fade-up" className="w-full">
          <h4 className="text-center text-[42px] leading-[54.6px] font-medium">All-in-one platform</h4>
          <p className="text-center">
            4SeeCharlee enables insurers to enhance decision-making, improve operational <br /> efficiency, and reduce losses.
          </p>
          <Box className="w-full text-start py-20 px-10 md:px-0">
            <ul className="list-image-[url(./assets/imgs/icons/Check_symbol.svg)] list-outside grid  grid-cols-1 md:grid-cols-3 gap-10">
              {platformItems.map((benefitItem, key) => (
                <li data-aos="flip-right" key={key} >
                  <h6 className="text-[20px] leading-[31px] font-normal">{benefitItem.title}</h6>
                  <p className="mt-3">
                    {benefitItem.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Container>
    </Box>
    <Box className="w-full py-20 bg-[#021744] text-white">
      <Container maxWidth="lg">
        <Box className="w-full">
          <ImgLeftContent 
            preTitle={''}
            title={'Workflow Summary with AI Insights'}
            detail={'The Charlee® Insurance Insights Engine (patent pending) utilizes Artificial Intelligence and Machine Learning with Natural Language Processing (NLP) to help monitor the Claim Examiner’s performance, including the progress towards resolving a claim. In addition, the increased severity of claims with specific Topics and Entities can be closely measured and evaluated. The Claims Manager can quickly identify and take appropriate action to improve the job performance of the claims team.'}
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
            btnBg={'#021744'}
            imgCols={6}
            contentCols={6}
            isDark={true}
            isVideoButton={true}
            videolink={'/medias/Charlee_ai_User_Roles.mp4'}
          />  
        </Box>
      </Container>
    </Box>
    </>
    
  )   
}