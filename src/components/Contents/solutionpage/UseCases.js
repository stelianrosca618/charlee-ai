import { Box, Container, Grid2, Typography } from "@mui/material"
import usecaseImg1 from "../../../assets/imgs/banners/useCase1.png"
import usecaseImg2 from "../../../assets/imgs/banners/useCase2.png"
export const UseCases = () => {
  return (
    <Box className="w-full bg-[#021744] text-white py-20">
      <Container maxWidth="lg">
        <Box className="w-full text-center ">
          <h4 className="text-[42px] leading-[54.6px] font-medium">Use Cases</h4>
          <h6 className="text-[24px] leading-[32px] font-normal py-5" >
            Charlee® Insights are applicable for Claims, Underwriting and IT<br /> (Analytics/Data Science) teams.
          </h6>
        </Box>
        <Box className="w-full py-28">
          <Grid2 container spacing={6}>
            <Grid2 size={6} className="relative min-h-[520px]">
              <div className="absolute w-[50vw] h-full right-0 rounded-lg"
                style={{backgroundImage: `url(${usecaseImg1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
              ></div>
            </Grid2>
            <Grid2 size={6} className="relative min-h-[520px]">
              <Box className="w-full text-start">
                <h6 className="text-[24px] leading-[32px] font-normal">Claims</h6>
                <Box className="w-full" marginY={'40px'}>
                  <button className="rounded-lg gradient-border p-1 mr-2">
                    <div className="rounded-lg bg-[#021744] py-2 px-3">
                    Case Study 1
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#021744] py-2 px-3">
                    Case Study 2
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#021744] py-2 px-3">
                    Case Study 3
                    </div>
                  </button>
                </Box>
                <h2 className="text-[65px] leading-[71.5px] font-medium mb-7">
                  Claim Severity Management
                </h2>
                <p>Charlee® gives claims teams a full view of data to manage claim severity with precision. By identifying patterns in collision injuries, Charlee® helps reduce risks and enables faster, fairer resolutions</p>
                <button className="mt-16 rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-white text-white hover:text-[#021744] hover:bg-white">
                  Watch Video
                </button>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        <Box className="w-full py-28 min-h-[520px]">
          <Grid2 container spacing={6}>
            <Grid2 size={6} className="relative">
              <Box className="w-full text-start">
                <h6 className="text-[24px] leading-[32px] font-normal">Underwriting</h6>
                <Box className="w-full" marginY={'40px'}>
                  <button className="rounded-lg gradient-border p-1 mr-2">
                    <div className="rounded-lg bg-[#021744] py-2 px-3">
                    Case Study 1
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#021744] py-2 px-3">
                    Case Study 2
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#021744] py-2 px-3">
                    Case Study 3
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#021744] py-2 px-3">
                    Case Study 4
                    </div>
                  </button>
                </Box>
                <h2 className="text-[65px] leading-[71.5px] font-medium mb-7">
                  Key Risk Factors and Emerging Risks 
                </h2>
                <p>The Charlee Insurance Insights Engine (patent pending) provides a great resource for Underwriting Management Risk Analysis in evaluating and managing portfolios. Previous years of claims data can be leveraged for powerful Artificial Intelligence generated insights for a good understanding of prior losses. These Insights can help an Underwriting Manager develop and monitor an efficient and effective Underwriting strategy, including risk selection and endorsements</p>
                <button className="mt-16 rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-white text-white hover:text-[#021744] hover:bg-white">
                  Watch Video
                </button>
              </Box>
            </Grid2>
            <Grid2 size={6} className="relative">
              <div className="absolute w-[50vw] h-full left-0 rounded-lg"
                style={{backgroundImage: `url(${usecaseImg2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
              ></div>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  )
}