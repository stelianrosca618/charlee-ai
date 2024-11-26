import { Box, Container } from "@mui/material"
import useCaseOne from "../../../assets/imgs/banners/useCase1.png"
import blog6 from "../../../assets/imgs/news/blog6.png"
import { ImgLeftContent } from "../solutionpage/ImgLeftContent"

const platformList = [
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
 
]

export const DocuAllPlatforms = () => {
  return (
		<>
		<Box className="w-full bg-white">
      <Container maxWidth="lg">
        <Box className="w-full py-24" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"start"} alignItems={"flex-start"} >
          <Box className="w-full text-start" flex={1}>
            <h6 className="uppercase text-[#4CFFE9] text-[14px] leading-[15.96px] font-bold">Everything you need</h6>
            <h4 className="mt-4 text-[42px] leading-[54.6px] font-medium">All-in-one-platform</h4>
            <p className="my-6 text-[24px] leading-[32px] font-normal">
						Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
            </p>
          </Box>
          <Box className="w-full text-start px-5 md:px-0" flex={2} >
            <ul className="list-image-[url(./assets/imgs/icons/Check_symbol.svg)] list-outside grid  grid-cols-1 md:grid-cols-2 gap-7">
              {platformList.map((itemData, key) => (
                <li key={key} >
                  <h6 className="text-[20px] leading-[31px] font-normal">{itemData.subject}</h6>
                  <p className="mt-3">
                    {itemData.detail}
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
            title={'Claims Severity Management '}
            detail={`Low-impact collisions with soft tissue injuries are a top driver of claim severity in auto insurance. Properly identifying and classifying these injuries is essential for tracking severity and potential litigation risks. The Charlee® Insurance Insights Engine enables Claim Examiners to accurately identify and monitor injuries, guiding effective resolutions. Powered by AI, Charlee® uncovers hidden patterns tied to high severity, allowing your claims team to quickly spot these trends, learn from them, and take prompt, informed actions for a swift and fair settlement.`}
            cases={['Case Study 1', 'Case Study 2', 'Case Study 3', 'Case Study 4']}
            bgImg={useCaseOne}
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