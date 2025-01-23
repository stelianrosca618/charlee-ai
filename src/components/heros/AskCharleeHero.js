import { Box, Container } from "@mui/material"
import askCharleehand from "../../assets/imgs/banners/askCharleehand.png"
import searchCover from "../../assets/imgs/icons/search-cover.png"
import patterns from "../../assets/imgs/pattens/Path.png"
import rechardAvata from "../../assets/imgs/avatars/rechard.png"
import { useState } from "react"
import { BookPopup } from "../modals/BookPopup"

export const AskCharleeHero = () => {
  const [isOpenBook, setIsOpenBook] = useState(false);

  const handleCloseBook = () => {
    setIsOpenBook(false)
  }

  const handleOpenBook = () => {
    setIsOpenBook(true)
  }

  return (
    <>
      <Box className="w-full  pt-36" >
        <Container maxWidth="lg">
          <Box className="w-full pt-16 pb-8">
            <Box className="w-full" display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <img src={searchCover} alt="askcharlee-logo" className="askcharlee-logo"/>
              <h6 className="askcharlee-logoText text-[29px] leading-[40px] mx-4">AskCharlee</h6>
            </Box>
            <h2 className="askCharlee-head overflow-y-hidden mt-10 text-[36px] md:text-[65px] leading-[39.6px] md:leading-[71.5px] font-medium">Gather Instant Insights</h2>
            <p className="askCharlee-text hidden md:block mt-5 text-[16px] leading-[30px]">
              Introducing the AI-powered AskCharlee, designed to instantly deliver answers and insights from <br />
              complex insurance documents, data and claim notes. This conversational assistant helps insurance professionals <br />
              access key information, streamline decisions, and enhance the efficiency of claims management.
            </p>
            <p className="block md:hidden mt-5 text-[16px] leading-[30px]">
              Introducing the AI-powered AskCharlee, designed to instantly deliver answers and insights from complex insurance data and claim notes. This conversational assistant helps insurance professionals access key information, streamline decisions, and enhance the efficiency of claims management.
            </p>
            <button onClick={() => {handleOpenBook()}} className="askCharleeBook-btn mt-10 rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
              Book a demo
            </button>
            <div className="w-full text-start mt-8">
              <p className="askCharlee-reviewer text-center py-6">
                “With the addition of AskCharlee our claim staff are able to look back into large numbers of claims for fast insights on value and strategy. Combined with Charlee.ai’s predictive analytics, we can now do extensive exploratory data analysis both forward and backward, gaining valuable insights into potential exposure, value, and strategy supporting settlement, defense, and cost containment.”
              </p>
              <div className="askCharlee-avata flex justify-center items-center">
                <img src={rechardAvata} alt="avata" className="h-6 w-6 rounded-full"/>
                <span className="mx-2 ">Richard M. Lord, VP & Head of Claims, NLC Insurance Companies </span>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
      <Box className="w-full relative pt-3 md:pt-24">
        <Container maxWidth="lg">
          <Box className="askCharlee-features w-full" padding={{xs: 3, sm: 3, md: 0, lg: 0, xl: 0}} display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"space-between"} alignItems={"flex-end"}>
            <Box className="w-full text-left pb-0 md:pb-28" flex={1} order={{xs: 2, sm: 2, md: 1, lg:1, xl:1}}>
              <ul className="list-image-[url(./assets/imgs/icons/Check_symbol.svg)] list-outside ">
                <li className="py-4">
                  <h6 className="text-[20px] leading-[31px]">Natural Language Queries</h6>
                  <p className="text-[16px] leading-[31px] mt-3">AskCharlee understands industry language and context.</p>
                </li>
                <li className="py-4">
                  <h6 className="text-[20px] leading-[31px]">Instant Answers</h6>
                  <p className="text-[16px] leading-[31px] mt-3">Get fast, accurate responses to complex insurance questions, right when you need them.</p>
                </li>
                <li className="py-4">
                  <h6 className="text-[20px] leading-[31px]">Smart Summarization</h6>
                  <p className="text-[16px] leading-[31px] mt-3">Skip the long reads—AskCharlee condenses lengthy documents and claim histories into key points.</p>
                </li>
              </ul>
            </Box>
            <Box className="w-full h-full relative" flex={2} order={{xs: 1, sm: 1, md: 2, lg: 2, xl: 2}}>
              <img 
                src={askCharleehand}
                className="relative md:absolute right-0 bottom-0 z-10"
                alt="hand-phone"
                style={{width: '100%'}}
              />
            </Box>
            <Box className="w-full text-start pb-0 md:pb-28" flex={1} order={3}>
              <ul className="list-image-[url(./assets/imgs/icons/Check_symbol.svg)] list-outside ">
                <li className="py-4">
                  <h6 className="text-[20px] leading-[31px]">Contextual Understanding</h6>
                  <p className="text-[16px] leading-[31px] mt-3">Advanced NLP recognizes specific terms to provide relevant answers.</p>
                </li>
                <li className="py-4">
                  <h6 className="text-[20px] leading-[31px]">Enhanced Decision-Making</h6>
                  <p className="text-[16px] leading-[31px] mt-3">Access actionable insights that empower you to make well-informed, faster decisions.</p>
                </li>
                <li className="py-4">
                  <h6 className="text-[20px] leading-[31px]">Boosted Efficiency</h6>
                  <p className="text-[16px] leading-[31px] mt-3">Streamline claims management and improve customer service with AskCharlee’s AI-driven insights.</p>
                </li>
              </ul>
            </Box>
          </Box>
        </Container>
        <div className="hidden md:block w-full absolute bottom-0 h-[400px]"
          style={{background: `url(${patterns})`, backgroundRepeat: "repeat no-repeat"}}
        ></div>
        <div className="block md:hidden w-full absolute top-0 h-[400px]"
          style={{background: `url(${patterns})`, backgroundRepeat: "repeat no-repeat"}}
        ></div>
      </Box>
      <BookPopup open={isOpenBook} handleClose={handleCloseBook} />
    </>
    
  )
}