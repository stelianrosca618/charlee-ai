import { Box, Container } from "@mui/material"
import securityCoverIco from "../../../assets/imgs/icons/security-cover.png"
import checkBoxIco from "../../../assets/imgs/icons/Checkbox_base.png"
import seeCharleeDashboard from "../../../assets/imgs/Dashboards/seeCharleeDashboard.png";

export const HomeLeftSection = ({detailObject}) => {
  return (
   <Box className={detailObject?.bottomAct? "w-full bg-white" : "w-full bg-[#EDF3F8]"}>
      <Container maxWidth="lg">
        <Box clasName="w-full " display={"flex"} flexDirection={{xs: "column", md: "row"}} justifyContent={"between"} position={"relative"} paddingY={'6rem'}>
          <Box flex={1} height={'100%'}>
            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} paddingBottom={'24px'}>
              <img src={detailObject?.prodIco} alt="secutify-img"/>
              <h5 className="text-[29px] font-medium leading-10 ml-3">{detailObject?.prodItem}</h5>
            </Box>
            <Box>
              <h3 className="text-[65px] font-medium leading-[71.5px] text-left mb-6">{detailObject?.title}</h3>
              <p className="text-[20px] font-normal leading-[31px] text-left">
                {detailObject?.detail}
              </p>
              <Box paddingLeft={3} marginTop={'48px'}>
                <ul className="list-image-[url(./assets/imgs/icons/Checkbox_base.png)] list-outside text-left text-[20px] leading-[31px]">
                  {detailObject?.items.map((itemData, key) => (
                    <li key={key} className="py-4">{itemData}</li>
                  ))}
                </ul>
              </Box>
            </Box>
            <Box textAlign={'left'}>
              <button className="text-[18px] leading-[24px] font-medium py-5 px-12 bg-[#0D131E] text-white border hover:border-[#021744] hover:bg-[#EDF3F8] hover:text-[#021744] rounded-full mt-12">Dive deeper</button>
            </Box>
          </Box>
          <Box flex={1} height={'100%'} position={"relative"} >
            <img src={detailObject?.itemImage} style={{position: "absolute", top: '-130px', left: '-6vw', height: 'auto', width: '90vw', maxWidth: '150vw'}} alt="dashboard"/>
          </Box>
        </Box>
      </Container>
   </Box> 
  )
}