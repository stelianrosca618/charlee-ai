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
export const Contact = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F3F4F4]">
      <HomeHeader headerColor={'#4CFFE9'} textColor={'#021744'}/>
      <div className="contact-page ">
        <div className="absolute w-full h-[400px] bg-[#4CFFE9]"></div>
        <Box className="w-full py-32">
          <Container maxWidth="lg">
            <Box className="relative w-full bg-white rounded-xl px-12 py-24 shadow-lg">
              <Grid2 container spacing={3}>
                <Grid2 size={{xs:12, sm:12, md: 5, lg: 5, xl: 5}}>
                  <Box className="w-full h-full text-start">
                    <img src={charleeface} alt="charlee-face" className="h-28" />
                    <h2 className="text-[36px] md:text-[65px] leading-[39.6px] md:leading-[71.5px] font-medium">Get in touch!</h2>
                    <Box className="text-[16px] leading-[31px] font-normal" marginTop={'32px'} paddingX={1}>
                      <p>742 Evergreen Terrace</p>
                      <p>Springfield, OR 12345</p>
                    </Box>
                    <Box className="text-[16px] leading-[31px] font-normal" marginTop={'32px'} paddingX={1}>
                      <p className="flex justify-start items-center " ><FiPhone size={'20px'} className="mr-2" /> +1 (555) 123-4567</p>
                      <p className="flex justify-start items-center pt-2" ><MdMailOutline size={'20px'} className="mr-2" /> support@example.com</p>
                    </Box>
                    <Box className="text-[16px] leading-[31px] font-normal" marginY={'32px'} paddingX={1}>
                      <p>Follow Us:</p>
                      <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} marginTop={2}>
                        <FaFacebook className="mx-1 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                        <CiInstagram className="mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                        <FaTwitter className="mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                        <FaGithub className="mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                        <CiBasketball className="mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                      </Box>
                    </Box>
                  </Box>
                </Grid2>
                <Grid2 size={{xs:12, sm:12, md:7, lg:7, xl:7}}>
                  <Box className="w-full h-full text-start">
                    <h6 className="text-[24px] leading-[32px] font-normal">I would like to...</h6>
                    <FormControl sx={{my: 3}} component="fieldset" variant="standard">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox  name="gilad" />
                          }
                          label="Learn more about the free POC"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox name="jason" />
                          }
                          label="Receive product information"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox name="antoine" />
                          }
                          label="Request a demo"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox name="antoine" />
                          }
                          label="Receive your Whitepaper"
                        />
                      </FormGroup>
                    </FormControl>
                    <Box className="w-full my-4">
                      <TextField fullWidth size="small" id="outlined-basic" label="Full Name" variant="outlined" />
                    </Box>
                    <Box className="w-full my-4">
                      <TextField fullWidth size="small" className="my-3" id="outlined-basic" label="Email" variant="outlined" />
                    </Box>
                    <Box className="w-full my-4">
                      <TextField fullWidth size="small" className="my-3" id="outlined-basic" label="Phone" variant="outlined" />
                    </Box>
                    <Box className="w-full my-4">
                      <TextField fullWidth size="small" className="my-3" id="outlined-basic" label="Company Title" variant="outlined" />
                    </Box>
                    <Box className="w-full my-4">
                      <TextField fullWidth size="small" className="my-3" id="outlined-basic" label="Message" variant="outlined"  multiline rows={4} maxRows={4}/>
                    </Box>
                    <Box className="w-full my-4">
                      <button className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">Submit</button>
                    </Box>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Container>
        </Box>
      </div>
      <Footer />
    </div>
  )
}