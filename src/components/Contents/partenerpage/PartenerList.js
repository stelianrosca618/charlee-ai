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
import { ContactUsPopup } from "../../modals/ContactUsPopup";
import { useState } from "react";

const coreItems = [
  {
    logoImg: guidewire,
    detail: "Guidewire Provides P&C Insurance Solutions That Drive Growth Anytime, Anywhere",
    link: 'https://www.guidewire.com/insurtech-vanguards/'
  },
  {
    logoImg: majesco,
    detail: "We lead with experience. We move fast and thrive on change. We are the future of insurance. The future of insurance is here. Increase your revenue. Improve your customer experience.",
    link: 'https://ecoexchange.digital1st.io/eco-apps/details/0a54afc9-50da-49c7-90e4-670fddb4e589'
  },
  {
    logoImg: oneshield,
    detail: "Whether you are a P&C Insurer, MGA, Specialty Lines Insurer or Insurance Startup, our solutions are crafted to meet your unique needs.",
    link: 'https://oneshield.com/alliances_category/technology-partners/'
  },
  {
    logoImg: sapiens,
    detail: "Intelligent insurance solutions that accelerate your business and innovation.",
    link: 'https://www.sapiens.com/na/'
  },
  {
    logoImg: snapSheet,
    detail: "provides claims processing software to companies of all sizes. Do more with less, enhance your customer experiences & reduce loss!",
    link: 'https://www.snapsheetclaims.com/'
  },
  {
    logoImg: quicksilver,
    detail: "An end-to-end modular based P&C Insurance processing system that incorporates hundreds of features specific to the insurance industry",
    link: 'https://www.quicksilversystems.com/index.html'
  },
  {
    logoImg: duckgreeck,
    detail: "a leading provider of comprehensive P&C insurance software and services for insurers of all sizes worldwide.",
    link: 'https://www.duckcreek.com/'
  }
  
]
const marketItems = [
  {
    logoImg: awsmarket,
    detail: "provides a new sales channel for ISVs and Consulting Partners to sell their solutions to AWS customers. We make it easy for customers to find, buy, deploy and manage software solutions, including SaaS, in a matter of minutes.",
    link: 'https://aws.amazon.com/marketplace/pp/B088GYR1G4?qid=1598328941119&sr=0-4&ref_=srh_res_product_title'
  },
  {
    logoImg: majesco,
    detail: "EcoExchange is our next-gen partner ecosystem hub using third-party apps for a true plug-and-play environment.",
    link: 'https://ecoexchange.digital1st.io/eco-apps/store'
  }
]
const systemItems = [
  {
    logoImg: inspire,
    detail: "We help clients make the most of insurtech trends, using platforms such as our Insurance Automation Suite",
    link: 'https://inspireinnovations.com/'
  },
  {
    logoImg: neosoft,
    detail: "a leading software development and IT outsourcing company with 25+ years of software engineering excellence and successfully driving digital capabilities.",
    link: 'https://www.neosofttech.com/'
  },
  {
    logoImg: kmg,
    detail: "We create engaging digital solutions by leveraging latest insurance technologies for forward-thinking businesses, helping them accelerate growth and become market leaders.",
    link: 'https://kmgus.com/'
  },
  {
    logoImg: nlbservice,
    detail: "Reimagining businesses to stay one step ahead of the fast-changing world.",
    link: 'https://www.nlbservices.com/'
  },
  {
    logoImg: scripts,
    detail: "Scriptis excels at translating high volumes of content on time and at scale. But we never lose sight of the human dimension of language services.",
    link: 'https://www.scriptis.com/'
  },
  {
    logoImg: rcglobal,
    detail: "Driving Innovation Today, Shaping Tomorrow.   At the intersection of innovation + implementation, engineering business growth + modernizing operations.",
    link: 'https://rcgglobalservices.com/'
  },
  {
    logoImg: odgmcg,
    detail: "ODG supports workers’ comp, disability, and auto liability claims and medical management with unbiased, evidence-based guidelines",
    link: 'https://www.mcg.com/odg/'
  },
  {
    logoImg: trellis,
    detail: "Trellis transforms data from state courts into strategic insights and powerful productivity tools so you can make smarter, faster decisions.",
    link: 'https://trellis.law/'
  },
]

export const PartenerList = () => {

  const [isOpenContact, setIsOpenContact] = useState(false)

  const handleOpenContact = () => {
    setIsOpenContact(true);
  }
  const handleCloseContact = () => {
    setIsOpenContact(false);
  }

  const openPartnerLink = (path) => {
    window.open(path)
  }

  return (
    <Box className="w-full py-28">
      <Container maxWidth="lg">
        <Box className="w-full">
          <h5 className="text-[29px] leading-[40px] font-medium">Trusted by 18 partners and counting</h5>
          <h4 className="text-[32px] md:text-[42px] leading-[41px] md:leading-[54.6px] font-medium py-5">You may contact us directly or visit our partners</h4>
        </Box>
       
        <Box className="w-full gradient-border rounded-xl mt-14">
          <Box className="w-full rounded-xl p-5 md:p-12 bg-white">
            <Box className="w-full" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl:"row"}} justifyContent={"space-between"} 
              alignItems={{xs: "flex-start", sm: "flex-start", md: "center", lg:"center", xl:"center"}} >
              <h3 className="text-[36px] md:text-[56px] leading-[39px] md:leading-[65px] font-medium my-2">Core System</h3>
              <button 
                onClick={() => handleOpenContact()} 
                className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">
                  Contact Us
              </button>
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
                      <button onClick={() => {openPartnerLink(coreItem.link)}} className="font-semibold flex justify-start items-center group relative">
                        Learn more
                        <FaArrowRightLong className="mx-3"/>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#1f1f20] group-hover:w-full"></span>
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
              <button 
                onClick={() => handleOpenContact()} 
                className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">
                  Contact Us
              </button>
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
                      <button onClick={() => {openPartnerLink(coreItem.link)}} className="font-semibold flex justify-start items-center group relative">
                        Learn more
                        <FaArrowRightLong className="mx-3"/>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#1f1f20] group-hover:w-full"></span>
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
              <button onClick={() => handleOpenContact()} 
                className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">
                  Contact Us
              </button>
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
                      <button onClick={() => {openPartnerLink(coreItem.link)}} className="font-semibold flex justify-start items-center group relative">
                        Learn more
                        <FaArrowRightLong className="mx-3"/>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#1f1f20] group-hover:w-full"></span>
                      </button>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Box>
        </Box>
      </Container>
      <ContactUsPopup open={isOpenContact} handleClose={handleCloseContact}/>
    </Box>
  )
}