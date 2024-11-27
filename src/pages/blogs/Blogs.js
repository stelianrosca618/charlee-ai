import { Box, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid2, TextField } from "@mui/material"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { Footer } from "../../components/footers/Footer"
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";

import charleeface from "../../assets/imgs/icons/charlee-face.png"
import { BlogsHero } from "../../components/heros/BlogsHero";
import { BlogsTabs } from "../../components/Contents/blogspage/BlogsTabs";
export const Blogs = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F3F4F4]">
      <HomeHeader headerColor={'#4CFFE9'} textColor={'#021744'}/>
      <div className="contact-page ">
        <BlogsHero />
        <BlogsTabs />
      </div>
      <Footer />
    </div>
  )
}