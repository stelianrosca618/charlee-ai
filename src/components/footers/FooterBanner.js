import { Box, Container, Grid2 } from "@mui/material"
import footerBanerLogo from "../../assets/imgs/banners/footer-banner.png"
export const FooterBanner = () => {

  const openPolicy = () => {
    window.open('https://app.termly.io/policy-viewer/policy.html?policyUUID=b5b033f7-4a2f-4c82-a576-1ecd7648f913')
  }

  return (
    <Box className="w-full gradient-background">
      <Container maxWidth="lg">
        <Box className="w-full ">
          <Grid2 container spacing={1} flexDirection={{xs: "column", md: "row"}} justifyContent={"center"} alignItems={"center"}>
            <Grid2 size={{xs:12, md:7}}>
              <Box className="w-full text-left py-[50px] md:py-[105px]">
                <h2 className="font-medium text-white text-[48px] leading-[52.8px] md:text-[65px] md:leading-[71.5px]">Ready to dive in? <br />
                Request a demo today</h2>
                <p className="font-normal text-white text-[20px] leading-[31px] py-11">
                Sign up for a personalized demo today and see how Charlee can help you stay ahead of potential fraud, mitigate losses, and optimize efficiency.
                </p>
                <Box className="w-full" display={'flex'} justifyContent={"flex-start"} alignItems={"flex-end"} gap={2}>
                  <Box>
                    <Box display={"flex"} alignItems={"center"} gap={2} marginBottom={1}>
                      <input type="text" placeholder="Enter your first name" className="w-full rounded-lg py-3 px-4 bg-white"/>
                      <input type="text" placeholder="Enter your last name" className="w-full rounded-lg py-3 px-4 bg-white"/>
                    </Box>
                    <input type="text" placeholder="Enter your email" className="w-full rounded-lg py-3 px-4 bg-white"/>
                  </Box>
                  <Box>
                    <button className="rounded-lg font-medium text-[18px] leading-[24px] px-8 py-3 border border-[#42DDD1] bg-[#42DDD1] hover:bg-transparent hover:text-white mx-2">
                      Submit
                    </button>
                  </Box>
                </Box>
                <p className="text-white pt-3">
                  We care about the protection of your data. read our <a onClick={() => {openPolicy()}} className="footer-privacy cursor-pointer">Privacy policy</a>
                </p>
              </Box>
            </Grid2>
            <Grid2 size={{xs:12, md:5}}>
              <Box className="w-full">
                <img src={footerBanerLogo} className="h-full max-w-full" />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  )
}