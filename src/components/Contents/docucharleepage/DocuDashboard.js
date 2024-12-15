import { Box, Container } from "@mui/material"
import docuDashboard from "../../../assets/imgs/Dashboards/inteligenceDashboard.png"
import docuCharleeRobot from "../../../assets/imgs/Dashboards/docuCharlee_robot.png"
import patterns from "../../../assets/imgs/pattens/Path.png"
export const DocuDashboard = () => {
  return (
    <Box className="w-full relative">
      <div className="h-[400px] w-full absolute top-[50%]" style={{background: `url(${patterns})`, backgroundRepeat: 'repeat-x', transform: 'translateY(-50%)'}}></div>
      <Container maxWidth="lg">
        <Box className="docuChalee-board docuChalee-board w-full relative" sx={{background: `url(${docuDashboard})`, backgroundRepeat: "no-repeat", backgroundSize: '110%', backgroundPosition: 'center'}}>
          <img src={docuDashboard} alt="dashboard" className="hidden md:block w-full mx-auto opacity-0" style={{maxWidth: '100vw'}} />
          <img src={docuCharleeRobot} alt="docuRobot" className="docuChalee-bot hidden md:block absolute bottom-0 left-0" style={{transform: 'translate(-15%, -20%)'}} />
          <img src={docuDashboard} alt="dashboard" className="docuChalee-Mboard block md:hidden w-[130vw] mx-auto" style={{maxWidth: '200vw', transform: 'translate(-18vw, 0)'}} />
          <img src={docuCharleeRobot} alt="docuRobot" className="docuChalee-Mbot block md:hidden absolute bottom-0 left-0"  style={{transform: 'translate(-26%, 17%)'}}/>
        </Box>
      </Container>
    </Box>
  )
}