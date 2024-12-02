import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormGroup, Grid2, TextField } from "@mui/material"
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import charleeface from "../../assets/imgs/icons/charlee-face.png"

export const ContactUsPopup = ({open, handleClose}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={"lg"}
    >
      <DialogTitle id="alert-dialog-title">
      </DialogTitle>
      <DialogContent>
        <Box className="relative w-full bg-white rounded-xl px-12 py-12 shadow-lg">
          <Grid2 container spacing={3}>
            <Grid2 size={{xs:12, sm:12, md: 5, lg: 5, xl: 5}}>
              <Box className="w-full h-full text-start">
                <img src={charleeface} alt="charlee-face" className="h-28" />
                <h2 className="text-[36px] md:text-[65px] leading-[39.6px] md:leading-[71.5px] font-medium">Get in touch!</h2>
                <Box className="text-[16px] leading-[31px] font-normal" marginTop={'32px'} paddingX={1}>
                  <p>4900 Hopyard Road</p>
                  <p>Plesanaton, CA 94588</p>
                </Box>
                <Box className="text-[16px] leading-[31px] font-normal" marginTop={'32px'} paddingX={1}>
                  <p className="flex justify-start items-center " ><FiPhone size={'20px'} className="mr-2" /> +1 (855) 242-7533</p>
                  <p className="flex justify-start items-center pt-2" ><MdMailOutline size={'20px'} className="mr-2" /> info@Charlee.ai</p>
                </Box>
                <Box className="text-[16px] leading-[31px] font-normal" marginY={'32px'} paddingX={1}>
                  <p>Follow Us:</p>
                  <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} marginTop={2}>
                    <FaFacebook onClick={() => {window.open('https://www.facebook.com/charleeai/')}} className="mx-1 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                    <CiInstagram className="mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                    <FaTwitter onClick={() => {window.open('https://twitter.com/charleeai')}} className="mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                    <FaGithub onClick={() => {window.open('https://github.com/infinilytics')}} className="mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
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
                <Box className="w-full my-4" display={"flex"} alignItems={"center"} gap={2}>
                  <button className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">Submit</button>
                  <button onClick={() => handleClose()} className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border text-red-500 border-red-500 hover:bg-red-500 hover:text-white rounded-full">Cancel</button>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </DialogContent>
      <DialogActions>
      
      </DialogActions>
    </Dialog>
  )
}