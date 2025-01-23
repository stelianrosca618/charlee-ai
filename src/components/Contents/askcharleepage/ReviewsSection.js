import { Box, Container, Divider } from "@mui/material"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import "./reviewsection.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import heroLogo from "../../../assets/imgs/banners/hero-logo.png"
import queryAvata from "../../../assets/imgs/avatars/6.png"
import headingSvg from "../../../assets/imgs/icons/Heading.svg"
import GradientHeadingSvg from "../../../assets/imgs/icons/GradientHeading.svg";
import symbolIco from "../../../assets/imgs/icons/charlee-symbol.png"

const reviewContexts = [
  {
    avata: queryAvata,
    head: 'Contextual Understanding',
    text: `Powered by advanced Natural Language Processing, it understands the context of your questions, interpreting nuances, synonyms, and industry-specific terms to deliver precise, accurate answers—even for the most complex queries.`,
    question: `What’s the status of Susan Johnson’s claim?`,
    detail: `I can retrieve and summarize relevant updates, adjuster notes, and ongoing actions related to that specific claim!`
  },
  {
    avata: queryAvata,
    head: 'Data Summarization and Insights',
    text: `More than just retrieving information, AskCharlee effortlessly summarizes lengthy documents and claim histories into concise, actionable insights. Perfect for adjusters and managers, it highlights key points instantly, eliminating the need to sift through extensive materials.`,
    question: `Give me a summary of this medical report, please!`,
    detail: `Quickly generate a summary of a medical report or litigation history, highlighting key details like injury severity, recovery expectations, and legal risks.`
  },
  {
    avata: queryAvata,
    head: 'Contextual Understanding',
    text: `Powered by advanced Natural Language Processing, it understands the context of your questions, interpreting nuances, synonyms, and industry-specific terms to deliver precise, accurate answers—even for the most complex queries.`,
    question: `What’s the status of Susan Johnson’s claim?`,
    detail: `I can retrieve and summarize relevant updates, adjuster notes, and ongoing actions related to that specific claim!`
  },
  {
    avata: queryAvata,
    head: 'Data Summarization and Insights',
    text: `More than just retrieving information, AskCharlee effortlessly summarizes lengthy documents and claim histories into concise, actionable insights. Perfect for adjusters and managers, it highlights key points instantly, eliminating the need to sift through extensive materials.`,
    question: `Give me a summary of this medical report, please!`,
    detail: `Quickly generate a summary of a medical report or litigation history, highlighting key details like injury severity, recovery expectations, and legal risks.`
  }
]
export const ReviewsSection = () => {
  return (
    <Box className="w-full pb-10">
      <Container maxWidth="lg">
        <Box data-aos="fade-up" className="w-full" display={"flex"} flexDirection={{xs: 'column', sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"start"} alignItems={"center"}>
          <img src={heroLogo} alt="hero logo" className="h-[320px]" />
          <Box className="w-full text-start pl-9">
            <h4 className="hidden md:block text-[34p
            x] leading-[50px] font-bold my-4">AskCharlee</h4>
            <h4 className="text-[29px] md:text-[42px] leading-[40px] md:leading-[54.6px] font-medium" >Hey there! How can I help you today?</h4>
            <p className="text-[20px] leading-[31px] mt-6">Here’s everything I excel at!</p>
          </Box>
        </Box>
        <Box data-aos="fade-left" className="reviewSwiper">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 100,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
            }}
            loop={true}
            freeMode={true}
            // watchSlidesProgress={true}
            // pagination={{
            //   dynamicBullets: true,
            //   clickable: true,
            // }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            
          >
            {reviewContexts.map((reviewItem, key) => (
              <SwiperSlide  key={key}>
                <div className="w-full h-full bg-white rounded-2xl shadow-xl p-6">
                  <div className="w-full text-start">
                    <h5 className="text-[20px] md:text-[29px] leading-[30px] md:leading-[40px] font-medium">{reviewItem.head}</h5>
                    <p className="mt-6" >
                      {reviewItem.text}
                    </p>
                  </div>
                  <div className="w-full">
                    <div className="relative block md:hidden mt-8 pt-5 pl-8 pr-4">
                      <div className="absolute z-10 top-0 left-0 p-1 bg-white rounded-full">
                        <img src={reviewItem.avata} alt="review-avata" className="rounded-full w-[60px] h-[60px]" />
                      </div>
                      <div className=" py-4 pl-10 pr-5 bg-[#F3F4F4] rounded-lg">
                        <div display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                          <img src={GradientHeadingSvg} alt="heading-svg" className="h-[22px]"/>
                          <img src={symbolIco} alt="symbol-icon" className="h-[25px]" />
                        </div>
                        <h6 className="text-start text-[12px] leading-[21.5px] font-normal">
                          {reviewItem.question}
                        </h6>
                      </div>
                    </div>
                    <div className="relative hidden md:block mt-8 pt-5 pl-8 pr-4">
                      <div className="absolute z-10 top-0 left-0 p-2 bg-white w-fit h-fit rounded-full shadow-xl">
                        <img src={reviewItem.avata} alt="review-avata" className="rounded-full w-[76px] h-[76px]" />
                      </div>
                      <div className="pl-16 pr-5 py-6 bg-[#F3F4F4] rounded-lg">
                        <div className="mb-5 pr-0 flex justify-start items-center">
                          <img src={headingSvg} alt="heading-svg" className="h-[43px]"/>
                          <h6 className="text-start text-[20px] leading-[31px] font-normal pl-2">
                            {reviewItem.question}
                          </h6>
                        </div>
                        <Divider />
                        <div className="mt-5 pr-0 flex justify-start items-center" >
                          <img src={symbolIco} alt="symbol-icon" className="h-16" />
                          <p className="text-start pl-2">
                            {reviewItem.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Box className="relative w-full h-[90%] bg-white rounded-2xl shadow-xl p-8" display={'flex'} justifyContent={"space-between"} flexDirection={"column"}>
                  <Box className="w-full text-start">
                    <h5 className="text-[20px] md:text-[29px] leading-[30px] md:leading-[40px] font-medium">{reviewItem.head}</h5>
                    <p className="mt-6" >
                      {reviewItem.text}
                    </p>
                  </Box>
                  <Box className="w-full">
                    <Box className="relative block md:hidden mt-8 pt-5 pl-8 pr-4">
                      <Box className="absolute z-10 top-0 left-0 p-1 bg-white rounded-full">
                        <img src={reviewItem.avata} alt="review-avata" className="rounded-full w-[60px] h-[60px]" />
                      </Box>
                      <Box className=" py-4 pl-10 pr-5 bg-[#F3F4F4] rounded-lg">
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                          <img src={GradientHeadingSvg} alt="heading-svg" className="h-[22px]"/>
                          <img src={symbolIco} alt="symbol-icon" className="h-[25px]" />
                        </Box>
                        <h6 className="text-start text-[12px] leading-[21.5px] font-normal">
                          {reviewItem.question}
                        </h6>
                      </Box>
                    </Box>
                    <Box className="relative hidden md:block mt-8 pt-5 pl-8 pr-4">
                      <Box className="absolute z-10 top-0 left-0 p-2 bg-white w-fit h-fit rounded-full shadow-xl">
                        <img src={reviewItem.avata} alt="review-avata" className="rounded-full w-[76px] h-[76px]" />
                      </Box>
                      <Box className="pl-16 pr-5 py-6 bg-[#F3F4F4] rounded-lg">

                        <Box className="mb-5 pr-8" display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                          <img src={headingSvg} alt="heading-svg" className="h-[43px]"/>
                          <h6 className="text-start text-[20px] leading-[31px] font-normal pl-8">
                            {reviewItem.question}
                          </h6>
                        </Box>
                        <Divider />
                        <Box className="mt-5 pr-8" display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                          <img src={symbolIco} alt="symbol-icon" className="h-16" />
                          <p className="text-start pl-8">
                            {reviewItem.detail}
                          </p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box> */}
              </SwiperSlide>
            ))}
            
            
          </Swiper>
        </Box>
      </Container>  
    </Box>
  )
}