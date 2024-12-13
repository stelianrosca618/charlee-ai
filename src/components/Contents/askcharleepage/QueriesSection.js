import { Box, Container, Grid2 } from "@mui/material"
import queryAvata from "../../../assets/imgs/avatars/6.png"
import headingSvg from "../../../assets/imgs/icons/Heading.svg"
import symbolIco from "../../../assets/imgs/icons/charlee-symbol.png"
export const QueriesSection = () => {
  return (
    <Box className="w-full py-24">
      <Container maxWidth="lg">
        <Grid2 container spacing={1}>
          <Grid2  data-aos="fade-right" size={{xs: 12, sm:12, md: 6, lg: 6, xl: 6}}>
            <Box className="w-full text-left py-14">
              <h3 className="text-[32px] md:text-[56px] leading-[41px] md:leading-[65px] font-medium">Natural Language Queries</h3>
              <p className="py-8">
                With seamless, natural language interaction, users can ask insurance-related questions as effortlessly as chatting with a search engine. It intelligently interprets complex queries, retrieving precise, contextually relevant information from claims notes, documents, reports, and historical data.
              </p>
            </Box>
          </Grid2>
          <Grid2 data-aos="zoom-in-up" size={{xs: 12, sm:12, md: 6, lg: 6, xl: 6}} className="relative min-h-72">
            <div className="p-3 absolute top-0 left-0 z-20 bg-white rounded-full w-fit h-fit shadow-lg ">
              <img src={queryAvata} alt="query-avata" className="w-20 md:w-44 h-20 md:h-44 rounded-full"/>
            </div>
            <div className="py-8 pl-10 md:pl-24 absolute right-0 top-8 md:top-20 z-10 shadow-2xl bg-white rounded-xl w-4/5">
              <div className="w-full pr-2 flex justify-between items-start">
                <img src={headingSvg} alt="heading-svg" className="w-[33px] md:w-[66px] h-[26px] md:h-[54px]" />
                <img src={symbolIco} alt="charlee-symbol" className="h-[28px] md:h-[54px]" />
              </div>
              <p className="text-start mt-7 text-[12px] md:text-[20px] leading-[21px] md:leading-[31px]">
                What is the total payout for claims involving rear-end collisions in 2023?
              </p>
            </div>
            <div className="p-8 absolute bottom-0 left-0 shadow-xl bg-white rounded-xl w-3/4">
              <img src={headingSvg} alt="heading-svg" className="w-[33px] md:w-[66px] h-[26px] md:h-[54px]" />
              <p className="text-start mt-7 text-[12px] md:text-[20px] leading-[21px] md:leading-[31px]">
                Hey Charlee! Show me claims with attorney involvement.
              </p>
            </div>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}