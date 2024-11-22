import { Box, Container, Grid2 } from "@mui/material"
import blog5 from "../../../assets/imgs/news/blog5.png"
import blog4 from "../../../assets/imgs/news/blog4.png"
import blog2 from "../../../assets/imgs/news/blog2.png"
export const LineBusiness = () => {
  return (
    <Box className="w-full bg-[#F9F9F9] py-20">
      <Container maxWidth="lg">
        <Box className="w-full">
          <h4 className="text-[42px] leading-[54.6px] font-medium mb-6">Line of Business</h4>
          <h6 className="text-[24px] leading-[32px] font-normal">
            Charlee® ’ insights are applicable for Claims, Underwriting, and insurer’s <br />IT/internal analytics/data science teams. They are available for all<br /> personal, commercial, work comp and specialty/excess lines of business.
          </h6>
        </Box>
        <Box className="w-full py-28">
          <Grid2 container spacing={6}>
            <Grid2 size={5} className="relative min-h-[520px]">
              <div className="absolute w-[50vw] h-full right-0 rounded-lg"
                style={{backgroundImage: `url(${blog5})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
              ></div>
            </Grid2>
            <Grid2 size={7} className="relative min-h-[520px]">
              <Box className="w-full text-start">
                <h6 className="text-[24px] leading-[32px] font-normal">Claims Risk Management</h6>
                <Box className="w-full" marginY={'40px'}>
                  <button className="rounded-lg gradient-border p-1 mr-2">
                    <div className="rounded-lg bg-[#F9F9F9] py-2 px-3">
                    Case Study 1
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#F9F9F9] py-2 px-3">
                    Case Study 2
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#F9F9F9] py-2 px-3">
                    Case Study 3
                    </div>
                  </button>
                </Box>
                <h2 className="text-[65px] leading-[71.5px] font-medium mb-7">
                Workflow Summary with AI Insights
                </h2>
                <p>Charlee® gives claims teams a full view of data to manage claim severity with precision. By identifying patterns in collision injuries, Charlee® helps reduce risks and enables faster, fairer resolutions</p>
                <button className="mt-16 rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                  Watch Video
                </button>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        <Box className="w-full py-28">
          <Grid2 container spacing={6}>
            <Grid2 size={7} className="relative min-h-[520px]">
              <Box className="w-full text-start">
                <h6 className="text-[24px] leading-[32px] font-normal">Litigation and Claims Handling Efficiency</h6>
                <Box className="w-full" marginY={'40px'}>
                  <button className="rounded-lg gradient-border p-1 mr-2">
                    <div className="rounded-lg bg-[#F9F9F9] py-2 px-3">
                    Case Study 1
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#F9F9F9] py-2 px-3">
                    Case Study 2
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#F9F9F9] py-2 px-3">
                    Case Study 3
                    </div>
                  </button>
                </Box>
                <h2 className="text-[65px] leading-[71.5px] font-medium mb-7">
                Open Claims Predicted for Litigation
                </h2>
                <p>The power of Charlee® for litigation prediction allows the Claims Examiner and Manager to identify the claims at risk for possible litigation, allowing the claim handler to take action to resolve the claim efficiently and promptly. The Charlee® Insurance Insights Engine (patent pending) will alert the user weeks before the claim falls into litigation. Artificial Intelligence and natural language processing, coupled with Charlee.ai proprietary insights, brings these predictions with over 80 percent accuracy.</p>
                <button className="mt-16 rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                  Watch Video
                </button>
              </Box>
            </Grid2>
            <Grid2 size={5} className="relative min-h-[520px]">
              <div className="absolute w-[50vw] h-full left-0 rounded-lg"
                style={{backgroundImage: `url(${blog4})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
              ></div>
            </Grid2>
          </Grid2>
        </Box>
        <Box className="w-full py-28">
          <Grid2 container spacing={6}>
            <Grid2 size={5} className="relative min-h-[520px]">
              <div className="absolute w-[50vw] h-full right-0 rounded-lg"
                style={{backgroundImage: `url(${blog2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
              ></div>
            </Grid2>
            <Grid2 size={7} className="relative min-h-[520px]">
              <Box className="w-full text-start">
                <h6 className="text-[24px] leading-[32px] font-normal">Compliance and Performance Monitering</h6>
                <Box className="w-full" marginY={'40px'}>
                  <button className="rounded-lg gradient-border p-1 mr-2">
                    <div className="rounded-lg bg-[#F9F9F9] py-2 px-3">
                    Case Study 1
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#F9F9F9] py-2 px-3">
                    Case Study 2
                    </div>
                  </button>
                  <button className="rounded-lg gradient-border p-1 mx-2">
                    <div className="rounded-lg bg-[#F9F9F9] py-2 px-3">
                    Case Study 3
                    </div>
                  </button>
                </Box>
                <h2 className="text-[65px] leading-[71.5px] font-medium mb-7">
                Quality Control Alerts for Potential Fraud
                </h2>
                <p>Insurance fraud affects everyone, and Charlee® helps Claims, Underwriting, and Special Investigation Units (SIU) tackle it head-on. Using AI-driven insights, Charlee® identifies QC Alerts and Red Flags, uncovering patterns in claims and policies that could signal fraud. With intelligent data delivery, Charlee® empowers your anti-fraud team to spot schemes faster and make informed decisions, turning unstructured text into actionable insights to prevent and reduce fraud.</p>
                <button className="mt-16 rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                  Watch Video
                </button>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  )
}