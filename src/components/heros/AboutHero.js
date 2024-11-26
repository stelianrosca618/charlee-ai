import { Box, Container, Grid2 } from "@mui/material"
import parttern1 from "../../assets/imgs/pattens/pattern1.png"
import handPhone from "../../assets/imgs/banners/handPhone.png";

export const AboutHero = () => {
  return (
    <>
      <Box className="w-full bg-[#0D131E] h-[620px]"  sx={{backgroundImage: `url(${parttern1})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'calc(100% + 50px);', backgroundSize: '100%'}}>
        <Container maxWidth="lg" className="h-full">
          <Box className="w-full h-full" display={"flex"} justifyContent={"center"} alignItems={"center"} >
            <div>
              <h6 className="uppercase text-[#4CFFE9] text-[14px] leading-[15.96px] font-bold">what we do</h6>
              <h2 className="hidden md:block text-white text-[65px] leading-[71.5px] font-medium mt-6">
                We are transforming Insurance<br /> Analytics Through AI Innovation
              </h2>
              <h2 className="block md:hidden text-white text-[36px] leading-[39.6px] font-medium mt-6">
                We are transforming Insurance Analytics Through AI Innovation
              </h2>
            </div>
          </Box>
        </Container>
      </Box>
      <Box className="w-full bg-[#4CFFE9] relative">
        <Container maxWidth="lg">
          <Box className="w-full">
            <Grid2 container >
              <Grid2 size={{xs:12, sm: 12, md:7, lg: 7, xl: 7}}>
                <Box className="w-full text-left pt-[110px] pb-4 md:pb-[190px]">
                  <h4 className="text-[42px] leading-[54.6px] font-medium py-4">Our Journey from Fraud Detection to Predictive Insights</h4>
                  <p className="py-4">At Charlee, we began as a fraud analytics platform focused on effective detection, and have since evolved into a leading predictive analytics engine, harnessing Natural Language Processing (NLP) to extract vital insights on risk, litigation, and attorney involvement through our patented Claims Language Model.</p>
                  <p className="py-4">Since launching in January 2023, customers have seen the value in our prioritized claims lists and reserve management features. Our journey started with life insurance and expanded into workers' compensation through partnerships with the District Attorney in California and the Department of Insurance, providing millions of claims to refine our models. As we continue to enhance our features, we are committed to delivering actionable insights to transform your claims management experience.</p>
                </Box>
              </Grid2>
              <Grid2 size={{xs:12, sm: 12, md:5, lg:5, xl: 5}} className="relative">
                <Box className="w-full relative">
                  <img src={handPhone} alt="handPhone" className="relative w-full h-full block md:hidden -right-4"/>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
        <img src={handPhone} alt="alt-handphone" className="hidden md:block absolute h-[120%] bottom-0 right-0" />
      </Box>
    </>
    
  )

}