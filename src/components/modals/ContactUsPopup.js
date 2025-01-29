import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormGroup, Grid2, TextField } from "@mui/material"
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import charleeface from "../../assets/imgs/icons/charlee-face.png"
import { useState } from "react";
import { sendContactEmail, sendEmail } from "../../providers/apis/emailApi";
import { toast } from "react-toastify";

export const ContactUsPopup = ({open, handleClose}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyTitle: '',
    message: '',
    interests: {
      poc: false,
      productInfo: false,
      demo: false,
      whitepaper: false
    }
  });
  const [wants, setWants] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleCheckboxChange = (e) => {
    console.log(e);
    const { name, checked, labels } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: {...prev.interests, [name]: checked}
    }));
    setWants(labels[0].textContent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    // sendEmail(formData.email, formData.fullName);
    const constactData = {
      wants: wants,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      companyname: formData.companyTitle,
      message: formData.message
    }
    await sendContactEmail(formData.email, formData.fullName, constactData);

    toast.success('Thank you for your email. You will be hearing from us shortly.');
    handleClose();
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyTitle: '',
      message: '',
      interests: {
        poc: false,
        productInfo: false,
        demo: false,
        whitepaper: false
      }
    });
  };

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
              <Box component={'form'} onSubmit={handleSubmit} className="w-full h-full text-start">
              

                <h6 className="text-[24px] leading-[32px] font-normal">I would like to...</h6>
                <FormControl sx={{my: 3}} component="fieldset" variant="standard">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox onChange={handleCheckboxChange} ariaLabel="Learn more about the free POC" name="poc" />
                      }
                      label="Learn more about the free POC"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox onChange={handleCheckboxChange} ariaLabel="Receive product information" name="productInfo" />
                      }
                      label="Receive product information"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox onChange={handleCheckboxChange} ariaLabel="Request a demo" name="demo" />
                      }
                      label="Request a demo"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox onChange={handleCheckboxChange} ariaLabel="Receive your Whitepaper" name="whitepaper" />
                      }
                      label="Receive your Whitepaper"
                    />
                  </FormGroup>
                </FormControl>
                <Box className="w-full my-4">
                  <TextField fullWidth size="small" id="outlined-basic" label="Full Name"
                    name="fullName" onChange={handleInputChange}
                  variant="outlined" required/>
                </Box>
                <Box className="w-full my-4">
                  <TextField fullWidth size="small" className="my-3" id="outlined-basic" label="Email" 
                  name="email" onChange={handleInputChange}
                  variant="outlined"  required/>
                </Box>
                <Box className="w-full my-4">
                  <TextField fullWidth size="small" className="my-3" id="outlined-basic" label="Phone" 
                  name="phone" onChange={handleInputChange}
                  variant="outlined"  required/>
                </Box>
                <Box className="w-full my-4">
                  <TextField fullWidth size="small" className="my-3" id="outlined-basic" label="Company Title" 
                  name="companyTitle" onChange={handleInputChange}
                  variant="outlined"  required/>
                </Box>
                <Box className="w-full my-4">
                  <TextField fullWidth size="small" className="my-3" id="outlined-basic" label="Message" 
                  name="message" onChange={handleInputChange}
                  variant="outlined"  multiline rows={4} maxRows={4}/>
                </Box>
                <Box className="w-full my-4" display={"flex"} alignItems={"center"} gap={2}>
                  <button type="submit" className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">Submit</button>
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