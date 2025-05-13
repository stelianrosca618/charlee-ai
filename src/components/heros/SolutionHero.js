import { Box, Container, Grid2 } from "@mui/material"
import { IoHeartSharp } from "react-icons/io5";
import patternSvg from "../../assets/imgs/pattens/patterns.svg"
import { Link } from "react-router-dom";
export const SolutionHero = () => {
  return (
    <Box className="w-full py-40 relative">
      <Container maxWidth="lg" className="relative z-10">
        <Box className="w-full text-center">
          <h6 className="solution-subTitle uppercase text-[14px] leading-[15.96px] font-bold">Solutions</h6>
          <h2 className="solution-title text-[36px] md:text-[65px] leading-[39.6px] md:leading-[71.5px] font-medium my-6">
            Charlee® – Your Intelligent<br /> Insurance Partner
          </h2>
        </Box>
        <Box paddingY={4} width={'100%'} display={"flex"} flexDirection={{xs: "column",  md: "row", lg: "row", xl: "row"}} justifyContent={"center"} alignItems={{xs: "center", md:"flex-start"}} paddingBottom={{md: '117px', lg: '117px', xl: '117px'}}>
          <Box maxWidth={'250px'} marginX={3} marginY={3}>
            <h1 className="font-bold text-[#0099B0] text-[84px] leading-[95.76px]">
              <span className="numbCount">55</span>
              M
            </h1>
            <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
            <Box className="countDetail text-[16px] leading-[31px]" width={'100%'} padding={'19px'}>
              Total claims analyzed <br /> by Charlee.ai
            </Box>
          </Box>
          <Box maxWidth={'250px'} marginX={3} marginY={3}>
            <h1 className="font-bold text-[#0099B0] text-[84px] leading-[95.76px]">
              <span className="numbCount">50</span>
              K
            </h1>
            <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
            <Box className="countDetail text-[16px] leading-[31px]" width={'100%'}  padding={'19px'}>
              Pre-built and pre-trained insights in a predictive analytics solution
            </Box>
          </Box>
          <Box maxWidth={'250px'} marginX={3} marginY={3}>
            <h1 className="font-bold text-[#0099B0] text-[84px] leading-[95.76px]">
              <span className="numbCount">24</span>
              /<span className="numbCount">7</span>
            </h1>
            <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
            <Box className="countDetail text-[16px] leading-[31px]" width={'100%'}  padding={'19px'}>
              Our virtual claims assistant is available around the clock
            </Box>
          </Box>
        </Box>
        <Box className="w-full" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"center"} alignItems={"center"} gap={6}>
          <Grid2 container spacing={4}>
            <Grid2 size={{xs: 12, md: 6, lg: 6, xl: 6}} className="solution-cards rounded-xl shadow-xl bg-white p-9"
              display={"flex"} flexDirection={"column"} justifyContent={"space-between"}
            >
              <Box className="w-full mb-7">
                <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                  <div className="p-1 w-fit h-fit rounded-full bg-[#4CFFE9]">
                    <IoHeartSharp size={'13px'}/>
                  </div>
                  <h6 className="px-2 uppercase text-[13px] leading-[16.96px] font-medium">Department</h6>
                </Box>
                <h5 className="my-6 text-start text-[29px] leading-[40px] font-medium">
                  Insights for Every Role
                </h5>
                <p className="text-start">
                  Charlee® equips Claims, Underwriting, and IT teams with data-driven insights tailored to their specific needs. From accelerating claims resolutions to refining underwriting accuracy, each department can harness Charlee’s advanced analytics to drive smarter, more efficient operations.
                </p>
              </Box>
              <Box className="w-full text-start">
                <Link to={'/product/askcharlee'}>
                <button className="rounded-full text-[14px] leading-[24px] bg-transparent border py-3 px-10 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                  Learn more
                </button>
                </Link>
              </Box>
            </Grid2>
            <Grid2 size={{xs: 12, md: 6, lg: 6, xl: 6}} className="solution-cards rounded-xl shadow-xl bg-white p-9"
              display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
              <Box className="w-full mb-7">
                <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                  <div className="p-1 w-fit h-fit rounded-full bg-[#4CFFE9]">
                    <IoHeartSharp size={'13px'}/>
                  </div>
                  <h6 className="px-2 uppercase text-[13px] leading-[16.96px] font-medium">line of business</h6>
                </Box>
                <h5 className="my-6 text-start text-[29px] leading-[40px] font-medium">
                  Tailored for Insurance
                </h5>
                <p className="text-start">
                Charlee® seamlessly supports a wide range of insurance lines, including Personal, Commercial, Workers’ Compensation, and Specialty/Excess. With insights customized to each line of business, Charlee® enables you to address unique challenges, reduce risk, and enhance decision-making across your portfolio.
                </p>
              </Box>
              <Box className="w-full text-start">
                <Link to={'/product/findcharlee'}>
                <button className="rounded-full text-[14px] leading-[24px] bg-transparent border py-3 px-10 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                  Learn more
                </button>
                </Link>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
      <Box className="w-full absolute bottom-0 h-[300px]"
        sx={{backgroundImage: `url(${patternSvg})`, zIndex: 0}}
      ></Box>
    </Box>
  )
}