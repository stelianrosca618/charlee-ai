import { Box, Container, Grid2 } from "@mui/material"
import { FaArrowRightLong } from "react-icons/fa6";
import guidewire from "../../../assets/imgs/brands/guidewire.png";
import majesco from "../../../assets/imgs/brands/majesco.png";
import sapiens from "../../../assets/imgs/brands/sapiens.png";
import awsmarket from "../../../assets/imgs/brands/awsmarketplace.png";
import oneshield from "../../../assets/imgs/brands/oneshield.png";
import snapSheet from "../../../assets/imgs/brands/snapsheet.png";
import quicksilver from "../../../assets/imgs/brands/quicksilver.png";
import duckgreeck from "../../../assets/imgs/brands/duckcreek.png";
import inspire from "../../../assets/imgs/brands/Inspire.png";
import eclaro from "../../../assets/imgs/brands/eclaro.png";
import neosoft from "../../../assets/imgs/brands/neosoft.png";
import kmg from "../../../assets/imgs/brands/kmg.png";
import nlbservice from "../../../assets/imgs/brands/nlbservices.png";
import scripts from "../../../assets/imgs/brands/scriptis.png";
import rcglobal from "../../../assets/imgs/brands/rcgglobal.png"
import odgmcg from "../../../assets/imgs/brands/odgmgc.png";
import trellis from "../../../assets/imgs/brands/trellis-partner-logo.png"

const coreItems = [
  {
    logoImg: guidewire,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: majesco,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: oneshield,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: sapiens,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: snapSheet,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: quicksilver,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: duckgreeck,
    detail: "Perform complex SEO audits and optimizations with a single click."
  }
  
]

const marketItems = [
  {
    logoImg: awsmarket,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: majesco,
    detail: "Perform complex SEO audits and optimizations with a single click."
  }
]
const systemItems = [
  {
    logoImg: guidewire,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: inspire,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: neosoft,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: kmg,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: nlbservice,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: scripts,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: rcglobal,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: odgmcg,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
  {
    logoImg: trellis,
    detail: "Perform complex SEO audits and optimizations with a single click."
  },
]

export const PartenerList = () => {
  return (
    <Box className="w-full py-28">
      <Container maxWidth="lg">
        <Box className="w-full">
          <h5 className="text-[29px] leading-[40px] font-medium">Trusted by 18 partners and counting</h5>
          <h4 className="text-[32px] md:text-[42px] leading-[41px] md:leading-[54.6px] font-medium py-5">You may contact us directly or visit our partners<br /> for purchasing the API</h4>
        </Box>
       
        <Box className="w-full gradient-border rounded-xl mt-14">
          <Box className="w-full rounded-xl p-5 md:p-12 bg-white">
            <Box className="w-full" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl:"row"}} justifyContent={"space-between"} 
              alignItems={{xs: "flex-start", sm: "flex-start", md: "center", lg:"center", xl:"center"}} >
              <h3 className="text-[36px] md:text-[56px] leading-[39px] md:leading-[65px] font-medium my-2">Core System</h3>
              <button className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">Contact Us</button>
            </Box>
            <Box className="w-full mt-14">
              <Grid2 container spacing={6}>
                {coreItems.map((coreItem, key) => (
                  <Grid2 key={key} size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}>
                    <Box className="w-full h-full">
                      <img src={coreItem.logoImg} alt="core-logo" className="h-10"/>
                      <p className="text-start text-[16px] leading-[31px] font-normal py-7">
                        {coreItem.detail}
                      </p>
                      <button className="font-semibold flex justify-start items-center group relative">
                        Learn more
                        <FaArrowRightLong className="mx-3"/>
                        <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#1f1f20] group-hover:w-full"></span>
                      </button>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Box>

        </Box>
        <Box className="w-full gradient-border rounded-xl mt-14">
          <Box className="w-full rounded-xl p-5 md:p-12 bg-white">
            <Box className="w-full" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl:"row"}} justifyContent={"space-between"} 
              alignItems={{xs: "flex-start", sm: "flex-start", md: "center", lg:"center", xl:"center"}} >
              <h3 className="text-[36px] md:text-[56px] leading-[39px] md:leading-[65px] font-medium my-2">MarketPlace</h3>
              <button className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">Contact Us</button>
            </Box>
            <Box className="w-full mt-14">
              <Grid2 container spacing={6}>
                {marketItems.map((coreItem, key) => (
                  <Grid2 key={key} size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}>
                    <Box className="w-full h-full">
                      <img src={coreItem.logoImg} alt="core-logo" className="h-10"/>
                      <p className="text-start text-[16px] leading-[31px] font-normal py-7">
                        {coreItem.detail}
                      </p>
                      <button className="font-semibold flex justify-start items-center group relative">
                        Learn more
                        <FaArrowRightLong className="mx-3"/>
                        <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#1f1f20] group-hover:w-full"></span>
                      </button>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Box>
        </Box>
        <Box className="w-full gradient-border rounded-xl mt-14">
          <Box className="w-full rounded-xl p-5 md:p-12 bg-white">
            <Box className="w-full" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl:"row"}} justifyContent={"space-between"} 
              alignItems={{xs: "flex-start", sm: "flex-start", md: "center", lg:"center", xl:"center"}} >
              <h3 className="text-[36px] md:text-[56px] leading-[39px] md:leading-[65px] font-medium my-2 text-start">System Integrator & Data</h3>
              <button className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">Contact Us</button>
            </Box>
            <Box className="w-full mt-14">
              <Grid2 container spacing={6}>
                {systemItems.map((coreItem, key) => (
                  <Grid2 key={key} size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}>
                    <Box className="w-full h-full">
                      <img src={coreItem.logoImg} alt="core-logo" className="h-10"/>
                      <p className="text-start text-[16px] leading-[31px] font-normal py-7">
                        {coreItem.detail}
                      </p>
                      <button className="font-semibold flex justify-start items-center group relative">
                        Learn more
                        <FaArrowRightLong className="mx-3"/>
                        <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#1f1f20] group-hover:w-full"></span>
                      </button>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}