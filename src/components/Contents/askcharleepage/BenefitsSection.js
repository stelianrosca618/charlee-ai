import { Box, Container } from "@mui/material"
import blog6 from "../../../assets/imgs/news/blog6.png"
import { ImgLeftContent } from "../solutionpage/ImgLeftContent"

const benefitsList = [
  {
    subject: 'Time Savings',
    detail: 'AskCharlee dramatically reduces the time spent searching for information across multiple systems or reading through lengthy documents. It provides immediate answers, allowing users to focus on decision-making rather than manual data retrieval.'
  },
  {
    subject: 'Better Customer Service',
    detail: 'Faster access to accurate information enables claims adjusters to provide quicker responses and resolutions to policyholders, improving customer satisfaction.'
  },
  {
    subject: 'Informed Decision-Making',
    detail: 'By delivering accurate, data-driven insights, AskCharlee empowers insurance professionals to make more informed decisions regarding claim settlements, litigation strategies, and risk management.'
  },
  {
    subject: 'Improved Efficiency',
    detail: 'The ability to instantly access critical claim details and summaries enhances operational efficiency, speeding up the claims process and reducing administrative burdens.'
  },
  {
    subject: 'Enhanced Accuracy',
    detail: 'AskCharlee’s AI-driven insights help ensure no important detail is overlooked, reducing errors in claim handling and improving overall outcomes.'
  },
]

export const BenefitsSection = () => {
  return (
    <>
    <Box className="w-full bg-white">
      <Container maxWidth="lg">
        <Box className="w-full py-24" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"start"} alignItems={"flex-start"} >
          <Box className="w-full text-start" flex={1}>
            <h6 className="uppercase text-[#4CFFE9] text-[14px] leading-[15.96px] font-bold">Everything you need</h6>
            <h4 className="mt-4 text-[42px] leading-[54.6px] font-medium">AskCharlee Benefits</h4>
            <p className="my-6 text-[24px] leading-[32px] font-normal">
              Streamlines insurance workflows with instant insights, improving decision-making, efficiency, accuracy, and customer satisfaction.
            </p>
          </Box>
          <Box className="w-full text-start px-5 md:px-0" flex={2} >
            <ul className="list-image-[url(./assets/imgs/icons/Check_symbol.svg)] list-outside pl-10 grid grid-cols-1 md:grid-cols-2 gap-7">
              {benefitsList.map((benefitItem, key) => (
                <li key={key} >
                  <h6 className="text-[20px] leading-[31px] font-normal">{benefitItem.subject}</h6>
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
    <Box className="w-full">
      <Container maxWidth="lg">
      <Box className="w-full py-24">
          <ImgLeftContent 
            preTitle={''}
            title={'Claims Insights '}
            detail={'Claims Examiners are vital to customer satisfaction, yet managing high claim volumes can be challenging. The Charlee® Insurance Insights Engine empowers Examiners with valuable Quality Control (QC) Alerts and Red Flags (RF), providing confidence to make informed decisions. Its intuitive dashboard ensures Examiners stay on track with legal deadlines and reduce costs, leveraging AI-driven insights to keep claims on course and under control.'}
            cases={['Case Study 1', 'Case Study 2', 'Case Study 3', 'Case Study 4']}
            bgImg={blog6}
            btnBg={'#F9F9F9'}
            imgCols={5}
            contentCols={7}
            isDark={false}
          />
        </Box>
      </Container>
    </Box>
    </>
  )
}