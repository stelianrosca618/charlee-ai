import { Box, Container, Grid2 } from "@mui/material"
import guidewire from "../../assets/imgs/brands/guidewire.png";
import majesco from "../../assets/imgs/brands/majesco.png";
import awsmarket from "../../assets/imgs/brands/awsmarketplace.png";
import oneshield from "../../assets/imgs/brands/oneshield.png";
import snapSheet from "../../assets/imgs/brands/snapsheet.png";
import quicksilver from "../../assets/imgs/brands/quicksilver.png";
import duckgreeck from "../../assets/imgs/brands/duckcreek.png";
import inspire from "../../assets/imgs/brands/Inspire.png"
export const Parteners = () => {
  return(
    <Box className="w-full bg-[#EDF3F8] pt-28">
      <Container maxWidth="lg">
        <Box className="w-full text-center">
          <h5 className="uppercase font-semibold tracking-wide text-[#0099B0] text-[14px] leading-[15.96px]">parteners</h5>
          <h2 className="font-medium text-[29px] leading-[40px] md:text-[42px] md:leading-[54.6px] mt-6">Trusted by the world’s most innovative teams</h2>
        </Box>
        <Box className="w-full py-28">
          <Grid2 container spacing={2}>
            <Grid2 size={{xs:12, md:3}}>
              <Box className="w-full rounded-xl gradient-border">
                <Box className="w-full rounded-xl bg-[#EDF3F8] h-28" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <img src={guidewire} alt="guidewire"/>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{xs:12, md:3}}>
              <Box className="w-full rounded-xl gradient-border">
                <Box className="w-full rounded-xl bg-[#EDF3F8] h-28" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <img src={majesco} alt="majesco"/>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{xs:12, md:3}}>
              <Box className="w-full rounded-xl gradient-border">
                <Box className="w-full rounded-xl bg-[#EDF3F8] h-28" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <img src={awsmarket} alt="awsmarket"/>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{xs:12, md:3}}>
              <Box className="w-full rounded-xl gradient-border">
                <Box className="w-full rounded-xl bg-[#EDF3F8] h-28" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <img src={oneshield} alt="oneshield"/>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{xs:12, md:3}}>
              <Box className="w-full rounded-xl gradient-border">
                <Box className="w-full rounded-xl bg-[#EDF3F8] h-28" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <img src={snapSheet} alt="snapSheet"/>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{xs:12, md:3}}>
              <Box className="w-full rounded-xl gradient-border">
                <Box className="w-full rounded-xl bg-[#EDF3F8] h-28" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <img src={quicksilver} alt="quicksilver"/>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{xs:12, md:3}}>
              <Box className="w-full rounded-xl gradient-border">
                <Box className="w-full rounded-xl bg-[#EDF3F8] h-28" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <img src={duckgreeck} alt="duckgreeck"/>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{xs:12, md:3}}>
              <Box className="w-full rounded-xl gradient-border">
                <Box className="w-full rounded-xl bg-[#EDF3F8] h-28" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <img src={inspire} alt="inspire"/>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        <Box className="w-full">
          <button className="font-medium text-[18px] rounded-full py-3 px-12 border border-[#021744] hover:bg-[#021744] hover:text-white">
            See all parteners
          </button>
        </Box>
      </Container>
    </Box>   
  )
}