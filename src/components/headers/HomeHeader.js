import { Box, Container } from "@mui/material"
import { useEffect} from "react"
import { MobileMenu } from "./MobileMenu"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { HeadLogo } from "../Icons/HeadLogo"
import { NavButton } from "./NavButton"
import { NavMenuIconBtn } from "./NavMenuIconBtn"

const paths = [
  {
    name: 'Products',
    childs: [
      {
        name: 'AskCharlee',
        pathName: "/product/askcharlee"
      },
      {
        name: '4SeeCharlee',
        pathName: "/product/seecharlee"
      },
      {
        name: 'DocuCharlee',
        pathName: "/product/docucharlee"
      },
      {
        name: 'FindCharlee',
        pathName: "/product/findcharlee"
      }
    ],
    isParent: true,
    pathName: "",
  },
  // {
  //   name: "Research",
  //   childs: [],
  //   isParent: false,
  //   pathName: '/research',
  // },
  {
    name: 'Solutions',
    childs: [],
    isParent: false,
    pathName: "/solutions",
  },
  {
    name: 'Partners',
    childs: [],
    isParent: false,
    pathName: "/partners",
  },
  {
    name: 'Contact Us',
    childs: [],
    isParent: false,
    pathName: "/connect",
  },
  {
    name: 'About',
    childs: [],
    isParent: false,
    pathName: "/about",
  },
]

export const HomeHeader = ({headerColor,  textColor}) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [location])
  
  return (
    <Box className={`header w-screen bg-[${headerColor}] py-6 fixed top-0 z-50`}>
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
                <NavButton 
                  key={key}
                  navInfo={pathItem}
                  isActive={location.pathname === pathItem.pathName}
                  textColor={textColor}
                  bgColor={headerColor}
                />
              ))}
              
              <Box className="pl-3">
                {/* <img src={navIco}  alt="nav-ico" className="h-5"/> */}
                <NavMenuIconBtn bgColor={headerColor} textColor={textColor}/>
              </Box>
            </Box>
          </Box>
          <MobileMenu bgColor={headerColor} textColor={textColor}/>
        </Box>
      </Container>
    </Box>
  )
}