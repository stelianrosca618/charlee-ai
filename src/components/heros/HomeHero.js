import { Box, Button, Container, Divider, Grid, Grid2, Typography } from "@mui/material"
import banerImg from "../../assets/imgs/banners/home-banner.png"
import heroLogo from "../../assets/imgs/banners/hero-logo.png"
import securityIco from "../../assets/imgs/icons/security-time.svg"
import folderIco from "../../assets/imgs/icons/folder-2.svg"
import searchIco from "../../assets/imgs/icons/search-status.svg"
import unionIco from "../../assets/imgs/icons/Union.svg"
import { Link } from "react-router-dom"
import { CharleeBot } from "../../Icons/CharleeBot"

export const HomeHero = () => {
  return (
    <>
    <Box className="w-full overflow-y-auto">
      <Box className="w-full" sx={{backgroundImage: `url(${banerImg})`, backgroundSize: 'cover'}} >
        <Container className="pt-20 pb-40 text-white flex justify-center items-center" maxWidth="lg">
          <Grid2  className="w-full" alignItems={"center"} container spacing={1}>
            <Grid2 size={{ xs: 12, md: 8}}>
              <Box className="w-full text-left hidden md:block">
                <h2 className="text-start text-[75px] leading-[82.5px] font-Inter font-medium">
                  Meet the AI <br />Intelligence platform <br />for claims
                </h2>
                <Typography marginBottom={6} sx={{fontSize: '20px !important', lineHeight: '31px !important'}} variant="body1" fontWeight={400} textAlign={'left'}>
                  Our platform knows your exposures, reduces severity, litigation and fraud, optimizes reserves, while simplifying claims—effortlessly.
                </Typography>
                
                {/* <button className="bg-transparent rounded-full text-white border border-white py-5 px-9 text-[18px] leading-4 font-medium transition-all hover:bg-[#091d48] hover:text-white hover:border-white ">
                  See Our Products
                </button> */}
              </Box>
              <Box className="w-full text-center block md:hidden">
                <Typography sx={{fontSize: '48px !important', lineHeight: '52.8px'}} marginBottom={2} variant="h2" fontWeight={500} fontSize={'75px'} textAlign={"center"}>
                  AI for claims, severity, and litigation
                </Typography>
                <Typography marginBottom={6} sx={{fontSize: '20px !important', lineHeight: '30px !important'}} variant="body1" fontWeight={400} textAlign={'center'}>
                  Our platform knows your exposures, reduces severity, litigation and fraud, optimizes reserves, while simplifying claims—effortlessly.
                </Typography>
                {/* <button className="bg-transparent rounded-full text-white border border-white py-5 px-9 text-[18px] leading-4 font-medium transition-all hover:bg-[#091d48] hover:text-white hover:border-white ">
                  See Our Products
                </button> */}
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4}}>
              <Box display={"flex"} justifyContent={"center"} alignItems={"flex-start"}>
                {/* <img src={heroLogo} alt="hero-icon"/> */}
                <CharleeBot />
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box className="w-full bg-[#EDF3F8]">
        <Container maxWidth="lg" sx={{transform: {xs:'translateY(-150px)', md:'translateY(-210px)'}}}>
          <Box paddingBottom={'35px'}>
            <h3 className="text-white text-[29px] leading-[40px] md:text-[42px] md:leading-[54.6px] font-medium text-center md:text-left">
              Our AI Platform Products
            </h3>
          </Box>
          <Box className="w-full px-2 md:px-0 ">
            <Grid2 className="w-full" alignItems={"flex-start"} container spacing={2}>
              <Grid2 size={{xs:12, md:3}}>
                <Box className="rounded-lg h-full">
                  <Box className="px-5 py-8 rounded-t-lg bg-[#021744]" display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                    <Box className="p-3 rounded-lg bg-[#ffffff3b]">
                      <img src={securityIco} alt="sec-icon" className="w-8 h-8"/>
                    </Box>
                    <h4 className="text-white ml-2 font-medium text-[29px] leading-10">
                      4SeeCharlee
                    </h4>
                  </Box>
                  <Box className="bg-white rounded-b-lg min-h-[400px] w-full drop-shadow-2xl" display={"flex"} justifyContent={"space-between"} flexDirection={"column"} paddingX={'25px'} paddingY={'28px'}>
                    <Box className="w-full text-left">
                      <h5 className="font-normal text-[20px] leading-[30px] mb-2">
                        Predict & Prevent
                      </h5>
                      <p className="text-[14px] leading-7">
                        Forecast attorney involvement, litigation, severity, and reserves with precision. Access real-time insights through sleek dashboards and reports, streamlining workflows and reducing costs.
                      </p>
                    </Box>
                    <Box className="w-full" marginTop={6}>
                      <Link to={'/product/seecharlee'}>
                      <button className="w-full rounded-full text-[18px] leading-[24px] bg-transparent border py-4 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                        Dive deeper
                      </button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{xs:12, md:3}}>
                <Box className="rounded-lg h-full">
                  <Box className="px-5 py-8 rounded-t-lg bg-[#004E77]" display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                    <Box className="p-3 rounded-lg bg-[#ffffff3b]">
                      <img src={folderIco} alt="folder-icon" className="w-8 h-8"/>
                    </Box>
                    <h4 className="text-white ml-2 font-medium text-[29px] leading-10">
                      DocuCharlee
                    </h4>
                  </Box>
                  <Box className="bg-white rounded-b-lg min-h-[400px] w-full drop-shadow-2xl" display={"flex"} justifyContent={"space-between"} flexDirection={"column"} padding={'28px'}>
                    <Box className="w-full text-left">
                      <h5 className="font-normal text-[20px] leading-[30px] mb-2">
                        Document Intelligence
                      </h5>
                      <p className="text-[14px] leading-7">
                        Effortlessly extract, summarize, and analyze risk from documents, emails, and unstructured data. Get instant results with smart alerts, detailed summaries, and contextual insights.
                      </p>
                    </Box>
                    <Box className="w-full" marginTop={6}>
                      <Link to={'/product/docucharlee'}>
                      <button className="w-full rounded-full text-[18px] leading-[24px] bg-transparent border py-4 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                        Dive deeper
                      </button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{xs:12, md:3}}>
                <Box className="rounded-lg h-full">
                  <Box className="px-5 py-8 rounded-t-lg bg-[#0099B0]" display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                    <Box className="p-3 rounded-lg bg-[#ffffff3b]">
                      <img src={searchIco} alt="folder-icon" className="w-8 h-8"/>
                    </Box>
                    <h4 className="text-white ml-2 font-medium text-[29px] leading-10">
                      Ask Charlee
                    </h4>
                  </Box>
                  <Box className="bg-white rounded-b-lg min-h-[400px] w-full drop-shadow-2xl" display={"flex"} justifyContent={"space-between"} flexDirection={"column"} padding={'28px'}>
                    <Box className="w-full text-left">
                      <h5 className="font-normal text-[20px] leading-[30px] mb-2">
                        Search & Discover
                      </h5>
                      <p className="text-[14px] leading-7">
                        Seamlessly search claims data, documents, predictions, and exposure insights. Instantly access claim lists, KPIs, graphs, and reports—delivering the information you need, when you need it.
                      </p>
                    </Box>
                    <Box className="w-full" marginTop={6}>
                      <Link to={'/product/askcharlee'}>
                      <button className="w-full rounded-full text-[18px] leading-[24px] bg-transparent border py-4 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                        Dive deeper
                      </button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{xs:12, md:3}}>
                <Box className="rounded-lg h-full">
                  <Box className="px-5 py-8 rounded-t-lg bg-[#42DDD1]" display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                    <Box className="p-3 rounded-lg bg-[#ffffff3b]">
                      <img src={unionIco} alt="folder-icon" className="w-8 h-8"/>
                    </Box>
                    <h4 className="text-white ml-2 font-medium text-[29px] leading-10">
                      FindCharlee
                    </h4>
                  </Box>
                  <Box className="bg-white rounded-b-lg min-h-[400px] w-full drop-shadow-2xl"  display={"flex"} justifyContent={"space-between"} flexDirection={"column"} padding={'28px'}>
                    <Box className="w-full text-left">
                      <h5 className="font-normal text-[20px] leading-[30px] mb-2">
                        Identify & Flag
                      </h5>
                      <p className="text-[14px] leading-7">
                        Meet our Suspicious Claims solution: Detect potential fraud with precision. Claims are scored, flagged, and delivered via dashboards, reports, and alerts—helping reduce fraud and enhance efficiency.
                      </p>
                    </Box>
                    <Box className="w-full" marginTop={6}>
                      <Link to={'/product/findcharlee'}>
                      <button className="w-full rounded-full text-[18px] leading-[24px] bg-transparent border py-4 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                        Dive deeper
                      </button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
        <Container maxWidth="lg" className="mt-[-140px]">
          <Box width={'100%'} display={"flex"} flexDirection={{xs: "column", md: "row"}} justifyContent={"center"} alignItems={{xs: "center", md:"flex-start"}}>
            <Box maxWidth={'250px'} marginX={3} marginY={2}>
              <h1 className="font-bold text-[#42DDD1] text-[84px] leading-[95.76px]">55M+</h1>
              <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
              <Box width={'100%'} padding={'19px'}>
              Total claims analyzed <br /> by Charlee.ai
              </Box>
            </Box>
            <Box maxWidth={'250px'} marginX={3} marginY={2}>
              <h1 className="font-bold text-[#42DDD1] text-[84px] leading-[95.76px]">50K+</h1>
              <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
              <Box width={'100%'}  padding={'19px'}>
                Pre-built and pre-trained insights in a predictive analytics solution
              </Box>
            </Box>
            <Box maxWidth={'250px'} marginX={3} marginY={2}>
              <h1 className="font-bold text-[#42DDD1] text-[84px] leading-[95.76px]">24/7</h1>
              <div className="w-[196px] h-[1px] mx-auto bg-[#021744]"></div>
              <Box width={'100%'}  padding={'19px'}>
              Our virtual claims assistant is available around the clock
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
    </>
    
  )
}