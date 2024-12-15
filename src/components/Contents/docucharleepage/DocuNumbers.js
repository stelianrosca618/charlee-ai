import { Box, Container } from "@mui/material"
import docuCharleeLogo from "../../../assets/imgs/Dashboards/docuCharlee-logo.png"
export const DocuNumbers = () => {
  return (
    <Box className="docuNumbers w-full py-40">
      <Container maxWidth="lg">
        <Box className="w-full" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"space-between"} alignItems={"center"}>
          <img src={docuCharleeLogo} alt="logo" className="docuNumber-item mr-0 md:mr-10"/>
          <Box className="pl-0 md:pl-10 border-none md:border-l border-l-black" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"center"} 
          alignItems={{xs:"center", sm: "center", md: "flex-start", lg: "flex-start", xl: "flex-start"}}>
            <Box className="docuNumber-item" maxWidth={'250px'} marginX={3} marginY={3}>
              <h1 className="font-bold text-[#0099B0] text-[84px] leading-[95.76px]">
                <span className="docuNum-counter">55</span>
                M
              </h1>
              <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
              <Box className="text-[16px] leading-[31px]" width={'100%'} padding={'19px'}>
                Total claims analyzed <br /> by Charlee.ai
              </Box>
            </Box>
            <Box className="docuNumber-item" maxWidth={'250px'} marginX={3} marginY={3}>
              <h1 className="font-bold text-[#0099B0] text-[84px] leading-[95.76px]">
                <span className="docuNum-counter">50</span>K
              </h1>
              <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
              <Box className="text-[16px] leading-[31px]" width={'100%'}  padding={'19px'}>
                Pre-built and pre-trained insights in a predictive analytics solution
              </Box>
            </Box>
            <Box className="docuNumber-item" maxWidth={'250px'} marginX={3} marginY={3}>
              <h1 className="font-bold text-[#0099B0] text-[84px] leading-[95.76px]">
                <span className="docuNum-counter">24</span>
                /<span className="docuNum-counter">7</span>
              </h1>
              <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
              <Box className="text-[16px] leading-[31px]" width={'100%'}  padding={'19px'}>
                Our virtual claims assistant is available around the clock
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}