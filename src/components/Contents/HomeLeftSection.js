import { Box, Container } from "@mui/material"
import securityCoverIco from "../../assets/imgs/icons/security-cover.png"
import checkBoxIco from "../../assets/imgs/icons/Checkbox_base.png"
export const HomeLeftSection = () => {
  return (
   <Box className="w-full bg-[#EDF3F8]">
      <Container maxWidth="lg">
        <Box clasName="w-full" display={"flex"} justifyContent={"between"}>
          <Box flex={1}>
            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} paddingBottom={'24px'}>
              <img src={securityCoverIco} alt="secutify-img"/>
              <h5 className="text-[29px] font-medium leading-10 ml-3">4SeeCharlee</h5>
            </Box>
            <Box>
              <h3 className="text-[65px] font-medium leading-[71.5px] text-left mb-6">Predict & Prevent</h3>
              <p className="text-[20px] font-normal leading-[31px] text-left">
                Charlee.ai is an AI-powered predictive analytics solution for the P&C industry, delivering actionable insights on every claim—designed to empower claims professionals with precision and ease.
              </p>
              <Box paddingLeft={3} marginTop={'48px'}>
                <ul className="list-image-[url(./assets/imgs/icons/Checkbox_base.png)] list-outside text-left text-[20px] leading-[31px]">
                  <li className=" space-x-3">Predicts attorney involvement, litigation, severity, and reserves.</li>
                  <li>Flags claims with data-driven insights.</li>
                  <li>Provides insights via dashboards, reports, APIs, and emails.</li>
                  <li>Optimizes claims workflows from assignment to settlement.</li>
                  <li>Reduces cycle time and litigation costs.</li>
                </ul>
              </Box>
            </Box>
            <Box>
              <button>Dive deeper</button>
            </Box>
          </Box>
          <Box flex={1}></Box>
        </Box>
      </Container>
   </Box> 
  )
}