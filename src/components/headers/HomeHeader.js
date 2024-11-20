import { Box, Container, Typography } from "@mui/material"
import headerIco from "../../assets/imgs/icons/head-logo.svg"
import navIco from "../../assets/imgs/icons/NavIco.svg"
import { useState } from "react"
import { MobileMenu } from "./MobileMenu"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { HeadLogo } from "../Icons/HeadLogo"
import { NavIcon } from "../Icons/NavIcon"

const paths = [
  {
    name: 'Products',
    childs: [],
    isParent: true,
    pathName: "",
  },
  {
    name: 'About',
    childs: [],
    isParent: true,
    pathName: "/about",
  },
  {
    name: 'Partners',
    childs: [],
    isParent: true,
    pathName: "/partners",
  },
  {
    name: 'Solutions',
    childs: [],
    isParent: true,
    pathName: "/solutions",
  },
  {
    name: 'Connect',
    childs: [],
    isParent: true,
    pathName: "/connect",
  },
]

export const HomeHeader = ({headerColor,  textColor}) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const location = useLocation();
  console.log("check location change", location);
  return (
    <Box className={`header w-screen bg-[${headerColor}] py-8 fixed top-0 z-20`}>
      <Container maxWidth={'lg'}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={3}>
          <Box className="w-full">
            <Link  to={'/'}>
              <HeadLogo logoColor={textColor} />
              {/* <img src={headerIco} alt="header-icon" className="h-7"/> */}
            </Link>
          </Box>
          <Box className="w-full hidden md:block">
            <Box className="w-full" display={"flex"} justifyContent={"space-between"} >
              {paths.map((pathItem, key) => (
                <Box className="px-3">
                  <Link to={pathItem.pathName}>
                    <button style={{color: textColor}} className={`text-[${textColor}] group font-medium text-[18px] leading-[24px] relative`}>
                      {pathItem.name}
                      <span style={{background: textColor}} class={location.pathname == pathItem.pathName? `absolute -bottom-1 left-0 transition-all h-0.5 w-full`:`absolute -bottom-1 left-0 w-0 transition-all h-0.5 group-hover:w-full`}></span>
                    </button>
                  </Link>
                </Box>
              ))}
              
              <Box className="pl-3">
                {/* <img src={navIco}  alt="nav-ico" className="h-5"/> */}
                <NavIcon iconColor={textColor} />
              </Box>
            </Box>
          </Box>
          <MobileMenu bgColor={headerColor} textColor={textColor}/>
        </Box>
      </Container>
    </Box>
  )
}