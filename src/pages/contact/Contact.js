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

import SplitType from 'split-type'
import gsap, {} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { useRef, useState } from "react"
import { sendContactEmail } from "../../providers/apis/emailApi";
import { toast } from "react-toastify";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

export const Contact = () => {
  const contactRes = useRef();

  const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      companyTitle: '',
      companyName: "",
      message: '',
      interests: ''
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
        interests: name
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
        companyname: formData.companyName,
        compnaytitle: formData.companyTitle,
        message: formData.message
      }
      await sendContactEmail(formData.email, formData.fullName, constactData);
  
      toast.success('Thank you for your email. You will be hearing from us shortly.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyTitle: '',
        companyName: "",
        message: '',
        interests: {
          poc: false,
          productInfo: false,
          demo: false,
          whitepaper: false
        }
      });
    };

  useGSAP(() => {
    const charleeFace = gsap.utils.toArray('.charlee-face');
    const contactTitle = new SplitType('.contact-title', {
      types: 'lines, words, chars',
      tagName: 'h2'
    }) 
    const contactTexts = gsap.utils.toArray(".contact-text");
    const contactSocials = gsap.utils.toArray(".contact-socials");
    const formContent = gsap.utils.toArray(".contactForm-content")
    const contactTimeline = gsap.timeline();
    contactTimeline.from(charleeFace, {clipPath: 'inset(100% 0% 0% 0%)', opacity: 0, ease: 'power1.out', stagger: 0.5, duration: 1}, "+=0");
    contactTimeline.from(contactTitle.chars, {y: '-100%', opacity: 0, ease: 'power1.out', stagger: 0.02, duration: 0.5}, "+=0");
    contactTexts.map(textItem => {
      contactTimeline.from(textItem, {y: '-100%', opacity: 0, ease: 'power1.out', stagger: 0.01, duration: 0.3}, "+=0");
    })
    contactTimeline.from(contactSocials, {y: '100%', opacity: 0, ease: 'power1.out', stagger: 0.02, duration: 0.5}, "+=0");
    contactTimeline.from(formContent, {clipPath: 'inset(0% 0% 100% 0%)', opacity: 0, ease: 'power1.out', stagger: 0.5, duration: 1}, "+=0");
  }, {scope: contactRes})

  return (
    <div className="w-full overflow-hidden bg-[#F3F4F4]">
      <HomeHeader headerColor={'#4CFFE9'} textColor={'#021744'}/>
      <div ref={contactRes} className="contact-page ">
        <div className="absolute w-full h-[400px] bg-[#4CFFE9]"></div>
        <Box className="w-full py-32">
          <Container maxWidth="lg">
            <Box className="relative w-full bg-white rounded-xl px-12 py-24 shadow-lg">
              <Grid2 container spacing={3}>
                <Grid2 size={{xs:12, sm:12, md: 5, lg: 5, xl: 5}}>
                  <Box className="w-full h-full text-start">
                    <img src={charleeface} alt="charlee-face" className="charlee-face h-28" />
                    <h2 className="contact-title text-[36px] md:text-[65px] leading-[39.6px] md:leading-[71.5px] font-medium">Get in touch!</h2>
                    <Box className="text-[16px] leading-[31px] font-normal" marginTop={'32px'} paddingX={1}>
                      <p className="contact-text">4900 Hopyard Road</p>
                      <p className="contact-text">Plesanaton, CA 94588</p>
                    </Box>
                    <Box className="text-[16px] leading-[31px] font-normal" marginTop={'32px'} paddingX={1}>
                      <p className="contact-text flex justify-start items-center " ><FiPhone size={'20px'} className="mr-2" /> +1 (855) 242-7533</p>
                      <p className="contact-text flex justify-start items-center pt-2" ><MdMailOutline size={'20px'} className="mr-2" /> info@Charlee.ai</p>
                    </Box>
                    <Box className="text-[16px] leading-[31px] font-normal" marginY={'32px'} paddingX={1}>
                      <p className="contact-text">Follow Us:</p>
                      <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} marginTop={2}>
                        <FaFacebook onClick={() => {window.open('https://www.facebook.com/charleeai/')}} className="contact-socials mx-1 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                        <CiInstagram className="contact-socials mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                        <FaTwitter onClick={() => {window.open('https://twitter.com/charleeai')}} className="contact-socials mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                        <FaGithub onClick={() => {window.open('https://github.com/infinilytics')}} className="contact-socials mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                        <CiBasketball className="contact-socials mx-3 cursor-pointer" color="#9CA3AF" size={'24px'}/>
                      </Box>
                    </Box>
                  </Box>
                </Grid2>
                <Grid2 size={{xs:12, sm:12, md:7, lg:7, xl:7}}>
                  <Box component={'form'} onSubmit={handleSubmit} className="contactForm-content w-full h-full text-start">
                    <h6 className="text-[24px] leading-[32px] font-normal">I would like to...</h6>
                    <FormControl sx={{my: 3}} component="fieldset" variant="standard">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox  name="poc" 
                            checked={formData.interests == 'poc'}
                            onChange={handleCheckboxChange} aria-label="Learn more about the free POC"
                            />
                          }
                          label="Learn more about the free POC"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox name="productInfo" 
                            checked={formData.interests == 'productInfo'}
                            onChange={handleCheckboxChange} aria-label="Receive product information"
                            />
                          }
                          label="Receive product information"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox name="demo" 
                            checked={formData.interests == 'demo'}
                            onChange={handleCheckboxChange} aria-label="Request a demo"
                            />
                          }
                          label="Request a demo"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox name="whitepaper" 
                            checked={formData.interests == 'whitepaper'}
                            onChange={handleCheckboxChange} aria-label="Receive your Whitepaper"
                            />
                          }
                          label="Receive your Whitepaper"
                        />
                      </FormGroup>
                    </FormControl>
                    <Box className="w-full my-4">
                      <TextField fullWidth size="small" required
                      name="fullName" onChange={handleInputChange} value={formData.fullName} id="outlined-basic" label="Full Name" variant="outlined" />
                    </Box>
                    <Box className="w-full my-4">
                      <TextField fullWidth size="small" required
                      name="email" onChange={handleInputChange} value={formData.email}
                      className="my-3" id="outlined-basic" label="Email" variant="outlined" />
                    </Box>
                    <Box className="w-full my-4">
                      <TextField fullWidth size="small"  
                      name="phone" onChange={handleInputChange} value={formData.phone}
                      className="my-3" id="outlined-basic" label="Phone" variant="outlined" />
                    </Box>
                    <Box className="w-full my-4">
                      <Grid2 container spacing={2}>
                        <Grid2 size={{xs:12, sm:12, md:6, lg:6, xl:6}}>
                          <TextField fullWidth 
                          name="companyTitle" onChange={handleInputChange} value={formData.companyTitle}
                          size="small" className="my-3" id="outlined-basic" label="Title" variant="outlined" />
                        </Grid2>
                        <Grid2 size={{xs:12, sm:12, md:6, lg:6, xl:6}}>
                          <TextField fullWidth 
                          name="companyName" onChange={handleInputChange} value={formData.companyName}
                          size="small" className="my-3" id="outlined-basic" label="Company" variant="outlined" />
                        </Grid2>
                      </Grid2>
                      
                    </Box>
                    <Box className="w-full my-4">
                      <TextField fullWidth size="small"
                      name="message" onChange={handleInputChange} value={formData.message}
                      className="my-3" id="outlined-basic" label="Message" variant="outlined"  multiline rows={4} maxRows={4}/>
                    </Box>
                    <Box className="w-full my-4">
                      <button type="submit" className="text-[18px] leading-[24px] font-medium py-4 px-14  my-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">Submit</button>
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