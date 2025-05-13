import { Box, Container, Grid2 } from "@mui/material"
import parttern1 from "../../assets/imgs/pattens/pattern1.png"
import handPhone from "../../assets/imgs/banners/handPhone.png";
import aboutBoard from "../../assets/imgs/banners/AboutBoard.png";

export const AboutHero = () => {
  return (
    <>
      <Box className="w-full bg-[#0D131E] h-[620px]"  sx={{backgroundImage: `url(${parttern1})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'calc(100% + 50px);', backgroundSize: '100%'}}>
        <Container maxWidth="lg" className="h-full">
          <Box className="w-full h-full" display={"flex"} justifyContent={"center"} alignItems={"center"} >
            <div>
              <h6 className="about-eyebrow uppercase text-[#4CFFE9] text-[14px] leading-[15.96px] font-bold">what we do</h6>
              <h2 className="about-header hidden md:block text-white text-[65px] leading-[71.5px] font-medium mt-6">
                We are transforming Insurance<br /> Through AI Innovation
              </h2>
              <h2 className="block md:hidden text-white text-[36px] leading-[39.6px] font-medium mt-6">
                We are transforming Insurance Through AI Innovation
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
                <Box className="aboutHand-text w-full text-left pt-[110px] pb-4 md:pb-[190px]">
                  <h4 className="text-[42px] leading-[54.6px] font-medium py-4">Charlee.ai: Leading AI & NLP Innovation in Insurance</h4>
                  <p className="py-4 text-[16px]">At Charlee.ai, we have pioneered the use of AI and NLP in insurance, transforming unstructured claims data into actionable insights. Our journey began with developing a unified claims platform, capable of digesting all formats and varieties of claims data into a structured model.</p>
                  <p className="py-4 text-[16px]">
                    Our first breakthrough came with FindCharlee, a pre-built fraud detection solution that launched commercially in 2016. By capturing behavioral patterns across 160+ fraud schemes, we uncovered vast amounts of exposure data, which fueled the next phase of our innovation—building predictive intelligence beyond fraud detection.
                    Over 3.5 years, we meticulously trained our patented Claims Language Model on 55 million claims, leading to the creation of our Exposure Intelligence Database, now a proprietary asset containing 50,000+ base exposure risk insights. This continuously growing database, alongside our 70+ proprietary KPIs, enhances claims decision-making with deeper risk visibility.
                    We initially focused on Life Insurance and Workers’ Compensation, refining our models through collaborations with California’s District Attorney and the Department of Insurance. Today, we have expanded into both Commercial and Personal Lines of P&C insurance, offering pre-trained ML models and insights across multiple insurance domains.
                    By 2023, we had gone mainstream, securing patents for our NLP techniques and unstructured data extraction methods. As of 2024, we hold three issued patents, with one pending and several more in the pipeline.
                  </p>
                  <p className="py-4 text-[16px]">
                  Now, with the launch of our Claims Agentic AI Library, we are advancing claims automation further, integrating intelligent agents that streamline workflows, enhance fraud detection, and optimize reserves. Our predictive engine delivers insights on risk, litigation, and attorney involvement, enabling insurers to prioritize claims effectively and transform claims management.
                  As a leader in AI-driven claims intelligence, Charlee.ai continues to drive innovation, helping insurers harness the power of NLP, machine learning, and predictive analytics to navigate the complexities of claims with confidence.
                  </p>
                </Box>
              </Grid2>
              <Grid2 size={{xs:12, sm: 12, md:5, lg:5, xl: 5}} className="relative">
                <Box className="w-full relative">
                  <img src={aboutBoard} alt="handPhone" className=" relative w-full h-full block md:hidden -right-4"/>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
        {/* <img src={aboutBoard} alt="alt-handphone" className="aboutHand-image hidden md:block absolute h-[120%] bottom-5 -right-5" /> */}
        <img src={aboutBoard} alt="alt-handphone" className="aboutHand-image hidden md:block absolute h-[100%] -top-[180px] left-[57%]" />
      </Box>
    </>
    
  )

}