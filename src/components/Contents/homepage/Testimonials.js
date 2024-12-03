import { Box, Container } from "@mui/material"
import avataOne from "../../../assets/imgs/avatars/avata1.jpg"
import { RxSlash } from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation  } from 'swiper/modules';
import patterns from "../../../assets/imgs/pattens/pattens.png"
export const Testimonials = () => {
  
  return (
    <Box className="w-full bg-[#EDF3F8] relative">
      <Container maxWidth="lg">
        <Box data-aos-duration="1000" data-aos="fade" className="w-full py-28">
          <Box className="w-full text-center">
            <h5 className="uppercase font-semibold tracking-wide text-[#0099B0] text-[14px] leading-[15.96px]">Testimonials</h5>
          </Box>
          <Box className="w-full">
            <Swiper  navigation={false} loop={true} modules={[Navigation]}>
              <SwiperSlide>
                <Box className="w-2/3 mx-auto pb-14">
                  <h4 className="text-[24px] leading-[36px] md:text-[42px] md:leading-[54.6px] font-medium py-10">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </h4>
                  <Box display={"flex"} flexDirection={{xs: "column", md: "row"}} justifyContent={"center"} alignItems={"center"} paddingBottom={2}>
                    <img src={avataOne} className="w-10 h-10 mr:0 md:mr-6 rounded-full" alt="avata" />
                    <h5 className="text-[16px] leading-[24px] font-medium flex flex-col md:flex-row justify-center items-center">
                      <span>Judith Black</span>
                      <RxSlash size={'20px'} color="#0099B0" className="mx-3 hidden md:block"/>
                      <span className="text-[#6B7280]">CEO, Workcation</span>
                    </h5>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="w-2/3 mx-auto pb-14">
                  <h4 className="text-[24px] leading-[36px] md:text-[42px] md:leading-[54.6px] font-medium py-10">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </h4>
                  <Box display={"flex"} flexDirection={{xs: "column", md: "row"}} justifyContent={"center"} alignItems={"center"} paddingBottom={2}>
                    <img src={avataOne} className="w-10 h-10 mr:0 md:mr-6 rounded-full" alt="avata" />
                    <h5 className="text-[16px] leading-[24px] font-medium flex flex-col md:flex-row justify-center items-center">
                      <span>Judith Black</span>
                      <RxSlash size={'20px'} color="#0099B0" className="mx-3 hidden md:block"/>
                      <span className="text-[#6B7280]">CEO, Workcation</span>
                    </h5>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="w-2/3 mx-auto pb-14">
                  <h4 className="text-[24px] leading-[36px] md:text-[42px] md:leading-[54.6px] font-medium py-10">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </h4>
                  <Box display={"flex"} flexDirection={{xs: "column", md: "row"}} justifyContent={"center"} alignItems={"center"} paddingBottom={2}>
                    <img src={avataOne} className="w-10 h-10 mr:0 md:mr-6 rounded-full" alt="avata" />
                    <h5 className="text-[16px] leading-[24px] font-medium flex flex-col md:flex-row justify-center items-center">
                      <span>Judith Black</span>
                      <RxSlash size={'20px'} color="#0099B0" className="mx-3 hidden md:block"/>
                      <span className="text-[#6B7280]">CEO, Workcation</span>
                    </h5>
                  </Box>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Container>
      <img src={patterns} alt="patterns" className="absolute top-[130px] left-[-300px] z-30 h-[350px]" />
    </Box>
  )
}