import { Box, Container, Typography } from "@mui/material"
import headerIco from "../../assets/imgs/icons/head-logo.svg"
import navIco from "../../assets/imgs/icons/NavIco.svg"
import { useState } from "react"
import { MobileMenu } from "./MobileMenu"
export const HomeHeader = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  return (
    <Box className="header w-screen bg-[#091d48] py-8 fixed top-0 z-20">
      <Container maxWidth={'lg'}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={3}>
          <Box className="w-full">
            <img src={headerIco} alt="header-icon" className="h-7"/>
          </Box>
          <Box className="w-full hidden md:block">
            <Box className="w-full" display={"flex"} justifyContent={"space-between"} >
              <Box className="px-3">
                <button className="text-white group font-medium text-[18px] leading-[24px] relative">
                  Products
                  <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                </button>
                
              </Box>
              <Box className="px-3">
                <button className="text-white group font-medium text-[18px] leading-[24px] relative">
                  About
                  <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                </button>
              </Box>
              <Box className="px-3">
                <button className="text-white group font-medium text-[18px] leading-[24px] relative">
                  Parteners
                  <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                </button>
              </Box>

              <Box className="px-3">
                <button className="text-white group font-medium text-[18px] leading-[24px] relative">
                  Solutions
                  <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                </button>
              </Box>

              <Box className="px-3">
                <button className="text-white group font-medium text-[18px] leading-[24px] relative">
                  Connect
                  <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                </button>
              </Box>
              <Box className="pl-3">
                <img src={navIco}  alt="nav-ico" className="h-5"/>
              </Box>
            </Box>
          </Box>
          <MobileMenu />
        </Box>
      </Container>
    </Box>
  )
}