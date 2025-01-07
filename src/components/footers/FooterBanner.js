import { Box, Container, Grid2 } from "@mui/material"
import footerBanerLogo from "../../assets/imgs/banners/footer-banner.png"

import gsap, {} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
export const FooterBanner = () => {

  useGSAP(() => {
    const tl = gsap.timeline({repeat:1, repeatDelay:1, yoyo:true});
    
    
    ScrollTrigger.create({
      animation: tl,
      trigger: `.footer-banner`,
      start: "+100px center",
      end: "bottom center",
      markers: false,
      scrub: 1,
      onEnter: () => {
        const bannerLogo = gsap.utils.toArray('.footerBanner-logo');
        const footerBannerTitle = gsap.utils.toArray(".footerBanner-header");
        const footerBannerSubTitle = gsap.utils.toArray(".footerBanner-subHeader");
        const footerBannerDetail =  gsap.utils.toArray(".footerBanner-detail");
        const firstNameInput = gsap.utils.toArray("#firstName-input");
        const lastNameInput = gsap.utils.toArray("#lastName-input");
        const emailInput = gsap.utils.toArray("#email-input");
        const submitBtn = gsap.utils.toArray('.footerBanner-submit');
        const formHelper = gsap.utils.toArray('.footerBanner-helper');
        gsap.fromTo(bannerLogo[0], {translateX: 1000, opacity: 1}, {translateX: 0, opacity: 1, duration: 1});
        gsap.to(footerBannerTitle[0], {duration: 0.3, text:"Ready to dive in?"}, "+=0")
        gsap.to(footerBannerSubTitle[0], {duration: 0.3, text:"Request a demo today"}, "+=0")    
        gsap.fromTo(footerBannerDetail[0], {clipPath: 'inset(0% 0% 100% 0%)'}, {clipPath: 'inset(0% 0% 0% 0%)', duration: 0.3}, "+=0")
        gsap.fromTo(firstNameInput[0], {clipPath: 'inset(0% 100% 0% 0%)'}, {clipPath: 'inset(0% 0% 0% 0%)', duration: 0.3}, "+=0")
        gsap.fromTo(lastNameInput[0], {clipPath: 'inset(0% 100% 0% 0%)'}, {clipPath: 'inset(0% 0% 0% 0%)', duration: 0.3}, "+=0")
        gsap.fromTo(emailInput[0], {clipPath: 'inset(0% 0% 100% 0%)'}, {clipPath: 'inset(0% 0% 0% 0%)', duration: 0.3}, "+=0")
        gsap.fromTo(submitBtn[0], {clipPath: 'circle(0%)'},  {clipPath: 'circle(100%)', duration: 0.3}, '+=0')
        gsap.fromTo(formHelper[0], {clipPath: 'inset(0% 0% 100% 0%)'}, {clipPath: 'inset(0% 0% 0% 0%)', duration: 0.3}, "+=0")
      },
    })

  })

  const openPolicy = () => {
    window.open('https://app.termly.io/policy-viewer/policy.html?policyUUID=b5b033f7-4a2f-4c82-a576-1ecd7648f913')
  }

  return (
    <Box className="w-full gradient-background">
      <Container maxWidth="lg">
        <Box className="footer-banner w-full ">
          <Grid2 container spacing={1} flexDirection={{xs: "column", md: "row"}} justifyContent={"center"} alignItems={"center"}>
            <Grid2 size={{xs:12, md:7}}>
              <Box className="w-full text-left py-[50px] md:py-[105px]">
                <h2 className="footerBanner-header font-medium text-white text-[48px] leading-[52.8px] md:text-[65px] md:leading-[71.5px] h-[71.5px]">
                </h2>
                <h2 className="footerBanner-subHeader font-medium text-white text-[48px] leading-[52.8px] md:text-[65px] md:leading-[71.5px] h-[71.5px]">
                </h2>
                <p className="footerBanner-detail font-normal text-white text-[20px] leading-[31px] py-11 ">
                Sign up for a personalized demo today and see how Charlee can help you stay ahead of potential fraud, mitigate losses, and optimize efficiency.
                </p>
                <Box className="w-full" display={'flex'} justifyContent={"flex-start"} alignItems={"flex-end"} gap={2}>
                  
                  <Box>
                    <Box display={"flex"} alignItems={"center"} gap={2} marginBottom={1}>
                      <input type="text" id="firstName-input" placeholder="Enter your first name" className="w-full rounded-lg py-3 px-4 bg-white"/>
                      <input type="text" id="lastName-input" placeholder="Enter your last name" className="w-full rounded-lg py-3 px-4 bg-white"/>
                    </Box>
                    <input type="text" id="email-input" placeholder="Enter your email" className="w-full rounded-lg py-3 px-4 bg-white"/>
                  </Box>
                  <Box>
                    <button className="footerBanner-submit rounded-lg font-medium text-[18px] leading-[24px] px-8 py-3 border border-[#42DDD1] bg-[#42DDD1] hover:bg-transparent hover:text-white mx-2">
                      Submit
                    </button>
                  </Box>
                </Box>
                <p className="footerBanner-helper text-white pt-3">
                  We care about the protection of your data. read our <a onClick={() => {openPolicy()}} className="footer-privacy cursor-pointer">Privacy policy</a>
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{xs:12, md:5}}>
              <Box className="w-full">
                <img src={footerBanerLogo} className="footerBanner-logo h-full max-w-full opacity-0" />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  )
}