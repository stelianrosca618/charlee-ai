import { Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { sendEmail } from "../../providers/apis/emailApi";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
export const BookPopup = ({open, handleClose}) => {
  const openPolicy = () => {
    window.open('https://app.termly.io/policy-viewer/policy.html?policyUUID=b5b033f7-4a2f-4c82-a576-1ecd7648f913')
  }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      await sendEmail(formData.email, `${formData.firstName} ${formData.lastName}`);
      toast.success('Thank you for your email.   You will be hearing from us shortly.');
      handleClose();
      setFormData({
        firstName: '',
        lastName: '',
        email: ''
      });
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent className="gradient-background">
        <Box className="w-full" display={"flex"} justifyContent={"flex-end"}>
          <IconButton onClick={handleClose} aria-label="delete" sx={{color: 'white'}}>
            <HighlightOffIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-left ">
          <h2 className="font-medium text-white text-[48px] leading-[52.8px] md:text-[65px] md:leading-[71.5px]">
            Ready to dive in? <br />
            Request a demo today
          </h2>
          <p className="font-normal text-white text-[20px] leading-[31px] py-11">
          Sign up for a personalized demo today and see how Charlee can help you stay ahead of potential fraud, mitigate losses, and optimize efficiency.
          </p>
          <Box component={'form'} onSubmit={handleSubmit} className="w-full" gap={2}>
            <Box className="w-full">
              <Box display={"flex"} alignItems={"center"} gap={2} marginBottom={1}>
                <input type="text" 
                name="firstName"
                onChange={handleInputChange}
                required
                pattern="[A-Za-z]+"
                title="Please enter only letters"
                minLength="2"
                placeholder="Enter your first name" 
                className="w-full rounded-lg py-3 px-4 bg-white"/>
                <input type="text" 
                name="lastName"
                required
                pattern="[A-Za-z]+"
                title="Please enter only letters"
                minLength="2"
                onChange={handleInputChange} 
                placeholder="Enter your last name" 
                className="w-full rounded-lg py-3 px-4 bg-white"/>
              </Box>
              <input type="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              onChange={handleInputChange}
              placeholder="Enter your email" 
              className="w-full rounded-lg py-3 px-4 bg-white"/>
            </Box>
            <Box className="w-full mt-2">
              <button 
                type="submit"
                className="rounded-lg w-full font-medium text-[18px] leading-[24px] px-8 py-3 border border-[#42DDD1] bg-[#42DDD1] hover:bg-transparent hover:text-white">
                Submit
              </button>
            </Box>
          </Box>
          <p className="text-white pt-3">
            We care about the protection of your data. read our <a onClick={() => {openPolicy()}} className="footer-privacy cursor-pointer">Privacy policy</a>
          </p>
        </Box>
      </DialogContent>
    </Dialog>
  )
}