import { Box, Container, Typography } from "@mui/material"
import headerIco from "../../assets/imgs/icons/head-logo.svg"
import navIco from "../../assets/imgs/icons/NavIco.svg"
import { useState } from "react"
export const HomeHeader = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  return (
    <Box className="header w-screen bg-[#091d48] py-8 fixed top-0 z-20">
      <Container maxWidth={'lg'}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={3}>
          <Box className="w-full">
            <img src={headerIco} alt="header-icon" className="h-7"/>
          </Box>
          <Box className="w-full">
            <Box className="w-full" display={"flex"} justifyContent={"space-between"} >
              <Box className="px-3">
                <Typography color="white" fontWeight={500} fontSize={'18px'} lineHeight={'24px'} >
                  Products
                </Typography>
              </Box>
              <Box className="px-3">
                <Typography color="white" fontWeight={500} fontSize={'18px'} lineHeight={'24px'} >
                  About
                </Typography>
              </Box>
              <Box className="px-3">
                <Typography color="white" fontWeight={500} fontSize={'18px'} lineHeight={'24px'} >
                  Parteners
                </Typography>
              </Box>

              <Box className="px-3">
                <Typography color="white" fontWeight={500} fontSize={'18px'} lineHeight={'24px'} >
                  Solutions
                </Typography>
              </Box>

              <Box className="px-3">
                <Typography color="white" fontWeight={500} fontSize={'18px'} lineHeight={'24px'} >
                  Connect
                </Typography>
              </Box>
              <Box className="pl-3">
                <img src={navIco}  alt="nav-ico" className="h-5"/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}