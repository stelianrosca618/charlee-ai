import { Box, Container, Grid2 } from "@mui/material"
import { FaLinkedin } from "react-icons/fa";
import ceoAvata from "../../../assets/imgs/teams/ceo-avata.png"
import cioAvata from "../../../assets/imgs/teams/cio-avata.png";
import cofoundAvata from "../../../assets/imgs/teams/cofound-avata.png"
import ctoAvata from "../../../assets/imgs/teams/cto-avata.png";
import croAvata from "../../../assets/imgs/teams/cro-avata.png";
import croAvata1 from "../../../assets/imgs/teams/cro-avata1.png";
const teamMebers = [
  {
    avata: ceoAvata,
    name: 'Sri Ramaswamy',
    position: 'Founder & CEO'
  },
  {
    avata: cioAvata,
    name: 'Josh Standish',
    position: 'Co-Founder & CIO'
  },
  {
    avata: cofoundAvata,
    name: 'Balaji Varadharaj',
    position: 'Co-Founder & Director (India)'
  },
  {
    avata: ctoAvata,
    name: 'Ramaswamy Venkat',
    position: 'Co-Founder & CTO'
  },
  {
    avata: croAvata,
    name: 'Michael Vaccarello',
    position: 'CRO'
  },
  {
    avata: croAvata1,
    name: 'Michael Vaccarello',
    position: 'CRO'
  },
]

export const TeamMember = () => {
  return (
    <Box className="w-full bg-[#F9F9F9] py-[105px]">
      <Container maxWidth="md">
        <Box className="w-full text-center">
          <h5 className="text-[29px] font-medium leading-[40px] ">
            Meet our team of experts
          </h5>
          <h4 className="text-[42px] leading-[54.2px] font-medium mt-6">
            We are dedicated professionals committed to innovation and excellence
          </h4>
        </Box>
        <Box className="w-full py-24">
          <Grid2 container spacing={8}>
            {teamMebers.map((member, key) => (
              <Grid2 key={key} size={4}>
                <Box className="w-full h-full">
                  <Box className=" w-full rounded-full p-4 " sx={{boxShadow: '0px 0px 38px -16px black'}}>
                    <div className="w-full h-full rounded-full " style={{backgroundImage: `url(${member.avata})`, backgroundSize: '110%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                      <div className="w-full h-full backdrop-grayscale hover:backdrop-grayscale-0 rounded-full ">
                        <img src={member.avata} alt="ceo" className="w-full h-full rounded-full opacity-0" />
                      </div>
                    </div>
                  </Box>
                  <h5 className="text-[22px] leading-[34px] font-normal mt-10">
                    {member.name}
                  </h5>
                  <h6 className="text-[#0099B0] text-[15.47px] leading-[28.73px] font-light">
                    {member.position}
                  </h6>
                  <Box className="w-full text-center mt-5" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <FaLinkedin color="#4B5563" size={'19px'}/>
                  </Box>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
    </Box>
  )
}