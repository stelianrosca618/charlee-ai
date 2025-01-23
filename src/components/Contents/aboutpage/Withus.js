import { Box, Container } from "@mui/material"
import { Link } from "react-router-dom"

export const Withus = () => {
  return (
   <Box className="about-withUs w-full bg-[#F9F9F9] pb-20">
    <Container maxWidth="lg">
      <Box className="about-withUsCard w-full gradient-background rounded-2xl py-[80px] px-6 md:px-[190px] text-white">
        <h4 className="text-center text-[42px] leading-[54.6px]">Partner with us</h4>
        <p className="text-[20px] leading-[31px] font-normal mt-5 mb-11">
          We’re always looking for partnerships that align with our mission. Whether you’re in technology, insurance, or claims management, let’s explore how we can work together to create smarter claims solutions.
        </p>
        <Link to={'/partner'}>
          <button className="rounded-full bg-transparent border border-white hover:bg-white hover:text-black text-[18px] leading-[24px] font-medium py-3 px-12">Connect</button>
        </Link>
      </Box>
    </Container>
   </Box> 
  )
}