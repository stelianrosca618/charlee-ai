import { Box, Container, Divider, Grid2 } from "@mui/material"
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box className="w-full bg-[#021744] text-white py-16">
      <Container>
        <Box className="w-full mb-8">
          <Grid2 container >
            <Grid2 size={{xs: 12, md: 8}}>
              <Box className="w-full text-left">
                <Grid2 container spacing={1}>
                  <Grid2 size={{xs: 6, md: 3}}>
                    <Box className="w-full">
                      <h6 className="uppercase font-bold text-[14px] leading-[26px]">
                        company
                      </h6>
                      <ul className="text-[16px] leading-[31px] mt-4">
                        <li className="py-2">
                          <Link to={'/about'}>
                            About
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/partners'}>
                          Partners
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/solutions'}>
                          Solutions
                          </Link>
                        </li>
                      </ul>
                    </Box>
                  </Grid2>
                  <Grid2 size={{xs: 6, md: 3}}>
                    <Box className="w-full">
                      <h6 className="uppercase font-bold text-[14px] leading-[26px]">
                        Products
                      </h6>
                      <ul className="text-[16px] leading-[31px] mt-4">
                        <li className="py-2">
                          <Link to={'/product/seecharlee'}>
                            4SeeCharlee
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/product/docucharlee'}>
                            DocuCharlee
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/product/askcharlee'}>
                            AskCharlee
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/product/findcharlee'}>
                            FindCharlee
                          </Link>
                        </li>
                      </ul>
                    </Box>
                  </Grid2>
                  <Grid2 size={{xs: 6, md: 3}}>
                    <Box className="w-full">
                      <h6 className="uppercase font-bold text-[14px] leading-[26px]">
                      Connect
                      </h6>
                      <ul className="text-[16px] leading-[31px] mt-4">
                        <li className="py-2">
                          <Link to={'/blogs'}>
                            News
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/blogs'}>
                            Events
                          </Link>
                        </li>
                      </ul>
                    </Box>
                  </Grid2>
                  <Grid2 size={{xs: 6, md: 3}}>
                    <Box className="w-full">
                      <h6 className="uppercase font-bold text-[14px] leading-[26px]">
                      Legal
                      </h6>
                      <ul className="text-[16px] leading-[31px] mt-4">
                        <li className="py-2">Cookies</li>
                        <li className="py-2">Privacy</li>
                        <li className="py-2">Terms</li>
                      </ul>
                    </Box>
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
            <Grid2 size={{xs: 12, md: 4}}>
              <Box className="w-full text-left">
                <h6 className="uppercase font-bold text-[14px] leading-[26px]">
                Subscribe to our newsletter
                </h6>
                <p className="py-4 text-[14px] font-light">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <Box className="w-full" display={'flex'} justifyContent={"flex-start"} alignItems={"center"}>
                  <input type="text" placeholder="Enter your email" className="w-full rounded-lg py-2 px-4 bg-white text-black"/>
                  <button className="rounded-lg font-medium text-[18px] leading-[24px] px-4 py-2 border border-[#42DDD1] bg-[#42DDD1] text-black hover:bg-transparent hover:text-white mx-2">Subscribe</button>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        <Box className="w-full pt-8 border-t border-t-[#4B5563]" display={"flex"} flexDirection={{xs: "column", md: "row"}} justifyContent={"space-between"} alignItems={{xs: "start", md:"center"}}>
          <Box className="text-left py-2">
            <p className="text-[12px] text-white">© 2024 Charlee.ai. All rights reserved.</p>
          </Box>
          <Box className=" py-2" display={"flex"} justifyContent={"flex-end"} justifyItems={"center"}>
            <FaFacebook  onClick={() => {window.open('https://www.facebook.com/charleeai/')}} className="mx-1 cursor-pointer" color="white" size={'24px'}/>
            <CiInstagram className="mx-1 cursor-pointer" color="white" size={'24px'}/>
            <FaTwitter onClick={() => {window.open('https://twitter.com/charleeai')}} className="mx-1 cursor-pointer" color="white" size={'24px'}/>
            <FaGithub onClick={() => {window.open('https://github.com/infinilytics')}} className="mx-1 cursor-pointer" color="white" size={'24px'}/>
            <CiBasketball className="mx-1 cursor-pointer" color="white" size={'24px'}/>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}